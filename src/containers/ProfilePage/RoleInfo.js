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
                    <h2><FormattedMessage id="forms.UserInfo" defaultMessage="User Information" /></h2>
                    <BSForm validated={props.valid} onSubmit={props.handleSubmit}>
                        <Field 
                            name="email"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.Email`} defaultMessage="Email" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.Email`, defaultMessage:"Email" })}
                            component = {Input}
                            validate={required}
                        />
                        
                         <Field 
                            name="address1"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.First Address`} defaultMessage="First Address" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.First Address`, defaultMessage:"First Address" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="address2"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.Second Address`} defaultMessage="Second Address" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.Second Address`, defaultMessage:"Second Address" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="vat"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.VAT`} defaultMessage="VAT" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.VAT`, defaultMessage:"VAT" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="catetegoryName"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.Category Name`} defaultMessage="Category Name" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.Category Name`, defaultMessage:"Category Name" })}
                            component = {Input}
                            validate={required}
                        />
                        <Field 
                            name="date_created"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.Creation_date`} defaultMessage="Creation date" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.Creation_date`, defaultMessage:"Creation_date" })}
                            component = {Input}
                            validate={required}
                        />
                         <Field 
                            name="ProfileName"
                            label={<FormattedMessage id={`${this.FORM_LABEL}.Profile Name`} defaultMessage="Profile Name" />}
                            placeholder={formatMessage({ id:`${this.FORM_PLC}.Profile Name`, defaultMessage:"Profile Name" })}
                            component = {Input}
                            validate={required}
                        />


                        <Button type="submit"><FormattedMessage id={`${this.FORM_LABEL}.Submit Info`} defaultMessage="Submit Info" /></Button>
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
