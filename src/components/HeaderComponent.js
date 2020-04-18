import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/logo.png" height="30" width="41" alt="Ristorient Con Fusion"/>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar className="ml-3">
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <strong>Home</strong>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <strong>Grade</strong>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <strong>How to use</strong>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <strong>About</strong>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-8">
                                <h1>Rice grain grading</h1>
                                <p>Quality of grain is of great importance for human beings 
                                    as it directly impacts the human health.
                                    Get to the Know Grade of rice you are using by 
                                    uploading rice image to our grading system.</p>
                            </div>
                            <div className="col-12 col-sm-2 ml-4">
                                <img src="assets/gif/header.gif" alt="description of gif" className="header-gif" />
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </ React.Fragment>
        );
    }
}

export default Header;