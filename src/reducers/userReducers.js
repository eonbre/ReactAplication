import { combineReducers } from "redux";
import authReducer from './user/authReducer';
import googleInfoReducer from './user/googleAuthReducer';
import userInfoReducer from './user/userInfoReducer';

export default combineReducers({
    auth: authReducer,
    google_auth: googleInfoReducer,
    info: userInfoReducer,
})