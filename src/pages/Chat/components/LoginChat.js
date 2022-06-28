import React, {useRef} from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import {v4 as uuidV4 } from 'uuid';

const LoginChat = ( {onIdSubmit}) => {

    const idRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidV4())
    }

    return (
        <Container className="align-items-center d-flex">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Entrez votre ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>

                <Button className="m-3" type="submit">Connexion à la messagerie test</Button>
                <Button onClick={createNewId} className="m-3" type="submit" variant="secondary">Creer un nouvel id</Button>
            </Form>
        </Container>

    );
  };
  
  export default LoginChat;