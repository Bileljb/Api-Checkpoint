import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
function NavBar() {
    return (
        <div>
            <Navbar sticky='top' bg='primary' variant='dark'>
                <Container>
                    <Navbar.Brand href='/home'>About</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar

