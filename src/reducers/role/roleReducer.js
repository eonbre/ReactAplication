
import * as types from '../../actions/types'

const INITIAL_STATE = {
    isCreating: null,
    isCreated: null,
    categoryname:[],
    vat:null,
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
       default:
            return state;
    }
}