import React from 'react'
import { connect } from 'react-redux';
import { Select } from '../../components/formElements';
import './SelectOption.css';
import {RoleStart} from '../../actions'


class SelectOption extends React.Component{
onChange = (values) => {
    this.props.RoleStart(values);
  } 

  
// buildOptions = () => {
//   const { formatMessage } = this.props.intl;
//   let options = [];
//   for (var i=0; i<this.props.roles.length; i++) {
//     const role = this.props.roles[i];
//     options.push({
//       value: '${role.type_${role.id}',
//       label: formatMessage({
//         id:"role.name"+role.categoryname,
//         defaultMessage:"role.name."+role.categoryname
//       }) + role.id

//     })
//    options.push({value: "NEW", label:formatMessage({
//      id:"role.categoryname.NEW",
//      defaultMessage:"role.categoryname.NEW"
//    })})

//   }
// }
 
render(){
    return (
        <>  <div className="SelectOptionKlasa">
            <Select 
                name="roleSelect"
                label={"Select roles"}
                defaultValue={localStorage.getItem('lang')}
                // options={this.props.role.map((o, i) => {
                //    return {id: i, value: o.categoryname, label: o.categoryname};
                // })}
                 options={[
                 {label:this.props.role.categoryname, value:this.props.role.existingrole},
                 {label:"Streamer",  value:this.props.role.addnewrole},
                 {label:"Investor",  value:this.props.role.addnewrole},
                 {label:"Educator",  value:this.props.role.addnewrole},
                 {label:"Add new Role",  value:this.props.role.addnewrole}
                 ]}

                onChange={this.onChange}
                

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



