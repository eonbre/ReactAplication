//--------------------------
//  Authentication actions
//--------------------------
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";
export const REGISTRATION_REQUEST = "REGISTRATION_REQUEST";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAILURE = "REGISTRATION_FAILURE";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const GOOGLE_IS_AUTHENTICATING = "GOOGLE_IS_AUTHENTICATING";
export const CONVERT_GOOGLE_TOKEN_SUCCESS = "CONVERT_GOOGLE_TOKEN_SUCCESS";
export const CONVERT_GOOGLE_TOKEN_FAILURE = "CONVERT_GOOGLE_TOKEN_FAILURE";
export const GOOGLE_LOGOUT = "GOOGLE_LOGOUT";
export const GOOGLE_AUTHENTICATE_ACTION = "GOOGLE_AUTHENTICATE_ACTION";

//-------------------
//  Reset Pasword actions
//-------------------
export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILURE = "RESET_PASSWORD_FAILURE";
export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILURE = "FORGOT_PASSWORD_FAILURE";

//-------------------
//  Language actions
//-------------------
export const CHANGE_LANG = "CHANGE_LANG";

// ------------------
//     Role actions
// ------------------

export const ROLE_REQUEST = "ROLE_REQUEST";
export const ROLE_SUCCESS = "ROLE_SUCCESS";
export const ROLE_FAILURE = "ROLE_FAILURE";