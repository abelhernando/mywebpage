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

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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
                <NavLink href="/#introduction">Introduction</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#personal">Who am I</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#portfolio">What I've done</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#contact">Get in touch</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
