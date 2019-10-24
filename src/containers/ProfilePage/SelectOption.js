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

componentDidMount = () => {
  this.props.FetchRoleStart();
  console.log("PROPS ROLE", this.props.role.roles)

}

render(){
 
  console.log("PROPS ROLE", this.props.role.roles.data.data[0].categoryname)
  return("")
}
}

//    var categoryName = [
 
//   {
//       id: this.props.role,
//       name: this.props.role.categoryname
      
//     },
//     {
//      id: this.props.role.id,
//      name: this.props.role.categoryname
      
//    },
      
//      { id: "3",
//       categoryname: this.props.role.categoryname
      
//    },
//      {
//       id: "55",
//       name: this.props.role.categoryname
      
//     },
// ];
// //   if(this.state.value){
    
// //     return <ModalPopUp/>
// //  }
//   let categoryList = categoryName.length > 0
//      && categoryName.map((item, i) => {
//        return (
//          <option key={i} value={item.id}>{item.name}</option>
//          )
         
//      }, this);
//     return (
//         <>
//         {/* <div>First category name {this.props.role.categoryname}</div>
//         <div>Second category name {this.props.role.categoryname}</div>
//         <div>Third category name {this.props.role.categoryname}</div>
//         <div>Fourth category name {this.props.role.categoryname}</div> */}
//       <div className="SelectOptionKlasa">
//             <Select 
//                 name="roleSelect"
//                 label={"Select roles"}
//                 defaultValue={localStorage.getItem('lang')}
//                 // options={this.props.role.map((o, i) => {
//                 //    return {id: i, value: o.categoryname, label: o.categoryname};
//                 // })}
//                  options={categoryList}

//                  onChange={this.onChange}
//                 />
          
             
//             </div>
//         </>
//       )
// }

const mapDispatchToProps = (dispatch) => ({
  FetchRoleStart: (values) => dispatch(FetchRoleStart(values))
 
});


const mapStateToProps = state => {
    return {
      role: state.role
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SelectOption);



