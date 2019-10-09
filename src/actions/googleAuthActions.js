import {
    GOOGLE_IS_AUTHENTICATING,
    GOOGLE_AUTHENTICATE_ACTION,
    GOOGLE_LOGOUT,
    CONVERT_GOOGLE_TOKEN_SUCCESS,
    CONVERT_GOOGLE_TOKEN_FAILURE
} from './types'
import {FetchUserStart} from './index'

import { django_client_id,django_client_secret, baseUrlHttp} from '../API'


export const isAuthenticating = () => ({
    type: GOOGLE_IS_AUTHENTICATING
});

export const  convertGoogTokenSuccess = (json) => async dispatch =>  {
    //console.log("Convert Google Token", json);
    
    localStorage.setItem("goog_access_token_conv", json.access_token);
    localStorage.setItem("goog_refresh_token_conv", json.refresh_token);
    let expiryDate = Math.round(new Date().getTime() / 1000) + json.expires_in;
    localStorage.setItem("goog_access_token_expires_in", expiryDate);
    dispatch( {
      type: CONVERT_GOOGLE_TOKEN_SUCCESS,
      goog_token: json
    });
    dispatch(FetchUserStart(json));
    //console.log("Google login successful.");
  }
  
  export const googleLogoutAction = () => {
    //console.log("Google logout successful.");
    return function(dispatch) {
      localStorage.removeItem("goog_access_token_conv");
      localStorage.removeItem("goog_refresh_token_conv");
      localStorage.removeItem("goog_access_token_expires_in");
      dispatch({ type: GOOGLE_LOGOUT});
      return Promise.resolve();
    };
  }
  
  const convertGoogTokenFailure = err_msg => async dispatch => {
    return { type: CONVERT_GOOGLE_TOKEN_FAILURE, payload: {err_msg:err_msg} }
};

// the API endpoint expects form-urlencoded-data thus search-params
export const  convertGoogleToken = (access_token) => {
    return async function(dispatch) {
      dispatch(isAuthenticating());
      const searchParams = new URLSearchParams();
      searchParams.set("grant_type", "convert_token");
      searchParams.set("client_id", django_client_id);
      searchParams.set("client_secret", django_client_secret);
      searchParams.set("backend", "google-oauth2");
      searchParams.set("token", access_token);
      try {
        console.log("Base url for convert",baseUrlHttp)
        let response = await fetch(`${baseUrlHttp}auth/convert-token/`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: searchParams
        });
        if (!response.ok) {
          throw new Error("An Error has occured, please try again.");
        }
        let responseJson = await response.json();
        return dispatch(convertGoogTokenSuccess(responseJson));
      } catch (err) {
        return dispatch(convertGoogTokenFailure(err));
      }
    };
  }
  
