import { Answers } from "./Answers";
import { AnswersRequired } from "../types";

export const questions: {
  question: string;
  answers: { id: Answers; text: string }[];
  multiple?: boolean;
  requires?: AnswersRequired;
}[] = [
  {
    question: "¿Que edad tienes?",
    answers: [
      { id: Answers.AGE_TEENAGER, text: "18 a 21 años" },
      { id: Answers.AGE_ADULT, text: "22 a 60 años" },
      { id: Answers.AGE_SENIOR, text: "61 a 75 años" },
      { id: Answers.AGE_OLD, text: "75+ años" },
    ],
  },
  {
    question: "¿De donde eres nacional?",
    multiple: true,
    answers: [
      {
        id: Answers.SPAIN_SELECTED_COUNTRIES,
        text: "Iberoamerica, Andorra, Filipinas, Guinea Ecuatorial, Portugal o de origen sefardí",
      },
      {
        id: Answers.UE,
        text: "Unión Europea",
      },
    ],
  },
  {
    question: "¿Cuentas con ancestros con nacionalidad europea?",
    answers: [
      { id: Answers.EUROPEAN_ANCESTRY, text: "Si" },
      { id: Answers.NO_EUROPEAN_ANCESTRY, text: "No" },
    ],
  },
  {
    question: "¿Con que nacionalidades cuentan tus ancestros?",
    multiple: true,
    requires: [Answers.EUROPEAN_ANCESTRY],
    answers: [
      { id: Answers.SPANISH_ANCESTRY, text: "Española" },
      { id: Answers.ITALIAN_ANCESTRY, text: "Italiana" },
      { id: Answers.FRENCH_ANCESTRY, text: "Francesa" },
    ],
  },
  {
    question:
      "¿Alguno de tus ancestros italianos se encuentra vivo, o falleció posterior al año 1850?",
    requires: [Answers.ITALIAN_ANCESTRY],
    answers: [
      { id: Answers.ITALIAN_ANCESTRY_DATE_OK, text: "Si" },
      { id: Answers.ITALIAN_ANCESTRY_DATE_NOT_OK, text: "No" },
    ],
  },
  {
    question: "¿Te encuentras en situación de refugiado en España?",
    answers: [
      { id: Answers.SPAIN_REFUGEE, text: "Si" },
      { id: Answers.SPAIN_NOT_REFUGEE, text: "No" },
    ],
  },
  {
    question: "¿Naciste en territorio español?",
    answers: [
      { id: Answers.BORN_IN_SPAIN_TERRITORY, text: "Si" },
      { id: Answers.BORN_NOT_IN_SPAIN_TERRITORY, text: "No" },
    ],
  },
  {
    question:
      "¿No ejerciste debidamente tu derecho a adquirir la nacionalidad española por opción?",
    answers: [
      { id: Answers.FORGOT_TO_OPT_SPAIN_NATIONALITY, text: "Si" },
      { id: Answers.FORGOT_NOT_TO_OPT_SPAIN_NATIONALITY, text: "No" },
    ],
  },
  {
    question:
      "¿Has estado sujeto legalmente a la tutela, guarda o acogimiento de un ciudadano o institución españoles durante dos años consecutivos?",
    answers: [
      { id: Answers.SUPERVISED_SPAIN, text: "Si" },
      { id: Answers.SUPERVISED_NOT_SPAIN, text: "No" },
    ],
  },
  {
    question:
      "¿Llevas un año casado con un español o española, y NO estás separado legalmente o de hecho?",
    answers: [
      { id: Answers.MARRIED_SPAIN, text: "Si" },
      { id: Answers.MARRIED_NOT_SPAIN, text: "No" },
    ],
  },
  {
    question:
      "¿Eres viudo/a de español/a? ¿En el momento de la muerte del cónyuge NO estaban separados, de hecho o judicialmente?",
    answers: [
      { id: Answers.WIDOW_SPAIN, text: "Si" },
      { id: Answers.WIDOW_NOT_SPAIN, text: "No" },
    ],
  },
  {
    question: "¿Cuentas con padre, madre, abuelo/a con nacionalidad española?",
    requires: [Answers.BORN_NOT_IN_SPAIN_TERRITORY, Answers.SPANISH_ANCESTRY],
    answers: [
      { id: Answers.ANCESTRY_SPAIN, text: "Si" },
      { id: Answers.ANCESTRY_NOT_SPAIN, text: "No" },
    ],
  },
];
