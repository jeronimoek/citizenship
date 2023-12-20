import { Answers } from "./Answers";
import { AnswersRequired } from "../types";

export const citizenships: {
  title: string;
  requires?: AnswersRequired;
  passportImage: string;
}[] = [
  {
    title: "Ciudadanía italiana Jus Sanguinis",
    requires: [
      {
        mode: "OR",
        values: [
          Answers.ITALIAN_ANCESTRY_ONLY_MEN,
          Answers.ITALIAN_ANCESTRY_CHILD_OK,
        ],
      },
    ],
    passportImage: "./assets/Italy.webp",
  },
  {
    title: "Ciudadanía italiana Jus Sanguinis (vía judicial)",
    requires: [Answers.ITALIAN_ANCESTRY_CHILD_NOT_OK],
    passportImage: "./assets/Italy.webp",
  },
  {
    title: "Ciudadanía española por residencia (10 años)",
    passportImage: "./assets/Pasaporte_ES.svg.png",
  },
  {
    title: "Ciudadanía española por residencia (5 años)",
    requires: [Answers.SPAIN_REFUGEE],
    passportImage: "./assets/Pasaporte_ES.svg.png",
  },
  {
    title: "Ciudadanía española por residencia (2 años)",
    requires: [Answers.SPAIN_SELECTED_COUNTRIES],
    passportImage: "./assets/Pasaporte_ES.svg.png",
  },
  {
    title: "Ciudadanía española por residencia (1 año)",
    requires: [
      {
        mode: "OR",
        values: [
          Answers.BORN_IN_SPAIN_TERRITORY,
          Answers.FORGOT_TO_OPT_SPAIN_NATIONALITY,
          Answers.SUPERVISED_SPAIN,
          Answers.MARRIED_SPAIN,
          Answers.WIDOW_SPAIN,
          Answers.ANCESTRY_SPAIN,
        ],
      },
    ],
    passportImage: "./assets/Pasaporte_ES.svg.png",
  },
];
