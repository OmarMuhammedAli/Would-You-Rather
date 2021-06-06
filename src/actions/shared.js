import {getInitialData} from '../utils/api'
import {receiveQuestions} from './questions'
import {receiveUsers} from './users'
import {setAuthedUser} from './authedUser'

export const handleInitialFetch = (authedUser='') => async (dispatch) => {
    const {users, questions} = await getInitialData()
    dispatch(receiveUsers(users))
    dispatch(receiveQuestions(questions))
    dispatch(setAuthedUser(authedUser))
}