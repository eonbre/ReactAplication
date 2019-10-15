import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { RoleStart } from '../../actions/'
import './stajl.css'; 
class ModalPopUp extends React.Component  {

buildButtons = (i) => {
  const buttons = this.props.role.map(role => <Button variant="primary">{this.props.role.categoryname[i]}</Button>);
}

closeButton = () => {
  
}

render(){
console.log("ROLEEE", this.props.role)

return(
    
    <Modal.Dialog className="positionandsize">
    <Modal.Header closeButton className="closeButtonKlasa">
      <Modal.Title className="TitleKlasa">Choose Role</Modal.Title>
    </Modal.Header>
  
    <Modal.Body className="sti">
    {this.buildButtons}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary">Close</Button>
      <Button variant="primary">Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>

     )
}

}


const mapDispatchToProps = (dispatch) => ({
  RoleStart: (values) => dispatch(RoleStart())
 
});

const mapStateToProps = state => {
    return {
       role: state.role
    }
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(ModalPopUp);