import { RECEIVE_QUESTIONS, ADD_ANSWER } from "../actions/types";

const questions = (store = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...store,
        ...action.questions,
      };
    case ADD_ANSWER:
      return {
        ...store,
        [action.qid]:{
          ...store[action.qid],
          [action.answer]:{
            ...store[action.qid][action.answer],
            votes: [...store[action.qid][action.answer].votes, action.authedUser]
          }
        }
      }
    default:
      return store;
  }
};

export default questions;
