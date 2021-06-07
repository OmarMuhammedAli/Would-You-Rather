import { RECEIVE_USERS, ADD_ANSWER } from "../actions/types";

const users = (store = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...store,
        ...action.users,
      };
    case ADD_ANSWER:
      return {
        ...store,
        [action.authedUser]: {
          ...store[action.authedUser],
          answers: {
            ...store[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    default:
      return store;
  }
};

export default users;
