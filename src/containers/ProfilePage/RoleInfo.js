import React from 'react';
import { connect } from 'react-redux';

import {Form, Field} from 'react-final-form';
import {Form as BSForm, Container, Button} from 'react-bootstrap';
import {required} from '../../helpers/forms/validators';
import {Input} from '../../components/formElements';
import "./RoleInfo.css";
import { FormattedMessage, injectIntl } from 'react-intl';
import { RoleStart } from '../../actions/';

class RoleInfo extends React.Component{
FORM_LABEL = 'forms.labels';
FORM_PLC = 'forms.placeholders';

onSubmit = values => {
  console.log("Form Values", values);
  this.props.RoleStart(values);
}
    
render(){
const { formatMessage} = this.props.intl;

return(
    <Container>
        <Form
            onSubmit={this.onSubmit}
            render={props =>(
                <div className="RoleInfoKlasa">
                    <h2><FormattedMessage id="forms.UserInfo" defaultMessage="UserInfo" /></h2>
                    <BSForm validated={props.valid} onSubmit={props.handleSubmit}>
                        <Field 
                            name="email"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.email`} defaultMessage="email" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.email`, defaultMessage:"email" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="address1"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.address1`} defaultMessage="First Address" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.address1`, defaultMessage:"First Address" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="address2"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.address2`} defaultMessage="Second Address" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.address2`, defaultMessage:"Second Address" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="vat"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.vat`} defaultMessage="VAT" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.vat`, defaultMessage:"VAT" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="catetegoryName"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.categoryName`} defaultMessage="categoryName" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.categoryName`, defaultMessage:"categoryName" })}
                            component = {Input}
                            validate={required}
                        />
                        <Field 
                            name="date_created"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.date_created`} defaultMessage="date_Created" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.date_created`, defaultMessage:"date_created" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="ProfileName"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.ProfileName`} defaultMessage="ProfileName" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.ProfileName`, defaultMessage:"ProfileName" })}
                            component = {Input}
                            validate={required}
                        />


                        <Button type="submit"><FormattedMessage id={`${this.FORM_LABEL}.submitInfo`} defaultMessage="submitInfo" /></Button>
                    </BSForm>
                    </div>
            )}
        />
    </Container>
    )}
}




const mapStateToProps = state => {
    return {
    role: state.role
    }
  }

export default injectIntl (connect(mapStateToProps, {RoleStart} )(RoleInfo));
