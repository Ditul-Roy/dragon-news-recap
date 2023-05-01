import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link , useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../Context/AuthContext';

const Login = () => {

    const { loginUser} = useContext(UserContext);
    const navigate = useNavigate()
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/categorynews/0'


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
        .then(result => {
            console.log(result.user);
            form.reset();
            navigate(from)
            
            
            

        })
        .catch(error=>console.log(error))
    }

    return (
        <Container>
            <h3>Please Log In</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    log in
                </Button>
                <p><small>Dont have an account ! please <Link to="/signup">Sign up</Link></small></p>
            </Form>
        </Container>
    );
};

export default Login;