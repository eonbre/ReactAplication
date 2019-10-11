import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { connect } from 'react-redux';


buildButtons = () => {
 for (var i=0; i<this.props.roles.length; i++) {
     const role = this.props.roles[i];
     <Button variant="primary">{this.props.role.categoryname}</Button>
  
    }
  }
  
class ModalPopUp extends React.Component  {
render(){ 
return(

    <Modal.Dialog>
    <Modal.Header closeButton>
      <Modal.Title>Choose Role</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
    {/* <Button variant="primary">Save changes</Button>
    <Button variant="primary">Save changes</Button>
    <Button variant="primary">Save changes</Button>
    <Button variant="primary">Save changes</Button>
      <p>Modal body text goes here.</p> */}
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
const mapStateToProps = state => {
    return {
       role: state.role
    }
  }
 
export default connect(mapStateToProps)(ModalPopUp);