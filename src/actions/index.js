import * as types from './types';
import con, {apiCon, django_client_id, django_client_secret} from '../API'
import history from '../history'
import{ googleLogoutAction} from './googleAuthActions'
import roleReducer from '../reducers/role/roleReducer';

//----------------
//Actions Login
//----------------

export const LoginStart = (credentials) => async dispatch =>{
    dispatch({ type: types.LOGIN_REQUEST});
    const bodyFormData = new FormData();
    bodyFormData.set("username", credentials.username);
    bodyFormData.set("password", credentials.password);
    bodyFormData.set("client_id", django_client_id);
    bodyFormData.set("client_secret", django_client_secret);
    bodyFormData.set("grant_type", "password");
    const response = await con.post(
        '/auth/token',
        bodyFormData
    ).then(res =>{
        dispatch(LoginSuccess(res.data));
    })
    .catch(err => { 
        dispatch(LoginFail("Login failed. "+err));
    })
}

export const LoginSuccess = (token) => async dispatch => {
    localStorage.setItem("django_access_token_conv", token.access_token);
    localStorage.setItem("django_refresh_token_conv", token.refresh_token);
    let expiryDate = Math.round(new Date().getTime() / 1000) + token.expires_in;
    localStorage.setItem("django_access_token_expires_in", expiryDate);
    
    const payload = {...token, succ_msg: "Login sucessful!"}
    dispatch({ type: types.LOGIN_SUCCESS, payload: payload});
    console.log("Login successful")
    dispatch(FetchUserStart(token));
    
}

export const LoginFail = (err_msg) => {
    return { type: types.LOGIN_FAILURE, payload: {err_msg:err_msg}}
}

export const FetchUserStart = (token) => async dispatch =>{
    dispatch({ type: types.GET_USER_REQUEST});
    const header = `${token.token_type} ${token.access_token}`;
    console.log("token type" ,token);
    con.get(
        '/api/users/', 
        {
            headers: {
                Authorization: header,
              }
        }
    ).then(response=>{
            const send  = {data: response.data, token: token}
            dispatch(FetchUserSuccess(send));
        }
    )
    .catch(err => { 
        dispatch(FetchUserFail("Fetch user failed. Please try to login manually. " + err));
    })
}

export const FetchUserSuccess = (user_info) => async dispatch => {
    const payload = {...user_info, succ_msg: "User fetched successfully!"}
    dispatch({ type: types.GET_USER_SUCCESS, payload: payload});
    history.push("/profile");
}

export const FetchUserFail = (err_msg) => {
    console.log("User fetching failed");
    return { type: types.GET_USER_FAILURE, payload: {err_msg:err_msg}}
}

//----------------------
//Actions Registration
//----------------------
export const RegistrationStart = (credentials) => async dispatch =>{
    dispatch({ type: types.REGISTRATION_REQUEST});
    await con.post(
        'api/users/',
        credentials
    ).then(response =>{
        dispatch(RegistrationSuccess(response.data));
        dispatch(LoginSuccess(credentials));
        
       
    }).catch(err => { 
        dispatch(RegistrationFail(err));
    })
    history.push('/profile');
}

export const RegistrationSuccess = (user_info) => async dispatch => {
    const msg="Registration successful! Visit your profile page to edit your information.";
    const payload = {...user_info, succ_msg: msg}
    console.log("user info", user_info)
    
    dispatch({ type: types.REGISTRATION_SUCCESS , payload: payload});
}

export const RegistrationFail = (err_msg) => {
    err_msg = "Registration failed. Please try again. " + err_msg
    return { type: types.REGISTRATION_FAILURE, payload: {err_msg:err_msg}}
}

//----------------------
//Actions Logout
//----------------------

