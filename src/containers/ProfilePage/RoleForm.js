import React from 'react'

import { connect } from 'react-redux';
import "./RoleForm.css";


class RoleForm extends React.Component{
    


  
    render(){
        return(
           <>
              <div className="RoleInfoKlasa">
               <p>{this.props.role.info}</p>
              </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      role: state.role    
    }
  }

export default connect(mapStateToProps)(RoleForm);