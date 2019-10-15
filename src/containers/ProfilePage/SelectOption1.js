import React from 'react'
import { connect } from 'react-redux';
import { Select } from '../../components/formElements';
import './SelectOption.css';
import {RoleStart} from '../../actions'
import ModalPopUp from '../ModalWindow'

class SelectOption extends React.Component{
//   constructor(){
//     super();
//       this.state = {
//         value:0
//       }
//     }
  
// onChange = (values) => {
//   this.setState({ value: this.state.value+1 })
  
// } 

render(){
//   if(this.state.value){
    
//     return <ModalPopUp/>
//  }
    return (
        <>
      <div className="SelectOptionKlasa1">
            <Select 
                name="roleSelect"
                label={"Create new role"}
                defaultValue={localStorage.getItem('lang')}
                // options={this.props.role.map((o, i) => {
                //    return {id: i, value: o.categoryname, label: o.categoryname};
                // })}
                 options={[

                 
                 {label:"Add new Role"}
                 ]}
                 onChange={this.onChange}
                />
          
             
            </div>
        </>
      )
}
} 
const mapDispatchToProps = (dispatch) => ({
  RoleStart: (values) => dispatch(RoleStart(values))
 
});


const mapStateToProps = state => {
    return {
      role: state.role
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SelectOption);



