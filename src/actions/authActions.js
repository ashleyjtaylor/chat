import firebase from 'firebase';

import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants';

export const login = (email, password) => async (dispatch) => {
  try {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('USER', user);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (_) {
    console.log('USER LOGIN ERROR', _);
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log('USER CREATED', user);
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    } catch (err) {
      console.log('USER CREATE ERROR', err);
      dispatch({ type: LOGIN_FAIL });
    }
  }
};

export const logout = () => {};
