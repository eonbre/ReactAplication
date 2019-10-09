
const APINotificationHandler = ({getState, dispatch}) => next => action =>{
    
    const {type, payload, meta} = action;
    const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
    var not_duration, not_placement, not_style, not_onClose, not_onClick;
    if(meta){
        not_duration = meta.not_duration;
        not_placement = meta.not_duration;
        not_style = meta.not_style;
        not_onClose = meta.not_onClose;
        not_onClick = meta.not_onClick;
    }

    if(matches){
        const [, requestName, requestState] = matches;
        if(requestState === "FAILURE"){
            console.error({
                message: 'API Error',
                description: payload?payload.err_msg:undefined,
                duration: not_duration || 3,
                placement: not_placement || "bottomRight",
                style: not_style,
                onClose: not_onClose,
                onClick: not_onClick,
            })
        }
        else if(requestState === "SUCCESS"){
            console.log({
                message: 'API Success',
                description: payload?payload.succ_msg:undefined,
                duration: not_duration || 3,
                placement: not_placement || "topRight",
                style: not_style,
                onClose: not_onClose,
                onClick: not_onClick,
            })
            //console.success('SUCCESS: ' + action.type, action.payload.succ_msg, 15);
        }
            //console.error('ERROR: ' + action.type, action.payload.err_msg, 15);
    }

    next(action);
}

export default APINotificationHandler;