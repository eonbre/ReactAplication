
import * as types from '../../actions/types'

const INITIAL_STATE = {
    isCreating: null,
    isCreated: null,
    roles:[]
}



export  default  (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case types.ROLE_REQUEST:
            return{ ...state, isCreating:true, isCreated:false}
        case types.ROLE_SUCCESS:
            return{ ...state, isCreating:false, isCreated:true}
        case types.ROLE_FAILURE:
            return{ ...state, isCreating:false, isCreated:false}
        case types.FETCH_ROLE_REQUEST:
            return{ ...state }
        case types.FETCH_ROLE_SUCCESS:
            return{ ...state, roles:action.payload}
       
        case types.FETCH_ROLE_FAILURE:
            return{ ...state,}    
       default:
            return state;
    }
}


// address1=action.payload.data.data[0].address1, address2=action.payload.data.data[0].address2, vat=action.payload.data.data[0].vat, datecreated=action.payload.data.data[0].datecreated