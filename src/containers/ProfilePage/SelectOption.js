import React from 'react'
import { connect } from 'react-redux';
import { Select } from '../../components/formElements';
import './SelectOption.css';
import {FetchRoleStart, FetchRoleSuccess} from '../../actions'
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

componentDidMount = (values) => {
  this.props.FetchRoleStart(values);
  console.log("PROPS ROLE", this.props.role.categoryname)

}

render(){
  console.log("this role category name", this.categoryname)
  var categoryNames = [
    {
      id: "EDU",
      name: this.props.role.categoryname
      
    },
    {
      id: "TECH",
      name: this.props.role.categoryname
      
    },
      
    { id: "RES",
      name: this.props.role.categoryname
      
    },
    {
      id: "HAY",
      name: this.props.role.categoryname
      
    },
  ];
//   if(this.state.value){
    
//     return <ModalPopUp/>
//  }
  let categoryList = categoryNames.length > 0
     && categoryNames.map((item, i) => {
       return (
         <option key={i} value={item.id}>{item.name}</option>
         )
         
     }, this);
    return (
        <>
      <div className="SelectOptionKlasa">
            <Select 
                name="roleSelect"
                label={"Select roles"}
                defaultValue={localStorage.getItem('lang')}
                // options={this.props.role.map((o, i) => {
                //    return {id: i, value: o.categoryname, label: o.categoryname};
                // })}
                 options={categoryList}

                 onChange={this.onChange}
                />
          
             
            </div>
        </>
      )
}
} 
const mapDispatchToProps = (dispatch) => ({
  FetchRoleStart: (values) => dispatch(FetchRoleStart(values))
 
});


const mapStateToProps = state => {
    return {
      role: state.role
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SelectOption);



