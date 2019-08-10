import React from 'react';
import './header.scss';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../logo.svg'

export default function Header() {
    return (
        <Navbar bg='dark' variant='dark' expand='lg' className='top-nav'>
            <Container>
                <Navbar.Brand as='span'>
                    <img
                        src={logo}
                        alt='Logo'
                        width='30'
                        height='30'
                        className='d-inline-block align-top'/>
                    Campaign React App
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                    <Nav className='ml-auto'>
                        <NavLink to='/' exact activeClassName='selected-nav'>
                            <Nav.Link as='span'>Home</Nav.Link>
                        </NavLink>
                        <NavLink to='/campaign' activeClassName='selected-nav'>
                            <Nav.Link as='span'>Campaigns</Nav.Link>
                        </NavLink>
                        <NavLink to='/about' activeClassName='selected-nav'>
                            <Nav.Link as='span'>About</Nav.Link>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
