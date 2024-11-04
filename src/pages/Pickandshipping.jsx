import React from 'react'
import royalbluebg from '../Assets/royalbluebg.jpg'
import aporablack from '../Assets/apora_black.png'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import multibanner from '../Assets/multibanner.png'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import ListGroup from 'react-bootstrap/ListGroup';
import Chart  from './Chart';

import { Container,Row,Col,Modal,Button } from 'react-bootstrap';
import { useState } from 'react';
import orderprocessing from '../Assets/orderprocessing.svg'
import './Responsive.css'
import multichannelintegration from '../Assets/Multichannelintegration.svg'
import { useNavigate } from 'react-router-dom';
const items = [
  { id: 1, title: 'The Leading AI-Powered Fulfilment Automation System', imgSrc: '../Assets/cuttingedge.webp', description: 'Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.' },
  { id: 2, title: 'Hybrid Proprietary Methodology, Opti-Pick', imgSrc: 'image2.jpg', description: 'Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.' },
  { id: 3, title: 'Unlocking Fulfilment Automation Potential', imgSrc: 'image3.jpg', description: 'Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.' },
];

function Pickandshipping    () {

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
    <h1 className="gradient-text">AI  Driven Pick Consolidation & Packing
    <br /></h1>
    {/* <h3 className="gradient-text">Shipping Solutions</h3> */}

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
      <h6 class="level-2 rectangle bg-success text-white" onClick={handlePickandshipping}>Package & Shipping</h6>
     
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
        <p style={{textAlign:"justify",padding:"40px"}}>AI-powered package optimization is an essential solution for organizations striving to enhance efficiency, reduce costs, and improve customer satisfaction. With sustainability being the keyword around the globe, fulfilment processes need additional focus on ensuring the sustainability goals are met. Sustainability is also increasingly becoming a key decision factor based on which customers decide to do business with organizations. <br /> <br />By leveraging the power of artificial intelligence, businesses can optimize packaging configurations, minimize material wastage, and achieve cost savings.
        With intelligent packaging algorithms, real-time recommendations, and integration with warehouse management systems, organizations can streamline their packaging operations and deliver orders in an efficient and sustainable manner.</p>    </div>
   </div>





   <div className='container mt-5'>
      <div className='d-flex justify-content-center'>
        <h2 className='gradient-text'>Features</h2>
      </div>
      <div className='row justify-content-center '>
        {/* Card 1 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"green"}}>
            <h5 style={{color:"white",background:"blue"}}>Order Package <br />Tracking</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Order Analysis' />
            </div>
            <div className='bio-pickandshipping'>
              <p>Within the realm of zone-based picking processes, a practice requires the creation of multiple packages for a single order. The system diligently identifies each of these packages that are destined to arrive at the packing station, taking into account all items contained within the orders. By meticulously considering the composition of these packages, the system accurately determines the total volume of items that collectively form the entirety of the order.</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"green"}}>
            <h5 style={{color:"white",background:"blue"}}>Intelligent Packaging Sizing Algorithms</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Inventory Management' />
            </div>
            <div className='bio-pickandshipping'>
              <p>The AI-powered package optimization system utilizes advanced algorithms to analyse order dimensions and packaging constraints. By considering these factors, the system generates optimized packaging solutions that maximize space utilization and minimize material wastage. This intelligent approach results in efficient packaging configurations.</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className='col-md-4 col-sm-12 mb-4'>
          <div className='card-orderprocessing' style={{background:"green"}}>
            <h5 style={{color:"white",background:"blue"}}>Real Time Packaging Recommendations</h5>
            <div className='image-crop-orderprocessing'>
              <img className='avatar-orderprocessing' src='../Assets/work2.webp' alt='Real-Time Analytics' />
            </div>
            <div className='bio-pickandshipping'>
              <p>The system provides real-time recommendations to warehouse staff on the most suitable packaging options for each order. It considers variables such as fragility, weight, and compatibility to ensure that items are packaged securely and efficiently. These recommendations guide warehouse staff in making informed packaging decisions.</p>
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
    {/* <h6>Enhanced Eficiency</h6> */}
    <p><b>Enhanced efficiency</b> is achieved through AI-powered package optimization, which automates the determination of the most suitable packaging options for orders. By analyzing order dimensions, weights, and other relevant factors, the system intelligently selects the optimal packaging size and arrangement. This automation streamlines the packaging process, reduces wasted space, and improves overall operational efficiency.</p>
  </div>
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src={efficiency} alt="" />
    {/* <h6>Cost Savings</h6> */}
    <p><b>Cost Savings</b> are achieved through AI-powered package optimization, which addresses inefficient packaging practices that lead to unnecessary material usage and increased shipping costs. By precisely calculating the dimensions and weight requirements for each order, the system minimizes waste. Optimizing packaging size enables businesses to reduce excessive material use and potentially lower shipping expenses.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src={improvedorderaccuracy} alt="" />
    {/* <h6>Improved Sustainability</h6> */}
    <p><b>Improved Sustainability</b> is a significant benefit of AI-powered package optimization, as businesses increasingly seek ways to reduce their carbon footprint. This technology plays a vital role by minimizing material waste and optimizing the use of packaging resources. By adopting sustainable packaging practices, organizations can enhance their brand image and contribute to a greener future.</p>
  </div>

</div>
</Container>









    </div>
  )
}

export default Pickandshipping