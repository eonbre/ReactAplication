import googleAuthRducer from './googleAuthReducer'
import* as types from '../../actions/types'

const INITIAL_STATE = {
    isAuthenticating: null,
    isAuthenticated: null,
    token: {access_token: null, token_type: null, refresh_token:null},
    google_token: {},
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case types.LOGIN_REQUEST:
            return{ ...state, isAuthenticating:true, isAuthenticated: false, err: null }
        case types.LOGIN_SUCCESS:
            return{ ...state, isAuthenticating: false, isAuthenticated: true, token: action.payload}
        case types.LOGIN_FAILURE:
            return{ ...state, isAuthenticating: false, isAuthenticated:false, err: action.payload }
        case types.GET_USER_REQUEST:
            return{ ...state }
        case types.GET_USER_SUCCESS:
            return{ ...state, isAuthenticating:false, isAuthenticated: true, token: action.payload.token}
        case types.GET_USER_FAILURE:
            return{ ...state, err: action.payload }
        case types.REGISTRATION_REQUEST:
            return{ ...state }
        case types.REGISTRATION_SUCCESS:
            return{ ...state, token: action.payload.token }
        case types.LOGOUT_REQUEST:
            return{ ...state }
        case types.LOGOUT_SUCCESS:
            return{ ...INITIAL_STATE }
        default:
            return state;
    }
}