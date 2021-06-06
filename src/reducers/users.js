import { RECEIVE_USERS } from "../actions/types";

const users = (store = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...store,
        ...action.users,
      };
    default:
      return store;
  }
};

export default users;
