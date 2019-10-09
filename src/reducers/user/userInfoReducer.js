import googleAuthRducer from './googleAuthReducer'
import * as types from '../../actions/types'

const INITIAL_STATE = {
    username: '',
    email: '',
    first_name: '',
    last_name:''
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case types.GET_USER_REQUEST:
            return{ ...state }
        case types.GET_USER_SUCCESS:
            return{ ...state, ...action.payload.data.user}
        case types.GET_USER_FAILURE:
            return{ ...INITIAL_STATE}
        case types.LOGOUT_SUCCESS:
            return {...INITIAL_STATE}
        default:
            return state;
    }
}