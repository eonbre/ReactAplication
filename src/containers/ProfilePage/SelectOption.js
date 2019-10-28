import React from 'react'
import { connect } from 'react-redux';
import { Select } from '../../components/formElements';
import './SelectOption.css';
import {FetchRoleStart, FetchRoleSuccess, chooseCategoryName} from '../../actions'
import ModalPopUp from '../ModalWindow'
import RoleInfo from './RoleInfo';


class SelectOption extends React.Component{

  constructor() {
    super();
    this.state = {
        showInfo:false
    };
}
componentDidMount = () => {
  this.props.FetchRoleStart();

}

onChange = (event) => {
 console.log("role front", event.target.value)
 
  this.setState({
    showInfo: !this.state.showPopup
})
this.props.chooseCategoryName();
 console.log("chooes categotory name", this.props.chooseCategoryName())
}

render(){
  let roleList = [];
  if(this.state.showInfo){
    return (<>
      <div><RoleInfo/></div>
     </>
    )
  }
   if(this.props.role.isFetched){
      console.log("size of the role", this.props.role.roles.data.size)
      
    for(var i=0; i<this.props.role.roles.data.size; i++) {
      console.log("this role category name", this.props.role.roles.data.data[i].categoryname)
      roleList.push(" ",this.props.role.roles.data.data[i].categoryname)
      console.log("ROLEEE LIST", roleList)
      }
      return (
        <>
        <div className="SelectOptionKlasa1">
        <Select 
            name="roleSelect"
            
            defaultValue={localStorage.getItem('lang')}
            options={roleList.map((o, i) => {
               return {id:i, value:o, label:o}
            })}
             label="Choose existing role"
             onChange={this.onChange}
            />
      </div>
      
      </>
      )
      
     
  }
  
  
  console.log("role is not fetched")
  return ""


}

}

const mapDispatchToProps = (dispatch) => ({
  FetchRoleStart: (values) => dispatch(FetchRoleStart(values)),
  chooseCategoryName: (values) =>dispatch(chooseCategoryName(values))
 
});


const mapStateToProps = state => {
    return {
      role: state.role
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SelectOption);



            // options={this.props.role.map((o, i) => {
            //    return {id: i, value: o.categoryname, label: o.categoryname};
            // })}

              // <div>{roleList}</div> 