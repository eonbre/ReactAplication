import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import './stajl.css'; 
class ModalPopUp extends React.Component  {

buildButtons = (i) => {
  const buttons = this.props.roles.map(role => <Button variant="primary">{this.props.roles.categoryname[i]}</Button>);
}

clickedButton = () => {
  
}


render(){ 
return(
    
    <Modal.Dialog className="positionandsize">
    <Modal.Header closeButton className="closeButtonKlasa">
      <Modal.Title className="TitleKlasa">Choose Role</Modal.Title>
    </Modal.Header>
  
    <Modal.Body className="sti">
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