import { SET_AUTHED_USER } from "../actions/types";

const authedUser = (store = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return store;
  }
};

export default authedUser;
