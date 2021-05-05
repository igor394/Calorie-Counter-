import React from 'react';
import {Modal} from "react-bootstrap";

const ModalItem = (props) => {
    return (
        <Modal {...props}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
        >
            <Modal.Header closeButton> </Modal.Header>
            <Modal.Body className='text-center'>
                <h4>{props.text}</h4>
            </Modal.Body>
        </Modal>
    );
}

export default ModalItem;