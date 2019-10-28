
import * as types from '../../actions/types'

const INITIAL_STATE = {
    isCreating: null,
    isCreated: null,
    isFetched: null,
    isFetching: null,
    roles:[],
    categoryname:null,
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
            return{ ...state, isFetched:false, isFetching:true}
        case types.FETCH_ROLE_SUCCESS:
            return{ ...state, isFetched:true, isFetching:false, roles:action.payload}
        case types.FETCH_ROLE_FAILURE:
            return{ ...state, err: action.payload }    
        case types.FETCH_CATEGORYNAME_REQUEST:
            return{categoryname:null,}   
        case types.FETCH_CATEGORYNAME_SUCCESS:
            return {categoryname:action.payload.data.data.categoryname}   
        case types.FETCH_CATEGORYNAME_FAILURE:
            return {categoryname:null,}            
       default:
            return state;
    }
}

