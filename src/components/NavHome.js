import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import style from '../components/homepage/drop.css';

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    font-weight:600;
    font-size:14px;
    &:hover {
        text-decoration:none;  
        color: #696969;
    }
  }
`
 
export default function NavHome() {
    // this.state={
    //     loginstatus:false
    // }
    
    const [state, setState] = useState({loginstatus:localStorage.getItem("usertoken"),name:localStorage.getItem("name")});
  
    // setState({ loginstatus:localStorage.getItem("usertoken") });
    function clickfunction(){
        localStorage.removeItem("usertoken");
        localStorage.removeItem("email");
        localStorage.removeItem("name")
        localStorage.removeItem("recoveryemail")
        window.location.href = "/";
    }
    return (
        
          <div>
<div className="container navh ">

            <Navbar collapseOnSelect expand="lg" >
  <Navbar.Brand href="#home">  
                <img src={require('../assets/icons/png.png')} alt="logo"
                style={{height: '80px', width: '80px'}} />
            </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" >
    <Nav.Item>
                            <Nav.Link className="nav">
                                <Link to="/Home" active><b>Home</b></Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                        <Nav.Link className="nav">
                                <Link to="/FP1"><b>Band</b></Link>
                            </Nav.Link>
                        </Nav.Item>

                        
                        <Nav.Item>
                        <Nav.Link className="nav">
                                <Link to="/artistmain"><b>Artist</b></Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                    
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="nav">
                            <Link to="/gmain"><b>Gigs</b></Link>
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="nav">
                            <Link to="/studiofiltermain"><b>Studio</b></Link>
                            </Nav.Link>
                        </Nav.Item>
                <Nav.Item>
                <NavDropdown title="Shop" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
                 
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="nav"> 
                    <Link to="/main"><b>Post Event</b></Link>
                    </Nav.Link>
                </Nav.Item>
    </Nav>
    <Nav className="ml-auto" >
    <Nav.Item>
                    <Nav.Link className="nav">
             {state.loginstatus!=null? <div> <Link to="/"><b>{state.name}</b></Link>  <Link to="/" onClick={clickfunction}><b>|| logout</b></Link></div>:<Nav.Item> <Link to="/login"><b>Login/Signp</b></Link></Nav.Item>}
                    </Nav.Link>
                
                </Nav.Item>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>    
<hr/>
</div>
                        
    );
}
