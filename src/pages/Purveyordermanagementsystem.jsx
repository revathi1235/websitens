import React from 'react'
import Chart2 from './Chart2'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube, faSquare, faSun } from '@fortawesome/free-solid-svg-icons';
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import ListGroup from 'react-bootstrap/ListGroup';
import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState,useEffect} from 'react';
import multichannelintegration from '../Assets/Multichannelintegration.svg'
function Purveyordermanagementsystem() {


    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', body: '', image: '' });
  
    const cardContents = [
      {
        title: "Mobile Order Management",
        body: "Purvey OMS enables your field representatives to manage orders on the go. With our intuitive mobile app, your team can create, track, and update orders directly from their smartphones or tablets. Say goodbye to paper-based processes and embrace digital order management for enhanced speed and accuracy.",
        image: "../Assets/work3.jpg" // Update as needed for each card
      },
      {
        title: "Real Time Order Tracking",
        body: "Gain real-time visibility into the status of your orders. Purvey OMS provides you with instant updates on order progress, enabling you to monitor each stage from creation to delivery. This visibility allows you to proactively address any issues, improve customer communication, and ensure timely order fulfilment.",
        image: "../Assets/work4.jpg" // Replace with actual image path
      },
      {
        title: "Inventory Management",
        body: "Keep track of your inventory in real-time, even when it's in the hands of your field team. Purvey OMS provides visibility into available stock levels, allowing your representatives to check inventory, place orders, and manage stock allocations on the spot. Eliminate the risk of stockouts and ensure accurate inventory management across the entire supply chain.",
        image: "../Assets/integration.webp" // Replace with actual image path
      },
      {
        title: "Integration Capabilities",
        body: "Purvey OMS seamlessly integrates with your existing systems, such as CRM and ERP, for smooth data synchronization. This integration eliminates manual data entry and ensures consistency across platforms. Gain a holistic view of your operations by connecting all relevant systems and improving collaboration between field teams and back-office functions.",
        image: "../Assets/integration.webp" // Replace with actual image path
      },
      {
        title: "Digital Documentation",
        body: "Simplify paperwork and documentation processes with Purvey OMS's digital capabilities. Your field representatives can capture electronic signatures, take photos, and attach documents directly within the app. This ensures accurate and organized record-keeping, reducing administrative errors and saving valuable time.",
        image: "../Assets/integration.webp" // Replace with actual image path
      },
      {
        title: "Scalability and Flexibility",
        body: "Purvey Field is designed to scale with your business needs. Whether you have a small field team or a large fleet of representatives, our software can adapt to accommodate your workforce size and growing order volumes. Scale up or down effortlessly and continue to streamline your field operations as your business expands.",
        image: "../Assets/integration.webp" // Replace with actual image path
      },
    ];
  
    const images = [
      {
        default: '../Assets/eco.jpg',
        hover: '../Assets/work2.webp',
      },
      {
        default: '../Assets/eco.jpg',
        hover: '../Assets/work3.jpg',
      },
      {
        default: '../Assets/eco.jpg',
        hover: '../Assets/work4.jpg',
      },
      {
        default: '../Assets/eco.jpg',
        hover: '../Assets/work4.jpg',
      },
      {
        default: '../Assets/eco.jpg',
        hover: '../Assets/work4.jpg',
      },
      {
        default: '../Assets/eco.jpg',
        hover: '../Assets/work4.jpg',
      },
    ];
  
    const handleShow = (index) => {
      setModalContent(cardContents[index]);
      setShowModal(true);
    };
  
  
  
  
  return (
    <div>

<div style={{height:"90vh"}}>
 <div className='aporafulfillment-starting'>
    <h1 className="gradient-text">Warehouse Management System <br /></h1>
    {/* <h3 className="gradient-text">Solution</h3> */}

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={purvey_apora_black} alt="" style={{height:"80px"}}/></h6>
    </div>
    </div>

<div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
{/* <Nav variant="tabs" onSelect={handleSelect} >
      <Nav.Item>
        <Nav.Link
           eventKey="link-21"
           style={{
             padding: "14px",
             color: activeTab === 'link-21' ? "black" : "green",
             fontWeight: activeTab === 'link-21' ? "bold" : "normal"
           }}
       onClick={handleMultichannelintegration}
        >
          Multi-Channel Integration
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-2"
          style={{
            padding: "14px",
            color: activeTab === 'link-2' ? "black" : "green",
            fontWeight: activeTab === 'link-2' ? "bold" : "normal"
          }}
          onClick={handleOrderprocessing}
        >
          Order Processing
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/homes"
          style={{
            padding: "14px",
            color: activeTab === '/homes' ? "black" : "green",
            fontWeight: activeTab === '/homes' ? "bold" : "normal"
          }}
          eventKey="/homes"
        >
          Pick List Generation
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-3"
          style={{
            padding: "14px",
            color: activeTab === 'link-3' ? "black" : "green",
            fontWeight: activeTab === 'link-3' ? "bold" : "normal"
          }}
        >
          WorkForce Management
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/homex"
          style={{
            padding: "14px",
            color: activeTab === '/homex' ? "black" : "green",
            fontWeight: activeTab === '/homex' ? "bold" : "normal"
          }}
          eventKey="/homex"
        >
          Pick Sequencing
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-4"
          style={{
            padding: "14px",
            color: activeTab === 'link-4' ? "black" : "green",
            fontWeight: activeTab === 'link-4' ? "bold" : "normal"
          }}
        >
          Pick & Shipping
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/homec"
          style={{
            padding: "14px",
            color: activeTab === '/homec' ? "black" : "green",
            fontWeight: activeTab === '/homec' ? "bold" : "normal"
          }}
          eventKey="/homec"
        >
          Fulfillment Validation
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey="link-5"
          style={{
            padding: "14px",
            color: activeTab === 'link-5' ? "black" : "green",
            fontWeight: activeTab === 'link-5' ? "bold" : "normal"
          }}
        >
          E-Commerce Integration
        </Nav.Link>
      </Nav.Item>
    </Nav> */}

<div style={{height:"0vh"}} className='mt-5'>
<Chart2/>
 </div>
</div>




<div className='firstdiv-multichannelintegration' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
      
        <p style={{padding:"40px"}}>
          
        <h4 style={{fontFamily:"Good times",lineHeight:"2.2rem"}}>Purvey Warehouse  Management System</h4>


          <p style={{textAlign:"justify"}}>Our WMS is designed to provide a comprehensive solution for all your warehouse management needs. Whether you operate a small-scale facility or a large distribution centre, our scalable and flexible software can be tailored to meet your specific requirements. With Purvey WMS, you can streamline your operations, reduce errors, and enhance productivity, ultimately driving your business towards greater profitability.</p></p>
    </div>
   </div>




    <div style={{height:"50vh"}}>


    <div className='d-flex justify-content-center mt-3'>
        <h2 className='gradient-text-APORA'> Features </h2>
    </div>


    
    <Container className='modal-popup-aporafulfillment mt-3'>
      <Row className="justify-content-center">
        {cardContents.map((content, index) => (
          <Col lg={3} className="d-flex justify-content-center" key={index}>
            <Card style={{ width: '18rem' }} className="card mt-3" onClick={() => handleShow(index)}>
              <Card.Img
                variant="top"
                src={images[index].default}
                onMouseEnter={(e) => {
                  e.currentTarget.src = images[index].hover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.src = images[index].default;
                }}
              />
              <Card.Body>
                <Card.Text>{content.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

     
    </Container>
    </div>
 </div>




       



        <div className='valuedelivered-section-aporafulfillment mt-5'>
  <div className='value-del-aporafulfillment '>
    <h1 style={{fontSize:"30px",marginTop:"830px"}} >Value Delivered</h1>
    </div>
    <Container>
  <Row>
    <Col lg={6} className="text-start">
      <div><FontAwesomeIcon icon={faCube} /> Increased efficiency and streamlined order management processes.</div>
      <div><FontAwesomeIcon icon={faCube} /> Enhanced productivity through route optimization and minimized travel time.</div>
      <div><FontAwesomeIcon icon={faCube} /> Improved order accuracy and reduced errors with digital order management.</div>
      <div><FontAwesomeIcon icon={faCube} /> Real-time visibility into order status for proactive issue resolution.</div>
      <div><FontAwesomeIcon icon={faCube} /> Enhanced customer service through real-time order updates and delivery tracking.</div>
    </Col>
    <Col lg={6} className="text-start">
      <div><FontAwesomeIcon icon={faCube} /> Efficient inventory management with real-time visibility into stock levels.</div>
      <div><FontAwesomeIcon icon={faCube} /> Seamless integration with existing systems for data synchronization.</div>
      <div><FontAwesomeIcon icon={faCube} /> Data-driven insights and analytics for informed decision-making.</div>
      <div><FontAwesomeIcon icon={faCube} /> Cost savings by minimizing manual errors, unnecessary travel, and stockouts.</div>
      <div><FontAwesomeIcon icon={faCube} /> Scalability and flexibility to accommodate growing business needs.</div>
    </Col>
  </Row>
</Container>

  </div>







  <Modal
      size="lg"
      className='modal-background-aporafulfil'
      show={showModal}
      onHide={() => setShowModal(false)}
      aria-labelledby="example-modal-sizes-title-lg"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalContent.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: 0, position: 'relative' }}>
        <img 
          src={modalContent.image} 
          alt="" 
          style={{ 
            width: "100%", 
            height: "50vh", 
            display: "block", 
            border: "5px solid #fff", // Add a white border
            borderRadius: "8px", // Optional: for rounded corners
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)", // Optional: adds depth
          }} 
        />
        <div>
          <p className="modal-content-text text-white">{modalContent.body}</p>
        </div>
      </Modal.Body>
    </Modal>
  
    </div>
  )
}

export default Purveyordermanagementsystem