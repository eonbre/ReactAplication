import React from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import history from '../../../history'
import {Form, Field} from 'react-final-form';
import {Form as BSForm, Container, Button} from 'react-bootstrap';
import {required, minLen8} from '../../../helpers/forms/validators'
import {Input} from '../../../components/formElements';
import GoogleLoginButton from '../../../components/GoogleLoginButton';
import { FormattedMessage, injectIntl } from 'react-intl';
import {LoginStart} from '../../../actions';

class LoginForm extends React.Component{
    FORM_LABEL = 'forms.labels';
    FORM_PLC = 'forms.placeholders';

    goToForgotPassword = (e) =>{
        e.preventDefault();
        history.push("/forgot_password");
    }

    goToRegistration = (e) =>{
        e.preventDefault();
        history.push("/registration");
    }
    
    onSubmit = values => {
        console.log("Form Values", values);
        this.props.LoginStart(values);
    }
    
    render(){
        const { formatMessage} = this.props.intl;
        return(
    <Container>
        <Form
            onSubmit={this.onSubmit}
            render={props =>(
                <div>
                    <h2><FormattedMessage id="forms.loginForm" defaultMessage="Login Form" /></h2>
                    <BSForm validated={props.valid} onSubmit={props.handleSubmit}>
                        <Field 
                            name="username"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.username`} defaultMessage="username" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.username`, defaultMessage:"username" })}
                            component = {Input}
                            validate={required}
                        />

                        <Field 
                            name="password"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.password`} defaultMessage="Pass" />}
                            type="password"
                            component = {Input}
                            validate={minLen8}
                        />
                        <Button type="submit"><FormattedMessage id={`${this.FORM_LABEL}.login`} defaultMessage="login" /></Button>
                        <p><FormattedMessage id={`${this.FORM_LABEL}.loginWithSocial`} defaultMessage="loginWithSocial" /></p>
                        <GoogleLoginButton />
                        <div>
                            <a href="" onClick={this.goToForgotPassword} ><FormattedMessage id={`${this.FORM_LABEL}.forgotPassword`} defaultMessage="forgotPassword" /></a>
                        </div>
                        <br/>
                        <div>
                        <FormattedMessage id={`${this.FORM_LABEL}.noAccountYet`} defaultMessage="noAccountYet" />
                        </div>
                        <div>
                            <a href="" onClick={this.goToRegistration}><FormattedMessage id={`${this.FORM_LABEL}.goToRegistration`} defaultMessage="goToRegistration" /></a>
                        </div>
                    </BSForm>
                </div>
            )}
        />
    </Container>
    )}
}

export default injectIntl(connect(null, { LoginStart })(LoginForm));
