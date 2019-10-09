import { combineReducers } from 'redux';
import langReducer from './langReducer';
import { loadingReducer } from '../API/loadingReducer';
import { errorReducer } from '../API/errorReducer';
import userReducers from './userReducers';
import roleReducer  from '../reducers/role/roleReducer';

export default combineReducers({
    lang: langReducer,
    user: userReducers,
    loading: loadingReducer,
    errors: errorReducer,
    role: roleReducer
})