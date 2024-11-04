import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function CollapsibleExample() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleAboutus = () => {
    navigate("/aboutus");
  };

  const handleAporaFulfillmentautomation = () => {
    navigate("/aporafulfillmentautomation");
  };
  const handleServices = () => {
    navigate("/services");
  };
  const handleContactus = () => {
    navigate("/contactus");
  };
  const handlePurveyordermanagementsystem = () => {
    navigate("/purveyordermanagementsystem");
  };
  const handleCasestudies = () => {
    navigate("/casestudies");
  };
  const handlePurveywarehousemanagement = () => {
    navigate("/productwarehousemanagementsystem");
  };
  const handleBlogs = () => {
    navigate("blogs");
  };
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);
  return (
    <Navbar
    collapseOnSelect
    expand="xl"
    expanded={expanded}
    onToggle={handleToggle}
    style={{ background: "white" }}
    sticky="top"
  >
    <Container>
      <Navbar.Brand href="/">
        <img
          src="./Assets/ns black transparent.png"
          width="100"
          height="50"
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" onClick={() => { handleHome(); handleLinkClick(); }}>
            Home
          </Nav.Link>
          <Nav.Link onClick={() => { handleAboutus(); handleLinkClick(); }}>
            About Us
          </Nav.Link>
          <NavDropdown title="Warehouse Management" id="nav-dropdown">
            <NavDropdown.Item
              className="fix-dropdown-height"
              eventKey="4.1"
              onClick={() => { handleAporaFulfillmentautomation(); handleLinkClick(); }}
            >
              APORA Fulfillment Automation
            </NavDropdown.Item>
            {/* <NavDropdown.Item
              className="fix-dropdown-height"
              eventKey="4.2"
             
            >
              PURVEY Order Management System
            </NavDropdown.Item> */}
            <NavDropdown.Item
              className="fix-dropdown-height"
              eventKey="4.3"
              onClick={() => { handlePurveywarehousemanagement(); handleLinkClick(); }}
            >
              PURVEY Warehouse Management System
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link onClick={() => { handleServices(); handleLinkClick(); }}>
            Services
          </Nav.Link>
          <Nav.Link onClick={() => { handleCasestudies(); handleLinkClick(); }}>
            Case Studies
          </Nav.Link>
          <Nav.Link onClick={() => { handleBlogs(); handleLinkClick(); }}>
            Blogs
          </Nav.Link>
        </Nav>

        <Nav>
          <button className="custom-btn btn-5" onClick={() => { handleContactus(); handleLinkClick(); }}>
            <span>Contact Us</span>
          </button>
          <button className="custom-btn btn-5">
            <span>Request Demo</span>
          </button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default CollapsibleExample;