export const LogoutStart = (token, type) => async dispatch => {
    dispatch({ type: types.LOGOUT_REQUEST});
    localStorage.removeItem("goog_avatar_url");
    localStorage.removeItem("goog_name");
    localStorage.removeItem("goog_email");

    const header = `${type} ${token}`;
    const bodyFormData = new FormData();
    bodyFormData.set("client_id", django_client_id);
    await con.post(
        '/auth/invalidate-sessions', bodyFormData,
        {
            headers: {  Authorization: header,"Content-Type": "multipart/form-data"}
        }
    ).catch(err => { 
        dispatch(LogoutFail(err));
    }).then(response=>{
        dispatch(LogoutSuccess());
    })
}

export const LogoutSuccess = () => async dispatch => {
    const payload = {succ_msg: "Logged out successfully."}
    dispatch({ type: types.LOGOUT_SUCCESS, payload: payload});
    localStorage.removeItem("django_access_token_conv");
    localStorage.removeItem("django_refresh_token_conv");
    localStorage.removeItem("django_access_token_expires_in");
    dispatch(googleLogoutAction());
}

export const LogoutFail = (err_msg) => {
    err_msg = "Logout failed. Please try again." + err_msg;
    return { type: types.LOGOUT_FAILURE, payload: {err_msg:err_msg}}
}

//----------------------
//Actions Forgot Password
//----------------------

export const ResetPasswordStart = (data) => dispatch => {
    dispatch({ type: types.RESET_PASSWORD_REQUEST}) 
    const address = `/password_reset/confirm/`;
    const bodyFormData = new FormData();
    bodyFormData.set("password", data.password);
    bodyFormData.set("email", data.email);
    bodyFormData.set("token", data.token);
    apiCon.post( address, bodyFormData)
        .then(
            response => {
                dispatch(ResetPasswordSuccess());
        })
        .catch(err =>{
            dispatch(ResetPasswordFail(err));
        })
}

export const ResetPasswordSuccess = () => async dispatch => {
    const payload = {succ_msg: "Password reset successfully."}
    dispatch({ type: types.RESET_PASSWORD_SUCCESS, payload: payload});
    history.push("/");
}

export const ResetPasswordFail = (err_msg) => {
    err_msg = "Reset password failed. Please try again." + err_msg;
    return { type: types.RESET_PASSWORD_FAILURE, payload: {err_msg:err_msg}}
}

export const ForgotPasswordStart = (email) => dispatch => {
    dispatch({ type: types.FORGOT_PASSWORD_REQUEST}) 
    const address = `/password_reset/`;
    const bodyFormData = new FormData();
    bodyFormData.set("email", email);
    apiCon.post( address, bodyFormData)
        .then(
            
            response => {
                dispatch(ForgotPasswordSuccess());
               
        })
        .catch(err =>{
            dispatch(ForgotPasswordFail(err));
        })
}

export const ForgotPasswordSuccess = () => async dispatch => {
    const payload = {succ_msg: "Mail for password reset sent successfully."}
    dispatch({ type: types.FORGOT_PASSWORD_SUCCESS, payload: payload});
    history.push("/");
}

export const ForgotPasswordFail = (err_msg) => {
    err_msg = "Sending mail failed. Please try again." + err_msg;
    return { type: types.FORGOT_PASSWORD_FAILURE, payload: {err_msg:err_msg}}
}
export const RoleStart = (category) => async dispatch =>{
    dispatch({ type: types.ROLE_REQUEST});
    const bodyFormData = new FormData();
    bodyFormData.set("category", category);
    
    const response = await con.post(
        '/api/roles/',
        bodyFormData,
        
    ).then(res =>{
        dispatch(RoleSuccess(res.data));
        console.log("ROLELES", res.data);

    })
    .catch(err => { 
        
        dispatch(RoleFail("Role could not be created. "+err));
    })
}

export const RoleSuccess = (category) => async dispatch =>{
    const msg="Role was created";
    const payload = {...category,  succ_msg: msg}
    dispatch({ type: types.ROLE_SUCCESS, payload: payload});
}

export const RoleFail = (err_msg) => {
    err_msg = "Role could not be created" + err_msg;
    return { type: types.ROLE_FAILURE, payload: {err_msg:err_msg}}
}