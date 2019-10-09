import React from 'react'
import { connect } from 'react-redux';
import "./PopUpRole.css";


class PopUpRole extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup:false
        };
}
togglePopup() {
    this.setState({
        showPopup: !this.state.showPopup
    })
}

render(){
    roles = this.props.role;
    
        return(
            <>
              <PopUp onClick={this.togglePopup}>
              <div className="PopUpRoleKlasa">
               <h1>Roles</h1>
               listRoles = numbers.map((roles) => 
               <div className="SpecificRoleKlasa">
               {this.props.role.name}
                </div>
               )  
              </div>
              </PopUp>


              
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
      role: state.role    
    }
  }

export default connect(mapStateToProps)(PopUpRole);