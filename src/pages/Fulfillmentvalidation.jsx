import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Chart  from './Chart';

import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import multibanner from '../Assets/multibanner.png'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import orderprocessing from '../Assets/orderprocessing.svg'
import './Responsive.css'
import multichannelintegration from '../Assets/Multichannelintegration.svg'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function Fulfillmentvalidation() {

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







  const [activeTab, setActiveTab] = useState(''); // Set default active tab

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

const navigate=useNavigate()
const handleMultichannelintegration=()=>{
    navigate('/multichannelintegration')
}
const handleOrderProcessing=()=>{
    navigate('/orderprocessing')
}
const handlePicklistgeneration=()=>{
    navigate('/picklistgeneration')
}
const handleWorkforcemanagement=()=>{
    navigate('/workforcemanagement')
}
const handlePicksequencing=()=>{
    navigate('/picksequencing')
}
const handlePickandshipping=()=>{
    navigate('/pickandshipping')
}
const handleFulfillmentvalidation=()=>{
    navigate('/fulfillmentvalidation')
}
const handleEcommerceintegration=()=>{
    navigate('/ecommerceintegration')
}
const handleApora=()=>{
  navigate('/aporafulfillmentautomation')
}
// ==================================================================
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-center">
 <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text"> 
    <br /></h1>
    <h3 className="gradient-text">Ensure Customer Satisfaction with Accuracy</h3>

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={aporablack} alt="" style={{height:"80px"}}/></h6>
    </div>
    </div>

   
    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart">
  <h1 class="level-1 rectangle "  onClick={handleApora}>APORA</h1>
  <ol class="level-2-wrapper">
    <li>
      <h6 class="level-2 rectangle " onClick={handleMultichannelintegration}>Multi-Channel Integration</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleOrderProcessing}> Order Processing</h6>
     
    </li>
      <li>
      <h6 class="level-2 rectangle" onClick={handlePicklistgeneration}>Pick List Generation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleWorkforcemanagement}>Work Force Management</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handlePicksequencing}>  Pick Sequencing</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handlePickandshipping}>Package & Shipping</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle bg-success text-white" onClick={handleFulfillmentvalidation}> Fulfillment Validation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleEcommerceintegration}>  E-Commerce Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
 </div>
 </div>




 <div className='firstdiv-multichannelintegration'>
    <div className='multichannelintegration-image wrapper'>
        <img src={orderprocessing} alt=""  className='image--cover'/>
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>Same day delivery is increasingly becoming normal expectation of customers. With capital scarcity Brick and mortar business are also keen to achieve just-in-time inventory efficiency. In the bustling world of warehouse operations, streamlining processes to maximize efficiency is a top priority. Traditional order picking methods often result in a large number of picklists, leading to increased complexity and reduced productivity. However, with the power of AI-powered order synchronization, organizations can revolutionize their warehouse operations. <br /> <br /> Our AI-powered order synchronization, showcases how it optimizes efficiency and effectively reduces the number of picklists, which results in significant reduction of walk around time and increase same day deliveries.</p>    </div>
   </div>




   <div className="container mt-5 valuedelivered-workforcemanagement">
        <div className="d-flex justify-content-center">
          <h2 className="gradient-text">Features</h2>
        </div>
        <div className="row justify-content-center ">
          {/* Card 1 */}
          <div className="col-md-4 col-sm-12 mb-4">
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Intelligent Order Varification</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Order Analysis' />
            </div>
            <div className='bio-orderprocessing' >
              <p style={{color:"black",fontSize:"14px"}}>The AI-powered fulfilment validation system intelligently verifies order details, such as items ordered and quantities. The process in available throughout the order picking zone level packing and shipping stages. It compares this information with the actual picked items, ensuring accuracy and completeness. Any discrepancies or mismatches are flagged for review, enabling prompt resolution.</p>
            </div>
          </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 col-sm-12 mb-4">
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Automated Item Inspection

</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Order Analysis' />
            </div>
            <div className='bio-orderprocessing' >
              <p style={{color:"black",fontSize:"14 px"}}>The system automates the inspection process by leveraging Bar code/ QR code or RFID systems that keep track of item attributes and specifications at each stage of the warehouse activity. It verifies the quantity and packaging of each item, minimizing the risk of shipping damaged or incorrect products.</p>
            </div>
          </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 col-sm-12 mb-4">
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Packaging and Labelling Compailance</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Order Analysis' />
            </div>
            <div className='bio-orderprocessing' >
              <p style={{color:"black",fontSize:"14px"}}>AI-powered fulfilment validation automatically generates the packaging and labelling to meet the required standards. The system verifies that the items transferred to shipping boxes are in conformance with the related customer orders. It also confirms that the labels contain accurate customer information, shipping details, and other information.

</p>
            </div>
          </div>
          </div>
        </div>
      </div>



    <div className='seconddiv-orderprocessing'>
    <h1>Value Delivered</h1>
</div>
<Container fluid className='seconddiv-orderprocessing-container'>
 

    <div className='valuedelivered-maindiv-orderprocessing'>
  <div className='valuedelivered-firstdiv-orderprocessing'>
    <img src={improveresouceutilisation} alt="" />
    {/* <h6>Improved Resource Utilisation</h6> */}
    <p><b>Enhanced Accuracy</b> is achieved through AI-powered fulfillment validation, which leverages advanced algorithms to analyze order details and compare them against the actual picked items. By automating the validation process, the system minimizes the risk of human errors and discrepancies, ensuring that the correct items are included in each order and reducing the likelihood of incorrect or incomplete shipments.</p>
  </div>
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src={efficiency} alt="" />
    {/* <h6>Real Time Visibility</h6> */}
    <p><b>Improved Efficiency</b> is achieved through AI-powered fulfillment validation, which streamlines processes by automating various checks, including order verification, item validation, packaging, and labeling. Unlike manual fulfillment validation processes that involve extensive checks and inspections, this automation saves time, increases efficiency, and allows warehouse staff to focus on other critical tasks.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src={improvedorderaccuracy} alt="" />
    {/* <h6>Improved Order Accuracy</h6> */}
    <p><b>Real-time Error Detection</b> is a key feature of the AI-powered fulfillment validation system, which continuously analyzes data such as order details, item specifications, and packaging requirements. It detects errors or discrepancies in real-time and alerts warehouse staff, enabling them to quickly rectify issues before the order is shipped. This proactive approach minimizes delays, reduces the likelihood of customer complaints, and improves overall operational efficiency.</p>
  </div>
 
</div>
</Container>







<div className='resp-footer'>
  <Footer/>
</div>

    </div>
  )
}

export default Fulfillmentvalidation