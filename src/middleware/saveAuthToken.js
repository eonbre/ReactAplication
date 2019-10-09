import { setToken } from '../API'
const saveAuthToken = store => next => action => {
    if(action.type === 'LOGIN_SUCCESS') {
      // after a successful login, update the token in the API
      //console.log("LOGIN SUCCESS PAYLOAD", action.payload);
      const token = {access_token: action.payload.access_token, token_type: action.payload.token_type}
      setToken(token);
    }
    // continue processing this action
    return next(action);
  }

export default saveAuthToken;