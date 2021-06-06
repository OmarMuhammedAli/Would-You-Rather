import {RECEIVE_USERS} from './types'

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})