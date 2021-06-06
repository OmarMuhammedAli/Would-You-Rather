import {RECEIVE_QUESTIONS} from './types'

export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
})