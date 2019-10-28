import React from 'react';
import { connect } from 'react-redux';
import './RegistrationForm.css';
import history from '../../../history'
import {Form, Field} from 'react-final-form';
import {Form as BSForm, Container, Button, Col} from 'react-bootstrap';
import {minLen8, required,passwordConfirmMatch} from '../../../helpers/forms/validators'
import {composeRecordLevelValidators, composeValidators} from '../../../helpers/forms/validatorUtilities'
import {Input, Select} from '../../../components/formElements';
import {RegistrationStart} from '../../../actions';
import { FormattedMessage, injectIntl } from 'react-intl';



class RegistrationForm extends React.Component{
    FORM_LABEL = 'forms.labels';
    FORM_PLC = 'forms.placeholders';

    onSubmit = values =>{
        console.log("Form Values", values);
        this.props.RegistrationStart(values);
    }
    
    goToLogin = e =>{
        e.preventDefault();
        history.push("/login");
    }

    render(){
        const { formatMessage} = this.props.intl;
        return(
            <Container>
            <Form
                onSubmit={this.onSubmit}
                validate={composeRecordLevelValidators(passwordConfirmMatch)}
                render={({handleSubmit, valid}) =>(
                    <div>
                        <h2><FormattedMessage id="forms.registrationForm" defaultMessage="registrationForm" /></h2>
                        <BSForm validated={valid} onSubmit={handleSubmit}>
                            <BSForm.Row>
                                <Col>
                                    <Field 
                                        name="username"
                                        label={<FormattedMessage id={`${this.FORM_LABEL}.username`} defaultMessage="username" />}
                                        component = {Input}
                                        validate={required}
                                    />
                             
                                    <Field 
                                        name="email"
                                        label={<FormattedMessage id={`${this.FORM_LABEL}.email`} defaultMessage="email" />}
                                        type="email"
                                        component = {Input}
                                        validate={required}
                                    />
                               
                                    <Field 
                                        name="password"
                                        type="password"
                                        label={<FormattedMessage id={`${this.FORM_LABEL}.password`} defaultMessage="password" />}
                                        component = {Input}
                                        validate={composeValidators(required, minLen8)}
                                    />
                                
                                    <Field 
                                        name="confirm"
                                        type="password"
                                        label={<FormattedMessage id={`${this.FORM_LABEL}.confirmPassword`} defaultMessage="confirmPassword" />}
                                        component = {Input}
                                        validate={required}
                                    />
                                </Col>
                                <Col>
                                    <Field 
                                        name="first_name"
                                        label={<FormattedMessage id={`${this.FORM_LABEL}.firstName`} defaultMessage="firstName" />}
                                        component = {Input}
                                        validate={required}
                                    />
                                    <Field 
                                        name="last_name"
                                        label={<FormattedMessage id={`${this.FORM_LABEL}.lastName`} defaultMessage="lastName" />}
                                        component = {Input}
                                        validate={required}
                                    />
                                    <Field 
                                        name="gender"
                                        label={<FormattedMessage id={`${this.FORM_LABEL}.gender`} defaultMessage="gender" />}
                                        initialValue="male"
                                        options={[
                                            { value: "male", label: formatMessage({ id:`${this.FORM_LABEL}.gender.male`, defaultMessage:"male" })},
                                            { value:"female", label:formatMessage({ id:`${this.FORM_LABEL}.gender.female`, defaultMessage:"female" })}
                                        ]}
                                        component = {Select}
                                        validate={required}
                                    />
                                </Col>
                            </BSForm.Row>
                            <Button type="submit"><FormattedMessage id={`${this.FORM_LABEL}.register`} defaultMessage="register" /></Button>
                        </BSForm>
                        <div>
                            <span>
                            <FormattedMessage id={`${this.FORM_LABEL}.alreadyHaveAccount`} defaultMessage="alreadyHaveAccount" />
                                <a href="" onClick={this.goToLogin}><FormattedMessage id={`${this.FORM_LABEL}.goToLogin`} defaultMessage="goToLogin" /></a>
                            </span>
                        </div>
                    </div>
                )}
            />
        </Container>
        )
    }
   
}



export default injectIntl(connect(null, {RegistrationStart })(RegistrationForm));