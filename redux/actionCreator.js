// Importing Actions

import {
  ADD_NOTE,
  DELETE_NOTE,
  RETRIEVE_TOKEN,
  LOGIN,
  LOGOUT,
  REGISTER,
} from './actions';

// Action Creators

let noteID = 0;

export function addnote(note) {
  return {
    type: ADD_NOTE,
    id: noteID++,
    note,
  };
}

export function deletenote(id) {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
}

export function signIn({userEmail, userToken}) {
  return {
    type: LOGIN,
    email: userEmail,
    token: userToken,
  };
}

export function signOut() {
  return {
    type: LOGOUT,
  };
}

export function register({
  userId,
  userEmail,
  userName,
  userPassword,
  userToken,
}) {
  return {
    type: REGISTER,
    id: userId,
    passowrd: userPassword,
    email: userEmail,
    name: userName,
    token: userToken,
  };
}

export function retreiveToken(userToken) {
  return {
    type: RETRIEVE_TOKEN,
    token: userToken,
  };
}
