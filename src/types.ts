import { Answers } from "./constants/Answers";

export type AnswersRequired = (
  | Answers
  | { mode: "OR" | "AND"; values: AnswersRequired }
)[];
