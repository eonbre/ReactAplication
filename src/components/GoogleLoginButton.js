import React from "react";
import { connect } from "react-redux";

import { convertGoogleToken } from "../actions/googleAuthActions";
import { GoogleLogin } from "react-google-login";
import { google_client_id, googleLoginRedirect} from "../API";
import { Button } from 'react-bootstrap';

const GoogleLoginButton = props => {
  const onSuccess = response => {
    console.log("Successfull Google Login",response);
    if (response.profileObj) {
      localStorage.setItem("goog_avatar_url", response.profileObj.imageUrl);
      localStorage.setItem("goog_name", response.profileObj.name);
      localStorage.setItem("goog_email", response.profileObj.email);
    }
    props.convertGoogleToken(response.Zi.access_token);
  };

  const onFailure = response => {
    console.log("Failed Google Login", response);
  };

  return (
    <GoogleLogin
      clientId = {google_client_id}
      onSuccess={onSuccess}
      onFailure={onFailure}
      className="loginBtn loginBtn--google"
      prompt="select_account"
      redirectUri = {googleLoginRedirect}
      render={renderProps => (
        <Button onClick={renderProps.onClick} disabled={renderProps.disabled}>Google Login</Button>
      )}
    />
  );
};

const mapDispatchToProps = dispatch => ({
    convertGoogleToken: access_token => dispatch(convertGoogleToken(access_token))
  });
  
  export default connect(null, mapDispatchToProps)(GoogleLoginButton);
