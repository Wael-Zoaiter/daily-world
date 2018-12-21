import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, 
  NavbarBrand, 
  NavbarNav, 
  NavItem, 
  NavbarToggler, 
  Collapse, 
} from "mdbreact";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleCollapse = () => this.setState(state => ({isOpen: !state.isOpen}));

  render() {
    return (
      <header>
        <Navbar dark expand="xs">
          <div className="container">
            <NavbarBrand>
              <Link to="/"><h1>D<span>aily</span>W<span>orld</span></h1></Link>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleCollapse} />
            <Collapse
              id="navbarCollapse"
              isOpen={this.state.isOpen}
              navbar
            >
              {/* <NavbarNav left>
                <NavItem active>
                  <NavLink to="/">Home</NavLink>
                </NavItem>
              </NavbarNav> */}
              <NavbarNav right>
                <NavItem onClick={() => this.props.toggle()}>
                  <span className="mode">{this.props.mode}</span>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </div>
        </Navbar>
      </header>
    )
  }
}

export default Header;