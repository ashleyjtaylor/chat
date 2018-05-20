import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants';

export default function (state = {}, action) {
  switch (action) {
    case LOGIN_REQUEST:
      return { token: null, loading: true };
    case LOGIN_SUCCESS:
      return { token: action.payload, loading: false };
    case LOGIN_FAIL:
      return { token: null, loading: false };
    default:
      return state;
  }
}
