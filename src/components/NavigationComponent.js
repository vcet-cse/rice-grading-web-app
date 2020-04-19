import React, {Component} from 'react';
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron, ModalBody, ModalHeader, Modal } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavigationComp extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen1: false,
            isNavOpen2: false,
            isLoding: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModaluseAboutUs = this.toggleModaluseAboutUs.bind(this);
        this.toggleModaluseHowtoUse = this.toggleModaluseHowtoUse.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModaluseHowtoUse(){
        this.setState({
            isModalOpen1: !this.state.isModalOpen1
        });
    }

    toggleModaluseAboutUs(){
        this.setState({
            isModalOpen2: !this.state.isModalOpen2
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
                        <NavbarToggler onClick={this.toggleNav} className="bg-info togler-icon"/>
                        <Collapse isOpen={this.state.isNavOpen} navbar className="ml-3">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to="/home">
                                        <strong>Home</strong>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to="/grade">
                                        <strong>Grade</strong>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to="/" onClick={this.toggleModaluseHowtoUse}>
                                        <strong>How to use</strong>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link text-dark" to="/" onClick={this.toggleModaluseAboutUs}>
                                        <strong>About</strong>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModaluseHowtoUse} >
                    <ModalHeader toggle={this.toggleModaluseHowtoUse}>How to use</ModalHeader>
                    <ModalBody>
                        <strong>
                            <center>
                                <h4>Here is the simple method they can follow.</h4>
                            </center>
                            <p className="mt-4 offset-md-1">1. Take a picture of the sample of Rice using smartphone.</p>
                            <p className="offset-md-1">2. Upload it using the Application we built.</p>
                            <p className="offset-md-1">3. Know the grade instanty.</p>
                        </strong>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModaluseAboutUs} >
                    <ModalHeader toggle={this.toggleModaluseAboutUs}>About us</ModalHeader>
                    <ModalBody>
                        
                            <center>
                                <h4><strong>Our Team</strong></h4>
                                <p className="mt-4">
                                    <strong>
                                        Sandesh Karanth P</strong><br />
                                    [Assistent proffesor]
                                </p>
                                <p className="mt-4">
                                    <strong >Premnath</strong><br />
                                    [4VP16CS066]
                                </p>
                                <p className="mt-4">
                                    <strong>U Akshay Nayak</strong><br />
                                    [4VP16CS110]
                                </p>
                                <p className="mt-4">
                                    <strong>Vishwas Prabhu</strong><br />
                                    [4VP16CS113]
                                </p>
                                <p className="mt-4">
                                    <strong>Vishwas M S</strong><br />
                                    [4VP16CS114]
                                </p>
                            </center>
                    </ModalBody>
                </Modal>
            </ React.Fragment>
        );
    }
}

export default NavigationComp;