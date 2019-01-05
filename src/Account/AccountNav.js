import React from 'react'
import { Navbar, NavbarBrand, Button, Container } from 'reactstrap'
import logo from '../logo.svg'

class AccountNav extends React.Component {
  render() {
    let { jobcoinAddress, onLogout } = this.props

    return (
      <Navbar color="light" className="mb-5">
        <Container>
          <NavbarBrand>
            <img src={logo} width="30" height="30" class="d-inline-block align-top mr-2 ml-1" alt="lgo" />
            {jobcoinAddress}
          </NavbarBrand>
            <span className="navbar-text ml-auto">Signed In</span>
            <span className="navbar-text">
              <Button onClick={onLogout} color="link">Sign Out</Button>
            </span>
        </Container>
      </Navbar>
        )
      }
    }
    
    export default AccountNav
