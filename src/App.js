import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import classes from "./App.css";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  handleLogout = event => {
    this.userHasAuthenticated(false);
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect >
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Capgemini</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
             <Nav pullRight>
             {this.state.isAuthenticated
                ? <LinkContainer to="/login">
                    <NavItem onClick={this.handleLogout}>Logout</NavItem>
                    </LinkContainer>
                : <Fragment>
                    <LinkContainer to="/signup">
                      <NavItem></NavItem>
                    </LinkContainer>
                    <LinkContainer to="/login">
                      <NavItem></NavItem>
                    </LinkContainer>
                  </Fragment>
                  
                }
             </Nav>
           </Navbar.Collapse>     
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}


export default App;
