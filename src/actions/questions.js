import { RECEIVE_QUESTIONS, ADD_ANSWER, ADD_QUESTION } from "./types";
import { saveQuestionAnswer, saveQuestion } from "../utils/api";

export const receiveQuestions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const addAnswer = ({ qid, authedUser, answer }) => ({
  type: ADD_ANSWER,
  authedUser,
  qid,
  answer,
});

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question
});

export const handleAddAnswer = (qid, answer) => async (dispatch, getState) => {
  const { authedUser } = getState();
  dispatch(addAnswer({ qid, answer, authedUser }))
  return saveQuestionAnswer({ authedUser, qid, answer })
    .catch((e) => {
      console.warn("Error Occured in handleAddAnswer: ", e);
      alert("Something went wrong. Please try again!");
    });
};

export const handleAddQuestion =
  (optionOneText, optionTwoText) => async (dispatch, getState) => {
    const { authedUser } = getState();
    saveQuestion({ optionOneText, optionTwoText, author: authedUser })
    .then((question) => dispatch(
      addQuestion(question)
    ))
    .catch (e =>  {
      console.warn("Error Occured in handleAddQuestion: ", e);
      alert("Something went wrong. Please try again!");
    })
  }