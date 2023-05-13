export interface Quiz {
    question: string,
    answers: Answer[]
}

interface Answer {
    text: string
    isCorrect: string
}

