// import remove from 'lodash.remove';
var _ = require('lodash');

// Importing actions

import {RETRIEVE_TOKEN, LOGIN, LOGOUT, REGISTER} from '../actions';

//1 First initial state
const initialState = {
  isLoading: true,
  email: null,
  userToken: null,
};

// reducer

const userReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_TOKEN:
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case LOGIN:
      return {
        ...prevState,
        email: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...prevState,
        email: null,
        userToken: null,
        isLoading: false,
      };
    case REGISTER:
      return {
        ...prevState,
        email: action.id,
        userToken: action.token,
        isLoading: false,
      };
    default:
      return prevState;
  }
};

export default userReducer;
