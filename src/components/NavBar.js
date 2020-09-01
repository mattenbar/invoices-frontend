import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = (props) => {

  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link href="/invoices">Invoices</Nav.Link>
        <Nav.Link href="/customers">Customers</Nav.Link>
        </Nav>
      </Navbar>
  )
}

export default NavBar