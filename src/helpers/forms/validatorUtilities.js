export const composeValidators = (...validators) => value => {
    validators.reduce((error, validator) => error || validator(value), undefined);
}

export const composeRecordLevelValidators = (...validators) => values =>{
    const errors = {}
    validators.forEach(validator => {
        const error = validator(values);
        Object.assign(errors, error);
    });
    return errors;
}
