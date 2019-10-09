import React from 'react';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../../history';
import {IntlProvider} from 'react-intl'
import translations from '../../translations'

import NoMatch from '../../components/NoMatch';
import Placeholder from '../../components/Placeholder';
import ProfilePAge from '../ProfilePage';
import LoginForm from '../Forms/LoginForm';
import RegistrationForm from '../Forms/RegistrationForm';
import ForgotPasswordForm from '../Forms/ForgotPasswordForm';
import ResetPasswordForm from '../Forms/ResetPasswordForm';

import NavBar from '../NavBar';
import ProfilePage from '../ProfilePage';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <IntlProvider locale={this.props.lang} messages={translations[this.props.lang]}>
        <Router history={history}>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Placeholder} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/registration" component={RegistrationForm} />
            <Route exact path="/forgot_password" component={ForgotPasswordForm} />
            <Route exact path="/password_reset/:email/:token" component={ResetPasswordForm} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>  
        </IntlProvider>   
      </div>
      
    );
  }
}

const mapStateToProps = state =>{
    return { lang: state.lang }
}

export default connect(mapStateToProps)(App);
