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
import Footer from "../components/Footer";

function Services() {
  // Create a ref to the target section
  const fastSectionRef = useRef(null);
  const implementationSectionRef = useRef(null);
  const processEnhancementRef = useRef(null);
  const potImplimentationSupportRef = useRef(null);
  const usertraingRef = useRef(null);
  const expservicesRef=useRef(null)
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
  const scrollpotImplimentationSupportRef = () => {
    if (potImplimentationSupportRef.current) {
      potImplimentationSupportRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  const scrollUsertrainingRef = () => {
    if (usertraingRef.current) {
      usertraingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };





  const scrollExptrainingRef = () => {
    if (expservicesRef.current) {
      expservicesRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
      
      <div className="starting-picklistgeneration  ">
        <h1 className="gradient-text">Services</h1>
        <div className="btn-grp-servicepage d-flex mt-3">
          <button
            className="service-button"
            onClick={scrollToImplementationSection}
          >
            Implementation
          </button>

          {/* <button className="service-button" onClick={scrollToProcessEnhancement}>
            Process Enhancement
          </button> */}
          <button className="service-button" onClick={scrollpotImplimentationSupportRef}>
            Post Implimentation Support
          </button>
          <button className="service-button" onClick={scrollUsertrainingRef}>
            User Training
          </button>
          <button className="service-button" onClick={scrollExptrainingRef}>
            Integration
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






{/* THIRD DOIV---- */}
|<Container ref={potImplimentationSupportRef}>
<h2 className="heading2-servicepage">
Post Implimentation Support

            </h2>


            <Row>
              <Col lg={2}></Col>
              <Col lg={8}>
              <span className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ea quia a repudiandae soluta! Culpa dolorum ad expedita saepe ullam rerum dolores in laudantium voluptates non exercitationem eum tempora aspernatur dicta nihil, totam debitis vitae quo necessitatibus odio. Quam magni omnis nam accusantium debitis sit natus excepturi non provident! Itaque odit aspernatur quaerat laboriosam corrupti aliquam neque nisi aut maiores quisquam illum voluptate distinctio est sunt maxime perferendis magnam, reprehenderit assumenda vel culpa cupiditate dignissimos dolorum tempora? Optio nobis voluptate impedit quam dolorum architecto saepe, tempore dicta nihil culpa suscipit deserunt laboriosam! Ad incidunt iusto nihil neque eaque dolore amet iure, nemo reiciendis. Quaerat laudantium ratione ab expedita omnis enim? Facilis, temporibus voluptas! Non odit perferendis culpa ducimus? Eum optio laudantium earum voluptatibus sit eligendi consectetur, praesentium voluptates beatae unde reiciendis ab aperiam dicta ullam architecto aliquid eius fugiat, quis minima veritatis. Ipsa quis rem sit esse deserunt voluptate! Id fugit ea, ipsa molestiae distinctio possimus, animi laboriosam illum, impedit velit accusantium maiores. Placeat, aliquid distinctio veritatis ad eaque itaque unde quia ab a beatae nemo delectus excepturi aspernatur, eos minima porro debitis error magni corrupti perferendis architecto quasi eveniet nobis maiores? Possimus quas aliquid sed, eveniet architecto iusto! Beatae!</span>
              </Col>
            </Row>
</Container>





{/* fourth div */}
|<Container ref={usertraingRef}>
<h2 className="heading2-servicepage">
User Training

            </h2>


            <Row>
              <Col lg={2}></Col>
              <Col lg={8}>
              <span className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ea quia a repudiandae soluta! Culpa dolorum ad expedita saepe ullam rerum dolores in laudantium voluptates non exercitationem eum tempora aspernatur dicta nihil, totam debitis vitae quo necessitatibus odio. Quam magni omnis nam accusantium debitis sit natus excepturi non provident! Itaque odit aspernatur quaerat laboriosam corrupti aliquam neque nisi aut maiores quisquam illum voluptate distinctio est sunt maxime perferendis magnam, reprehenderit assumenda vel culpa cupiditate dignissimos dolorum tempora? Optio nobis voluptate impedit quam dolorum architecto saepe, tempore dicta nihil culpa suscipit deserunt laboriosam! Ad incidunt iusto nihil neque eaque dolore amet iure, nemo reiciendis. Quaerat laudantium ratione ab expedita omnis enim? Facilis, temporibus voluptas! Non odit perferendis culpa ducimus? Eum optio laudantium earum voluptatibus sit eligendi consectetur, praesentium voluptates beatae unde reiciendis ab aperiam dicta ullam architecto aliquid eius fugiat, quis minima veritatis. Ipsa quis rem sit esse deserunt voluptate! Id fugit ea, ipsa molestiae distinctio possimus, animi laboriosam illum, impedit velit accusantium maiores. Placeat, aliquid distinctio veritatis ad eaque itaque unde quia ab a beatae nemo delectus excepturi aspernatur, eos minima porro debitis error magni corrupti perferendis architecto quasi eveniet nobis maiores? Possimus quas aliquid sed, eveniet architecto iusto! Beatae!</span>
              </Col>
            </Row>
</Container>








{/* fifth div */}
|<Container ref={expservicesRef}>
<h2 className="heading2-servicepage">
Experience services

            </h2>


            <Row>
              <Col lg={2}></Col>
              <Col lg={8}>
              <span className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ea quia a repudiandae soluta! Culpa dolorum ad expedita saepe ullam rerum dolores in laudantium voluptates non exercitationem eum tempora aspernatur dicta nihil, totam debitis vitae quo necessitatibus odio. Quam magni omnis nam accusantium debitis sit natus excepturi non provident! Itaque odit aspernatur quaerat laboriosam corrupti aliquam neque nisi aut maiores quisquam illum voluptate distinctio est sunt maxime perferendis magnam, reprehenderit assumenda vel culpa cupiditate dignissimos dolorum tempora? Optio nobis voluptate impedit quam dolorum architecto saepe, tempore dicta nihil culpa suscipit deserunt laboriosam! Ad incidunt iusto nihil neque eaque dolore amet iure, nemo reiciendis. Quaerat laudantium ratione ab expedita omnis enim? Facilis, temporibus voluptas! Non odit perferendis culpa ducimus? Eum optio laudantium earum voluptatibus sit eligendi consectetur, praesentium voluptates beatae unde reiciendis ab aperiam dicta ullam architecto aliquid eius fugiat, quis minima veritatis. Ipsa quis rem sit esse deserunt voluptate! Id fugit ea, ipsa molestiae distinctio possimus, animi laboriosam illum, impedit velit accusantium maiores. Placeat, aliquid distinctio veritatis ad eaque itaque unde quia ab a beatae nemo delectus excepturi aspernatur, eos minima porro debitis error magni corrupti perferendis architecto quasi eveniet nobis maiores? Possimus quas aliquid sed, eveniet architecto iusto! Beatae!</span>
              </Col>
            </Row>
</Container>


<Footer/>
    </div>
  );
}

export default Services;
