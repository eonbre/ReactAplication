import React from 'react'
import { connect } from 'react-redux';
import { Select } from '../../components/formElements';
import './SelectOption.css';

class SelectOption extends React.Component{


render(){
    return (
        <>  <div className="SelectOptionKlasa">
            <Select 
                name="roleSelect"
                label={"Select roles"}
                defaultValue={localStorage.getItem('lang')}
                options={[
                    {label:"existing roles", value:this.props.role.existingrole},
                    {label:"add new role", value:this.props.role.addnewrole}
                ]}
                
                onChange={(e) => this.props.ChangeRole(e.target.value)}
            />
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

export default connect(mapStateToProps)(SelectOption);