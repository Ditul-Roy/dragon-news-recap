import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';


const SignUp = () => {

    const {createUser} = useContext(UserContext);
    const [chacked, setChacked] = useState(false)
    const handleChack = event =>{
        setChacked(event.target.checked);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            form.reset();
        })
        .catch(error => console.log(error))
    }
    return (
        <Container>
            <h3>Please SignUp</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleChack} type="checkbox" label="Check me out" />
                </Form.Group>
                <Button disabled={!chacked} variant="primary" type="submit">
                    Sign Up
                </Button>
                <p><small>Already have an account ! please <Link to="/login">Log In</Link></small></p>
            </Form>
        </Container>
    );
};

export default SignUp;