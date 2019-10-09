export const errorReducer = (state = {}, action) => {
    const { type, payload } = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
  
    // not a *_REQUEST / *_FAILURE actions, so we ignore them
    if (!matches) return state;
  
    const [, requestName, requestState] = matches;
    return {
      ...state,
      // Store errorMessage
      // e.g. stores errorMessage when receiving _FAILURE
      //      else clear errorMessage when receiving _REQUEST or _SUCCESS
      [requestName]: requestState === 'FAILURE' ? payload.err_msg : '',
    };
  };