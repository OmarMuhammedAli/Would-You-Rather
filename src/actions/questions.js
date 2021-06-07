import {RECEIVE_QUESTIONS, ADD_ANSWER, ADD_QUESTION} from './types'
import {saveQuestionAnswer, saveQuestion} from '../utils/api'
import {formatQuestion} from '../utils/helpers'

export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
})

const addAnswer = ({qid, authedUser, answer}) => ({
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer
})

const addQuestion = ({optionOneText, optionTwoText, authedUser}) => ({
    type: ADD_QUESTION,
    question: formatQuestion({optionOneText, optionTwoText, author: authedUser})
})

export const handleAddAnswer = (qid, answer) => async (dispatch, getState) => {
    const {authedUser} = getState()
    dispatch(addAnswer({qid, answer, authedUser}))
    try {
        return saveQuestionAnswer({ qid, answer, authedUser })
    } catch (e) {
        console.warn('Error Occured in handleAddAnswer: ', e)
        alert('Something went wrong. Please try again!')
    }
}

export const handleAddQuestion = (optionOneText, optionTwoText) => async (dispatch, getState) => {
    const {authedUser} = getState()
    try {
        await saveQuestion({ optionOneText, optionTwoText, author: authedUser })
        return dispatch(addQuestion({ optionOneText, optionTwoText, authedUser }))
    } catch (e) {
        console.warn('Error Occured in handleAddQuestion: ', e)
        alert('Something went wrong. Please try again!')
    }
} 