import React from 'react';
import { Form } from 'react-bootstrap';


export const Input = props => (
    console.log("PROPSSS", props),
    <Form.Group controlId={props.name} style={props.style} {...props.input}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control {...props.input} type={props.input.type} placeholder={props.placeholder} isInvalid={props.meta.touched && props.meta.error} />
        <Form.Control.Feedback type="invalid">{props.meta.error}</Form.Control.Feedback>
    </Form.Group>
   
);

export const Select = props => {
    return(
    <Form.Group controlId={props.name} style={props.style}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control {...props} as="select" >
            {props.options.map(el => (
                <option key={el.value} value={el.value}>{el.label}</option>
            ))}
        </Form.Control>
    </Form.Group>
)};