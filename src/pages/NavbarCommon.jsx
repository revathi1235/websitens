import React from 'react'
import './nav.css'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function NavbarCommon() {

    const navigate=useNavigate()
    const handleHome=()=>{
        navigate('/')
    }
    const handleAboutus=()=>{
        navigate('/aboutus')
    }
    const handleContactus=()=>{
      navigate('/contactus')
    }
  return (
    <>
    <div className='common-nav-fix'>





    <Navbar  >
      <Navbar.Brand >
        <img
          src='./Assets/ns black transparent.png'
          width="100"
          height="50"
          className="d-inline-block align-top"
          alt="Logo"
        />
       
      </Navbar.Brand>
        <Nav className="nav-top-custom-btn ms-auto">
        <button class="custom-btn btn-5"><span>Contact Us</span></button>
        <button class="custom-btn btn-5 ms-2"><span>Request Demo</span></button>
        </Nav>
     
    </Navbar>


 
{/* <Navbar >
     <img src='./Assets/ns black transparent.png' alt=""  style={{height:"auto",width:"8%"}}/>
      <Form inline>
        <Row>
          <Col  className='nav-top-custom-btn me-auto'>
          <button class="custom-btn btn-5"><span>Contact Us</span></button>
          <button class="custom-btn btn-5 ms-2"><span>Request Demo</span></button>
          </Col>
        </Row>
      </Form>

      
    </Navbar> */}
    <Navbar  expand="lg" bg='white' >
      <Container>
      
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="ms-auto" />
        {/* Collapsible content that appears/disappears on toggle */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={handleHome}>Home</Nav.Link>
            <Nav.Link onClick={handleAboutus   }>About Us</Nav.Link>
            <NavDropdown title="Products" id="nav-dropdown" >
              <NavDropdown.Item className='fix-dropdown-height' eventKey="4.1">APORA Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item className='fix-dropdown-height' eventKey="4.2">PURVEY Order Management System</NavDropdown.Item>
              <NavDropdown.Item className='fix-dropdown-height' eventKey="4.3">PURVEY Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
         
            <NavDropdown title="Solutions" id="nav-dropdown">
            <NavDropdown title="Warehouse Management" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown><br />
            <NavDropdown title="Sales" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="AI Powered Multi - Channel Fulfillment" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
             
              
            </NavDropdown>
            <Nav.Link href="/" onClick={handleAboutus   }>Case Studies</Nav.Link>
            <Nav.Link href="/" onClick={handleAboutus   }>Blogs</Nav.Link>
            <Nav.Link  onClick={handleContactus   }>Contact Us</Nav.Link>
          </Nav>
          <Nav className='main-custom-btn-div'>
          <button class="custom-btn btn-5"><span>Contact Us</span></button>
          <button class="custom-btn btn-5"><span>Request Demo</span></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
    </div>

</>
  )
}

export default NavbarCommon