import {getInitialData} from '../utils/api'
import {receiveQuestions} from './questions'
import {receiveUsers} from './users'
import {setAuthedUser} from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

export const handleInitialFetch = (authedUser='') => async (dispatch) => {
    dispatch(showLoading())
    const {users, questions} = await getInitialData()
    dispatch(receiveUsers(users))
    dispatch(receiveQuestions(questions))
    dispatch(setAuthedUser(authedUser))
    dispatch(hideLoading())
}