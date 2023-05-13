import { createStore } from "effector";
import { Quiz } from "./quiz.interface";

export const quizStore = createStore<Quiz[]>([])

