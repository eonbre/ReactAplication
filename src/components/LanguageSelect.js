import React, { useEffect }from 'react';
import {connect} from 'react-redux';
import { ChangeLangAction } from '../actions/langActions';
import {Select} from './formElements';
import { FormattedMessage} from 'react-intl';

class LanguageSelect extends React.Component{
    // useEffect works similiar to componentDidMount
    // useEffect(() => {
    //     // Checks for localstorage lang, changes app lang
    //     if(localStorage.getItem('lang')) {
    //         props.ChangeLangAction(localStorage.getItem('lang'));
    //     }
    // });
    componentDidMount(){
        if(localStorage.getItem('lang')) {
            console.log("Language in local storage", localStorage.getItem('lang'));
            this.props.ChangeLangAction(localStorage.getItem('lang'));
        }
    }

    render(){
        return (
            <>
                <Select 
                    name="langSelect"
                    label={<FormattedMessage id="components.languageSelect" defaultMessage="languageSelect" />}
                    defaultValue={localStorage.getItem('lang')}
                    options={[
                        { label: "Slovenščina", value: 'si'},
                        {label:"English", value:'en' }
                    ]}
                    
                    onChange={(e) => this.props.ChangeLangAction(e.target.value)}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      lang: state.lang
    }
  }

export default connect(mapStateToProps, { ChangeLangAction })(LanguageSelect);