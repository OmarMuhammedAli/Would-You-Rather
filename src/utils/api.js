import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getUsers,
  _getQuestions,
} from "./_DATA";

export const getInitialData = async () => {
  const [users, questions] = await Promise.all([_getUsers(), _getQuestions()]);
  return {
    users,
    questions,
  };
};

export const saveQuestion = (question) => _saveQuestion(question);

export const saveQuestionAnswer = (answer) => _saveQuestionAnswer(answer);
