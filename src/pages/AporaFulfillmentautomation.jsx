import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function AporaFulfillmentautomation() {

  const [selectedItem, setSelectedItem] = useState(items[0]); // Default to the first item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };


  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', body: '', image: '' });

  const cardContents = [
    {
      title: "The Leading AI-Powered Fulfilment Automation System",
      body: "Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.",
      image: "../Assets/work3.jpg" // Update as needed for each card
    },
    {
      title: "Hybrid Proprietary Methodology, Opti-Pick",
      body: "Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business..",
      image: "../Assets/work4.jpg" // Replace with actual image path
    },
    {
      title: "Unlocking Fulfilment Automation Potential",
      body: "Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.",
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
  ];

  const handleShow = (index) => {
    setModalContent(cardContents[index]);
    setShowModal(true);
  };

// ==================================================================
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-center">
 <div style={{height:"90vh"}}>
 <div className='aboutpage-starting'>
    <h1 className="gradient-text">Bring In One Of Its Kind <br /></h1>
    <h3 className="gradient-text">Solution</h3>

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={aporablack} alt="" style={{height:"80px"}}/></h6>
    </div>
    </div>
    <div style={{height:"50vh"}}>


    <div className='d-flex justify-content-center mt-3'>
        <h2 className='gradient-text-APORA'> APORA</h2>
    </div>


    
    <Container>
      <Row className="justify-content-center">
        {cardContents.map((content, index) => (
          <Col lg={3} className="d-flex justify-content-center" key={index}>
            <Card style={{ width: '18rem' }} className="card" onClick={() => handleShow(index)}>
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

      {/* Modal Component */}
      <Modal
        size="lg"
        className='modal-background-aporafulfil'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: 0 }}>
          <img 
            src={modalContent.image} 
            alt="" 
            style={{ width: "100%", height: "50vh", display: "block" }} 
          />
          <br />
          <p className='text-white'>{modalContent.body}</p>
        </Modal.Body>
      </Modal>
    </Container>
    </div>
 </div>


    <div className='value-del-aporafulfillment'>
    <h1 >Value Delivered</h1>
    </div>
<div class="container-aporafulfill">
   
    <div  className='row-aporafulfill'>
      
        <div className="service rainbow">
          
            <h2 class="service_heading">Precision Picking, Swift Deliveries: AI Empowered for Excellence</h2>
            <p class="service_para">
            APORA's advanced management system enhances warehouse operations by automating fulfillment and streamlining workflows. With on-premises software, it minimizes errors and offers comprehensive tracking of each order, enabling you to optimize efficiency and exceed customer expectations.
            </p>
           
        </div>
        <div className="service rainbow">
           
            <h2 class="service_heading">IoT-Driven Validation: Redefining Returns, Standardizing Success</h2>
            <p class="service_para">
            Boost customer satisfaction and reduce sales returns with APORA's cloud-based management solution, featuring an IoT-enabled two-step validation process. This advanced software ensures consistent fulfillment, building trust and loyalty within your customer base.
            </p>
        </div>
        <div className="service rainbow">
           
            <h2 class="service_heading">Opti-Pick: Unlocking 200% Efficiency Surge, Normalizing Accomplishment</h2>
            <p class="service_para">
            APORA's Opti-Pick algorithm transforms warehouse operations by minimizing pickers' walk-around time. This on-premises software optimizes picking routes for efficient item retrieval, enhancing productivity and efficiency in e-commerce fulfillment through automation.
            </p>
        </div>
        <div className="service rainbow">
            <i class="fas fa-shipping-fast"></i>
            <h2 class="service_heading">SwiftShip: Turbocharging Same Day Deliveries by 100%</h2>
            <p class="service_para ">
            APORA's advanced AI algorithm optimizes every stage of the fulfillment process, significantly enhancing your warehouse operations. With this cloud-based management system, you can handle double the volume of orders and facilitate same-day deliveries. Automate your processes with APORA to meet the increasing demand for rapid deliveries and stay competitive in the market.
            </p>
        </div>

</div>
</div>


 
    </div>
  )
}

export default AporaFulfillmentautomation