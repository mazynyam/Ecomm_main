import React , { useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from './context/ContactProvider'

export default function NewContactModal({ closeModal}) {

    const idRef = useRef()
    const nameRef = useRef()
    const { createContact} = useContacts()

    function handleSubmit(e){
        e.preventDefault()
        createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }
    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type='text' ref={idRef} required/>
                    </Form.group>
                    <Form.group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' ref={nameRef} required/>
                    </Form.group>
                    <Button type='submit'>Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
