import React from 'react'
import { connect } from 'react-redux';
import RoleInfo from './RoleInfo';
import SelectOption from './SelectOption';

class ProfilePage extends React.Component{
    
    render(){
        return(
                 <>
                {this.props.user.auth.isAuthenticated? 
               
                <div>
                    <h2>This is a profile of </h2>{this.props.user.info.username}
                    <h2>Email of this profile is </h2>{this.props.user.info.email}
                    
                    </div>
               
            :
                <div>
                    <h2>This is a profile of </h2>{this.props.user.username}
                    <p>You are not logged in.</p>
                </div>
            }
            <div> 
                <SelectOption/>
            </div>
            <div>
                <RoleInfo></RoleInfo>
            </div>
            </>
           
            
           
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user,   
      role: state.role
    }
  }
 
export default connect(mapStateToProps)(ProfilePage);