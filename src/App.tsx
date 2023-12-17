import { useState } from "react";
import "./App.css";
import { AnswersRequired } from "./types";
import { Answers, questions, citizenships } from "./constants";
import { Citizenship } from "./components/Citizenship";

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
  const [currentAnswersCount, setCurrentAnswersCount] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers[]>([]);

  function resetQuestions() {
    setCurrentAnswersCount(0);
    setCurrentQuestionId(0);
    setAnswers([]);
  }

  const currentQuestion = questions[currentQuestionId];

  function toggleAnswer(id: number, multiple = false) {
    if (answers.includes(id)) {
      setAnswers((prev) => prev.filter((v) => v !== id));
      setCurrentAnswersCount((prev) => prev - 1);
    } else if (currentAnswersCount === 0 || multiple) {
      setAnswers((prev) => [...prev, id]);
      setCurrentAnswersCount((prev) => prev + 1);
    }
  }

  function checkAnswer(answer: AnswersRequired[0]): boolean {
    if (typeof answer === "number") {
      return answers.includes(answer);
    } else {
      return checkAnswers(answer.values, answer.mode);
    }
  }

  function checkAnswers(
    answersRequired: AnswersRequired,
    mode: "OR" | "AND" = "AND"
  ): boolean {
    if (mode === "AND") {
      return answersRequired.every(checkAnswer);
    } else {
      return answersRequired.some(checkAnswer);
    }
  }

  function nextQuestion() {
    let nextId = currentQuestionId + 1;
    while (nextId < questions.length) {
      const requiredAnswers = questions[nextId].requires;
      if (requiredAnswers && !checkAnswers(requiredAnswers)) {
        nextId += 1;
      } else {
        break;
      }
    }
    setCurrentQuestionId(nextId);
  }

  const citizeshipsApplicable = citizenships.filter((citizenship) => {
    if (citizenship.requires) {
      return checkAnswers(citizenship.requires);
    }
    return true;
  });

  return (
    <div className="app">
      {currentQuestion ? (
        <div className="questions-container">
          {currentQuestionId} / {questions.length}
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{
                width: `${(currentQuestionId * 100) / questions.length}%`,
              }}
            />
          </div>
          <div className="card">
            <p>{currentQuestion.question}</p>
            {currentQuestion.multiple && (
              <p className="multiple-option">Opción múltiple</p>
            )}
            {currentQuestion.answers.map((answer) => (
              <div key={answer.id}>
                <button
                  onClick={() =>
                    toggleAnswer(answer.id, currentQuestion.multiple)
                  }
                  className={`answer ${
                    answers.includes(answer.id) ? "selected" : ""
                  }`}
                >
                  {answer.text}
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={() => {
              setCurrentAnswersCount(0);
              nextQuestion();
            }}
            className="primary"
          >
            PRÓXIMA PREGUNTA
          </button>
        </div>
      ) : (
        <div className="citizenship-grid-container">
          {citizeshipsApplicable.length ? (
            <div className="citizenship-grid">
              {citizeshipsApplicable.map(({ passportImage, title }) => (
                <Citizenship title={title} passportImage={passportImage} />
              ))}
            </div>
          ) : (
            <div>
              No tenemos ciudadanías aplicables registradas en nuestro sistema
            </div>
          )}
          <button className="primary" onClick={resetQuestions}>
            Reintentar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
