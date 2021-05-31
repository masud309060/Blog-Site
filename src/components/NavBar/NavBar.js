import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [tab, setTab] = useState('');
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="justify-content-end ml-auto container" activeKey="/home">
                <Nav.Item>
                    <Nav.Link onClick={() => setTab('')} active={tab === ''} as={Link} to="/">
                        Blogs
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => setTab('users')}
                        active={tab === 'users'}
                        as={Link}
                        to="/users"
                    >
                        Users
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => setTab('profile')}
                        active={tab === 'profile'}
                        as={Link}
                        to="/profile"
                    >
                        Profile
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
};

export default NavBar;
