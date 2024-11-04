import React, { useRef } from "react";
// import bglightgreen from '../Assets/bglightgreen2.svg';
import bluewhitebgnew from "../Assets/bluewhitebgnew.svg";
import "./commoncss.css";
import { Row,Col, Container } from "react-bootstrap";
// import aporablack from '../Assets/apora_black.png'

import bluebgservicepage from "../Assets/bluebgservicepage.svg.jpg";
import Timeline from "./Timeline";
import Horizontaltimeline from "../components/Horizontaltimeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function Services() {
  // Create a ref to the target section
  const fastSectionRef = useRef(null);
  const implementationSectionRef = useRef(null);
  const processEnhancementRef = useRef(null);
  // Function to scroll to the fast section
  const scrollToFastSection = () => {
    if (fastSectionRef.current) {
      fastSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToImplementationSection = () => {
    if (implementationSectionRef.current) {
      implementationSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToProcessEnhancement = () => {
    if (processEnhancementRef.current) {
      processEnhancementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      
      <div className="starting-picklistgeneration  ">
        <h1 className="gradient-text">Services</h1>
        <div className="d-flex mt-3">
          <button
            className="service-button"
            onClick={scrollToImplementationSection}
          >
            Implementation
          </button>

          <button className="service-button" onClick={scrollToProcessEnhancement}>
            Process Enhancement
          </button>
          <button className="service-button" onClick={scrollToFastSection}>
            Post Implimentation Support
          </button>
          <button className="service-button" onClick={scrollToFastSection}>
            User Training
          </button>
          <button className="service-button" onClick={scrollToFastSection}>
            Experience Services
          </button>
        </div>
        <div className="button-container ms-4"></div>

      
      </div>
      <div>
        <Container ref={processEnhancementRef}>
          <div className="secondsec-servicepage">
            <h2 className="heading2-servicepage">
              Faster and easier to deploy.
            </h2>

            <Horizontaltimeline />
          </div>
        </Container>
      </div>

     
      <Container  >
      <div className="secondsec-servicepage">
          
            <h2 className="heading2-servicepage">
              Process Enhancement
            </h2>
           
</div>
  <Row>
    <Col lg={6} className="mt-3">
     
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px', padding: '30px 0' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faSun} style={{ marginRight: '8px' }} />
            Auto Work Load Balancing
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px', padding: '20px 0' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faSun} style={{ marginRight: '8px' }} />
            Pick Sequencing
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px', padding: '20px 0' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faSun} style={{ marginRight: '8px' }} />
            Consolidation
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '400px', padding: '30px 0' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faSun} style={{ marginRight: '8px' }} />
            Dispatch Optimization
          </span>
        </div>
    </Col>
    <Col lg={6}>
     
  <img src="../Assets/eco.jpg" alt="process enhancement images"  className='deconsolidation-img'/>
   </Col>
  </Row>
</Container>
    </div>
  );
}

export default Services;
