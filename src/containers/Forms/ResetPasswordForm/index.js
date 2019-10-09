import React from 'react';
import { connect } from 'react-redux';
import './ResetPasswordForm.css';
import {Form, Field} from 'react-final-form';
import {Form as BSForm, Container, Button} from 'react-bootstrap';
import {minLen8, required, passwordConfirmMatch} from '../../../helpers/forms/validators'
import {composeRecordLevelValidators} from '../../../helpers/forms/validatorUtilities'
import {Input} from '../../../components/formElements';
import {ResetPasswordStart} from '../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';



class ResetPasswordForm extends React.Component{
    FORM_LABEL = 'forms.labels';
    FORM_PLC = 'forms.placeholders';

    onSubmit = values => {
        console.log("Form Values", values);
        const data = {
            email: this.props.match.params.email,
            token: this.props.match.params.token,
            password: values.password
        }
        this.props.ResetPasswordStart(data);
    }
    
    render(){
        const { formatMessage} = this.props.intl;
        return(
    <Container>
        <Form
            onSubmit={this.onSubmit}
            validate={composeRecordLevelValidators(passwordConfirmMatch)}
            render={props =>(
                <div>
                    <h2><FormattedMessage id="forms.resetPasswordForm" defaultMessage="resetPasswordForm" /></h2>
                    <BSForm validated={props.valid} onSubmit={props.handleSubmit}>
                        <Field 
                            name="password"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.newPassword`} defaultMessage="newPassword" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.newPassword`, defaultMessage:"newPassword" })}
                            type="password"
                            component = {Input}
                            validate={minLen8}
                        />
                        <Field 
                            name="confirm"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.confirmPassword`} defaultMessage="confirmPassword" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.confirmPassword`, defaultMessage:"confirmPassword" })}
                            type="password"
                            component = {Input}
                            validate={required}
                        />
                        <Button type="submit"><FormattedMessage id={`${this.FORM_LABEL}.resetPassword`} defaultMessage="resetPassword" /></Button>
                    </BSForm>
                </div>
            )}
        />
    </Container>
    )}
}

export default injectIntl(connect(null, { ResetPasswordStart })(ResetPasswordForm));
