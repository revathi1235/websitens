import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import { Helmet } from 'react-helmet';
import scalabilityandflexibility from '../Assets/scalabilityandflexibility.svg'
import Nav from 'react-bootstrap/Nav';
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import multibanner from '../Assets/multibanner.png'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import './Responsive.css'
import Chart from './Chart'
import multichannelintegration from '../Assets/Multichannelintegration.svg'
import { useNavigate } from 'react-router-dom';
const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function Multichannelintegration() {

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
    <>


      <Helmet>
        <title>Multi-Channel Integration | APORA Fulfilment Automation</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Description */}
        <meta name="description" content="Discover APORA's multi-channel integration solutions for fulfillment automation. Enhance efficiency, accuracy, and customer satisfaction across all sales channels." />

        {/* Keywords */}
        <meta name="keywords" content="APORA, fulfillment automation, multi-channel integration, order processing, efficiency, accuracy, resource utilization, e-commerce, inventory management" />

        {/* Author */}
        <meta name="author" content="Your Name or Company Name" />

        {/* Open Graph Tags for Social Media Sharing */}
        <meta property="og:title" content="Multi-Channel Integration | APORA Fulfilment Automation" />
        <meta property="og:description" content="Enhance your business operations with APORA's cutting-edge multi-channel integration for fulfillment automation." />
        <meta property="og:image" content="URL_to_your_image" /> {/* Replace with the actual image URL */}
        <meta property="og:url" content="URL_to_your_page" /> {/* Replace with the actual URL of the page */}
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Multi-Channel Integration | APORA Fulfilment Automation" />
        <meta name="twitter:description" content="Discover how APORA's multi-channel integration can transform your fulfillment processes." />
        <meta name="twitter:image" content="URL_to_your_image" /> {/* Replace with the actual image URL */}

        {/* Favicon */}
        <link rel="icon" href="path_to_your_favicon.ico" type="image/x-icon" /> {/* Replace with the actual path to your favicon */}
      </Helmet>








    <div data-aos="fade-up"
    data-aos-anchor-placement="center-center">
 <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text">Seamless Order Processing Across Channels.<br /></h1>
    {/* <h3 className="gradient-text">Across All Touchpoints.</h3> */}

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
      <h6 class="level-2 rectangle bg-success text-white" onClick={handleMultichannelintegration}>Multi-Channel Integration</h6>
     
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
      <h6 class="level-2 rectangle" onClick={handleFulfillmentvalidation}> Fulfillment Validation</h6>
     
    </li>
    <li>
      <h6 class="level-2 rectangle" onClick={handleEcommerceintegration}>  E-Commerce Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
 </div>

 </div>



   <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image wrapper'>
        <img src={multichannelintegration} alt="" className='image--cover'/>
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>In today's competitive retail environment, businesses need to be able to offer their customers a seamless shopping experience across multiple channels. This means being able to take orders and fulfil them from any channel, whether it's online, in-store, or over the phone.
        Multi-channel integration is the key to providing this seamless experience. It allows businesses to connect their various sales channels to a single fulfilment system. This ensures that inventory levels are always up-to-date and that orders can be picked and packed quickly and efficiently.</p>
    </div>
   </div>






<div className='seconddiv-multichannelintegration'>
    <h1>Efficiency And Accuracy</h1>
</div>
<div className='seconddiv-content-multichannelintegration'>
    <p>Perfect order fulfilment is crucial for maintaining a competitive edge. The key to success lies in implementing a robust multichannel integration in order fulfilment system, which streamlines operations and enhances customer satisfaction. The unique features of our system, demonstrates how it can revolutionize your order fulfilment process.
    The multichannel integration in our fulfilment management system is a game-changer for organizations aiming to enhance operational efficiency. By streamlining order fulfilment across multiple sales channels, you unlock new levels of accuracy, scalability, and flexibility. With real-time inventory visibility and centralized order management, you can meet customer demands effectively while optimizing your resources.</p>
</div>
 







<div className='seconddiv-multichannelintegration'>
    <h1>Value Delivered</h1>
</div>
<Container fluid>
 

    <div className='valuedelivered-maindiv-multiintegration'>
  <div className='valuedelivered-firstdiv-multiintegration'>
    <img src={improveresouceutilisation} alt="" />
    <h6>Improved Resource Utilisation</h6>
    <p>By integrating multiple channels into a unified pick management system, you can optimize your resources and reduce operational complexities.</p>
  </div>
  <div className='valuedelivered-seconddiv-multiintegration'>
    <img src={efficiency} alt="" />
    <h6>Real Time Visibility</h6>
    <p>While orders across channels are simultaneously processed, the system provides real time visibility of status of orders individually across all channels.</p>
  </div>
  <div className='valuedelivered-thirddiv-multiintegration'>
    <img src={improvedorderaccuracy} alt="" />
    <h6>Improved Order Accuracy</h6>
    <p>Our Bar code/ QR code/ RFID integrated system eliminate the risk of errors and inaccuracies in order fulfilment. The system automatically synchronizes order data from various channels, minimizing the chances of mismatched or duplicate orders.</p>
  </div>
  
</div>
<br />
<div className='valuedelivered-maindiv-multiintegration mt-5'>
  <div className='valuedelivered-fourthdiv-multiintegration'>
    <img src={scalabilityandflexibility} alt="" />
    <h6>Scalability & Flexibility</h6>
    <p>As your business grows and expands into new sales channels, a multi-channel pick management system can adapt to your evolving needs. It provides the scalability to handle increasing order volumes and the flexibility to incorporate additional channels seamlessly. Whether you sell through online marketplaces, brick-and-mortar stores, or social media platforms, the system can consolidate and manage all orders efficiently.</p>
  </div>
  <div className='valuedelivered-fifthdiv-multiintegration'>
    <img src={efficiency} alt="" />
    <h6>Increased Efficiency</h6>
    <p>The AI powered automation dynamically manages orders from different channels in one place. You can track order status, monitor assigned resources , their activity and monitor fulfilment progress, all from a single interface. This centralized approach simplifies order processing and minimizes the risk of errors or delays.</p>
  </div>
</div>
</Container>



<Container>
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p>"If you are looking for a way to improve your business's efficiency and profitability, a Multi - Channel Integration system is a valuable tool that can help you achieve your goals."</p>
  </div>
</div>
</Container>




    </div>
    </>
  )
}

export default Multichannelintegration