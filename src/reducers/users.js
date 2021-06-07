import { RECEIVE_USERS, ADD_ANSWER, ADD_QUESTION } from "../actions/types";

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
            [action.qid]: action.answer,
          },
        },
      };
    case ADD_QUESTION:
      return {
        ...store,
        [action.question.author]: {
          ...store[action.question.author],
          questions: [
            ...store[action.question.author].questions,
            action.question.id,
          ],
        },
      };
    default:
      return store;
  }
};

export default users;
