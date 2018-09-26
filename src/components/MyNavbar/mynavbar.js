import React from 'react';
import './index.css'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class MyNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  close = () => {
    if (this.state.isOpen) this.toggle()
  }

  render() {
    return (
      <div className='navbar-wrapper'>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Abel Hernando</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#introduction" onClick={this.close}>Introduction</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#skills" onClick={this.close}>Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#personal" onClick={this.close}>Who am I</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#portfolio" onClick={this.close}>What I've done</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact" onClick={this.close}>Get in touch</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
