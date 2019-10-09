  import React from 'react'
  import store from '../../core/store';
  import translations from '../../translations';
  import {FormattedMessage} from 'react-intl'

  const TRANSLATION_NAME = 'validators';
  let props = store.getState();

  const updateProps = () => {
      props = store.getState();
  }
//TODO: wire messages to translations

export const required = value => {
    updateProps();
    if(!value || value === '')
    return (<FormattedMessage id={`${TRANSLATION_NAME}.required`} defaultMessage="This field is reqired." />)
        //return translations[props.lang][`${TRANSLATION_NAME}.required`];

    return undefined;
}

export const minLength = (v, min) => {
    if(typeof(v) === "string"){
        return v.length >= min ? undefined : (<FormattedMessage id={`${TRANSLATION_NAME}.minLenIs`} values={{num: min}}defaultMessage="Minimum length is " />);
    }
    return (<FormattedMessage id={`${TRANSLATION_NAME}.textInputRequired`} defaultMessage="Text input reqired." />)
}

export const minLen8 =(v) => minLength(v,8);
export const minLen12 =(v) => minLength(v,12);


// Record-Level Validation
export const passwordConfirmMatch = (values) =>{
    if(values.password !== values.confirm){
        return {confirm: "Passwords must match."}
    }
}