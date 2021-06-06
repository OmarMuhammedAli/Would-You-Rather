import { RECEIVE_QUESTIONS } from "../actions/types";

const questions = (store = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...store,
        ...action.questions,
      };
    default:
      return store;
  }
};

export default questions;
