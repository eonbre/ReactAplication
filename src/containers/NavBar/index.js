import React from 'react'
import { connect } from 'react-redux';
import {Nav, Navbar, Form} from 'react-bootstrap'
import { FormattedMessage } from 'react-intl';
import LanguageSelect from '../../components/LanguageSelect'
import history from '../../history'
import {LogoutStart}from '../../actions'

class NavBar extends React.Component{
    
    render(){
        return(
            <Navbar bg="light" variant="light" sticky="top">
                <Navbar.Brand onClick={()=>history.push("/")}>ECTA</Navbar.Brand>
                {this.props.user.auth.isAuthenticated? 
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>this.props.LogoutStart()}>
                        <FormattedMessage id="nav.labels.logout" defaultMessage="logout" />
                    </Nav.Link>
                    <Nav.Link onClick={()=>history.push("/profile")}>
                        <FormattedMessage id="nav.labels.profile" defaultMessage="profile" />
                    </Nav.Link>
                </Nav>
                :
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>history.push("/login")}>
                        <FormattedMessage id="nav.labels.login" defaultMessage="login" />
                    </Nav.Link>
                    <Nav.Link onClick={()=>history.push("/registration")}>
                        <FormattedMessage id="nav.labels.register" defaultMessage="register" />
                    </Nav.Link>
                </Nav>
            }
                
                
                <Form inline>
                    <LanguageSelect />
                </Form>
          </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user
    }
  }

export default connect(mapStateToProps,{LogoutStart})(NavBar);