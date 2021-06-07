import {RECEIVE_QUESTIONS, ADD_ANSWER} from './types'
import {saveQuestionAnswer} from '../utils/api'

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