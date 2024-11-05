import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Chart from './Chart'
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
import { useEffect } from 'react';
import AOS from 'aos'; // Import AOS library
import Footer from '../components/Footer';

const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function Picklistgeneration() {

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
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration
        once: true, // Whether animation should happen only once - while scrolling down
    });
}, []);

const handleApora=()=>{
  navigate('/aporafulfillmentautomation')
}
// ==================================================================
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="center-center">
 <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    {/* <h1 className="gradient-text">AI-Powered Picklist Generation<br /></h1> */}
    <h3 className="gradient-text">The Future of Order Fulfillment Powered by ai
   </h3>

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
      <h6 class="level-2 rectangle bg-success text-white" onClick={handlePicklistgeneration}>Pick List Generation</h6>
     
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




 <div className='firstdiv-multichannelintegration'>
    <div className='multichannelintegration-image wrapper'>
        <img src={orderprocessing} alt=""  className='image--cover'/>
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>With Order fulfilment, businesses face the challenge of optimizing their operations to meet customer demands efficiently and accurately. Manual processes for generating picklists can be time-consuming and prone to errors. With the advent of our AI-powered picklist generation, organizations can revolutionize their order fulfilment processes. <br /> <br /> Our AI powered picklist generation uses artificial intelligence to analyse a variety of data points, such as product location, inventory levels, and order priority. This data is then used to generate a picklist that is optimized for efficiency and accuracy.</p>    </div>
   </div>





  


    <div className='seconddiv-orderprocessing' data-aos="fade-up">
    <h1>Features</h1>
</div>
<Container fluid className='seconddiv-orderprocessing-container' data-aos="fade-up" >
 
<div className='valuedelivered-maindiv-orderprocessing'>
  <div className='valuedelivered-firstdiv-orderprocessing'>
    <img src={improveresouceutilisation} alt="" />
    {/* <h6>Accuracy and Efficiency</h6> */}
    <p><b>Accuracy and Efficiency</b> are enhanced through AI-powered order synchronization, which utilizes advanced algorithms to analyze order similarities and item proximities within the warehouse. By identifying patterns, the system synchronizes multiple orders with common items, reducing the number of picklists and enabling warehouse staff to fulfill orders more efficiently.</p>
  </div>
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src={efficiency} alt="efficiencyimage" />
    {/* <h6>Intelligent Order Analysis</h6> */}
    <p><b>Intelligent Order Analysis</b> is at the core of the AI-powered picklist generation system, which examines order data, including details, priority, and delivery deadlines. Utilizing machine learning algorithms, it understands order patterns, identifies common item combinations, and optimizes the sequencing of picks. This analysis ensures that picklists are generated with the utmost efficiency and accuracy.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src={improvedorderaccuracy} alt="improvedorderaccuracy" />
    {/* <h6>Warehouse Layout Optimization</h6> */}
    <p><b>Warehouse Layout Optimization </b>is crucial for effective order fulfillment, as it takes into account the physical arrangement of aisles, shelves, and storage locations. By understanding the proximity of items and their popularity, the system generates picklists that minimize travel time for warehouse staff, ensuring that orders are fulfilled quickly and efficiently.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src={improvedorderaccuracy} alt="" />
    <h6>Integration with Warehouse Management Systems:</h6>
    <p>The AI-powered picklist generation system seamlessly integrates with existing warehouse management systems, providing a cohesive workflow. The system can receive and process order data, generate optimized picklists, and update the status of picks in real-time. This integration eliminates manual data entry and ensures that the picklist generation process is streamlined.</p>
  </div>
</div>
   
</Container>


<div className='container mt-5' data-aos="fade-up"   >
      <div className='d-flex justify-content-center'>
        <h2  style={{marginTop:"100px",fontSize:"30px"}}>Value Delivered</h2>
      </div>
      <div className='row justify-content-center '>
        {/* Card 1 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Enhanced Efficiency</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Order Analysis' />
            </div>
            <div className='bio-orderprocessing'>
              <p style={{color:"black",fontSize:"14px"}}>AI-powered picklist generation automates the process of creating optimized picklists. By analysing order data, inventory levels, and other relevant factors, the system intelligently generates multiple orders synchronised picklists. This automation eliminates the time-consuming task of manually sorting through orders and increases the efficiency of order fulfilment.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Optimal Resource Utilization</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Inventory Management' />
            </div>
            <div className='bio-orderprocessing'>
              <p style={{color:"black",fontSize:"14px"}}>Efficient resource allocation is crucial for streamlining order fulfilment. AI-powered picklist generation takes into account factors such as warehouse layout and staff availability to optimize the allocation of resources.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='col-md-4 col-sm-12 mb-4 '>
          <div className='card-orderprocessing' style={{background:"white"}}>
            <h5 style={{color:"white",background:"#303097"}}>Improved Accuracy</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Real-Time Analytics' />
            </div>
            <div className='bio-orderprocessing'>
              <p style={{color:"black",fontSize:"14px"}}>Human errors in generating picklists can lead to mispicks, delays, and customer dissatisfaction. AI-powered picklist generation minimizes the risk of errors by using advanced algorithms to analyse order details and guide pick process with Barcode/ QR code/ RFID systems to ensure order accuracy and customer satisfaction.</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>





<div className='resp-footer'>
<Footer/>
</div>

    </div>
  )
}

export default Picklistgeneration