
import * as types from '../../actions/types'

const INITIAL_STATE = {
    isCreating: null,
    isCreated: null,
    vat:null,
    categoryname: {},
    datecreated:null,
    address1:null,
    address2:null,
}

export  default  (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case types.ROLE_REQUEST:
            return{ ...state, isCreating:true, isCreated:false }
        case types.ROLE_SUCCESS:
            return{ ...state, isCreating:false, isCreated:true}
        case types.ROLE_FAILURE:
            return{ ...state, isCreating:false, isCreated:false}
        case types.FETCH_ROLE_REQUEST:
                return{ ...state }
        case types.FETCH_ROLE_SUCCESS:
                return{ ...state, categoryname:action.payload.categoryname}
        case types.FETCH_ROLE_FAILURE:
                return{ ...state, err: action.payload }    
       default:
            return state;
    }
}