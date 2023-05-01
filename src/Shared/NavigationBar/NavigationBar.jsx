import React from 'react';
import { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../../Context/AuthContext';

const NavigationBar = () => {
    const {user, loggedOut} = useContext(UserContext);

    const handleLogOut = () =>{
        loggedOut()
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="info" className='my-4'>
            <Container>
                <Navbar.Brand >The News Hunter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='text-decoration-none text-success me-2' to='/categorynews/0'>Home</Link>
                        <Link className='text-decoration-none text-success me-2'>About</Link>
                        <Link className='text-decoration-none text-success me-2'>Career</Link>
                    </Nav>
                    <Nav>
                        {
                            user ?<>
                             <FaUserAlt className='align items center me-2 mt-2 mb-0 rounded-circle'></FaUserAlt>
                             <button onClick={handleLogOut} className='btn btn-secondary'>Log out</button> </>:
                                <>
                                    <Link className='text-decoration-none text-white fs-6 btn btn-secondary' to="/login">Log in</Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;