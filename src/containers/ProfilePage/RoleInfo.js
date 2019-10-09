import React from 'react'
import { connect } from 'react-redux';
import "./RoleInfo.css";
import { Button } from 'react-bootstrap';


class RoleInfo extends React.Component{
    
    render(){
        return(
           <>
              <div className="RoleInfoKlasa">
                <h1>Role Info</h1>  
               <p>{this.props.role.category}</p>
               <p>{this.props.role.name}</p>
               <p>{this.props.role.vat}</p>
               <p>{this.props.role.date_created}</p>
               <p>{this.props.role.owner}</p>

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

export default connect(mapStateToProps)(RoleInfo);