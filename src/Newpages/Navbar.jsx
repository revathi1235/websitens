import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
function CollapsibleExample() {
    const navigate=useNavigate()
    const handleHome=()=>{
        navigate('/')
    }
    const handleAboutus=()=>{
        navigate('/aboutus')
    }
   
    const handleAporaFulfillmentautomation=()=>{
      navigate('/aporafulfillmentautomation')
    }
    const handleServices=()=>{
      navigate('/services')
    }
  return (
    <Navbar collapseOnSelect expand="xl" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
            <img src='./Assets/ns black transparent.png'  width="100"
          height="50" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className="ms-auto" />
        {/* Collapsible content that appears/disappears on toggle */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" onClick={handleHome}>Home</Nav.Link>
            <Nav.Link onClick={handleAboutus   }>About Us</Nav.Link>
            <NavDropdown title="Products" id="nav-dropdown" >
              <NavDropdown.Item   className='fix-dropdown-height' eventKey="4.1" onClick={handleAporaFulfillmentautomation}>APORA Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item className='fix-dropdown-height' eventKey="4.2">PURVEY Order Management System</NavDropdown.Item>
              <NavDropdown.Item className='fix-dropdown-height' eventKey="4.3">PURVEY Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link onClick={handleServices}>Services</Nav.Link>
         
            <NavDropdown title="Solutions" id="nav-dropdown">
            <NavDropdown className='fix-dropdown-height' title="Warehouse Management" id="nav-dropdown">
              <NavDropdown.Item className='fix-dropdown-height' eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item className='fix-dropdown-height' eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item  className='fix-dropdown-height' eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown><br />
            <NavDropdown className='fix-dropdown-height' title="Sales" id="nav-dropdown">
              <NavDropdown.Item  className='fix-dropdown-height' eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item className='fix-dropdown-height'  eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item  className='fix-dropdown-height' eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown className='fix-dropdown-height' title="AI Powered Multi - Channel Fulfillment" id="nav-dropdown">
              <NavDropdown.Item className='fix-dropdown-height'  eventKey="4.1">Fulfillment Automation</NavDropdown.Item>
              <NavDropdown.Item className='fix-dropdown-height'  eventKey="4.2">Order Management System</NavDropdown.Item>
              <NavDropdown.Item className='fix-dropdown-height'  eventKey="4.3">Warehouse Management System</NavDropdown.Item>
              
            </NavDropdown>
             
              
            </NavDropdown>
            <Nav.Link href="/" onClick={handleAboutus   }>Case Studies</Nav.Link>
            <Nav.Link href="/" onClick={handleAboutus   }>Blogs</Nav.Link>
            {/* <Nav.Link  onClick={handleContactus}>Contact Us</Nav.Link> */}
          </Nav>
         
          <Nav >
          <button class="custom-btn btn-5"><span>Contact Us</span></button>
          <button class="custom-btn btn-5"><span>Request Demo</span></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;