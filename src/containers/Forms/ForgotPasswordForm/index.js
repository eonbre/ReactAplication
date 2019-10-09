import React from 'react';
import { connect } from 'react-redux';
import './ForgotPasswordForm.css';
import {Form, Field} from 'react-final-form';
import {Form as BSForm, Container, Button} from 'react-bootstrap';
import {required} from '../../../helpers/forms/validators'
import {Input} from '../../../components/formElements';
import {ForgotPasswordStart} from '../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';


class ForgotPasswordForm extends React.Component{
    FORM_LABEL = 'forms.labels';
    FORM_PLC = 'forms.placeholders';

    onSubmit = values => {
        console.log("Form Values", values);
        this.props.ForgotPasswordStart(values.email);
    }
    
    render(){
        const { formatMessage} = this.props.intl;

        return(
    <Container>
        <Form
            onSubmit={this.onSubmit}
            render={props =>(
                <div>
                    <h2><FormattedMessage id="forms.forgotPasswordForm" defaultMessage="ForgotPasswordForm" /></h2>
                    <BSForm validated={props.valid} onSubmit={props.handleSubmit}>
                        <Field 
                            name="email"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.email`} defaultMessage="email" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.email`, defaultMessage:"email" })}
                            component = {Input}
                            validate={required}
                        />
                        <Button type="submit"><FormattedMessage id={`${this.FORM_LABEL}.sendMail`} defaultMessage="sendMail" /></Button>
                    </BSForm>
                </div>
            )}
        />
    </Container>
    )}
}

export default injectIntl (connect(null, { ForgotPasswordStart })(ForgotPasswordForm));
