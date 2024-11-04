import React from "react";
import aporablack from "../Assets/apora_black.png";
import Nav from "react-bootstrap/Nav";
import efficiency from "../Assets/Efficiency.svg";
import improvedorderaccuracy from "../Assets/improvedorderaccuracy.svg";
import improveresouceutilisation from "../Assets/Improveresourceutilisation.svg";
import { Container } from "react-bootstrap";
import { useState } from "react";
import orderprocessing from "../Assets/orderprocessing.svg";
import Chart from "./Chart";
import "./Responsive.css";
import { useNavigate } from "react-router-dom";
const items = [
  {
    id: 1,
    title: "The Leading AI-Powered Fulfilment Automation System",
    imgSrc: "../Assets/cuttingedge.webp",
    description:
      "Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.",
  },
  {
    id: 2,
    title: "Hybrid Proprietary Methodology, Opti-Pick",
    imgSrc: "image2.jpg",
    description:
      "Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business.",
  },
  {
    id: 3,
    title: "Unlocking Fulfilment Automation Potential",
    imgSrc: "image3.jpg",
    description:
      "Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.",
  },
];

function Workforcemanagement() {
  const [selectedItem, setSelectedItem] = useState(items[0]); // Default to the first item

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    body: "",
    image: "",
  });

  const cardContents = [
    {
      title: "The Leading AI-Powered Fulfilment Automation System",
      body: "Welcome to APORA, the AI-powered fulfilment automation system that optimizes operating costs and boosts efficiency exponentially. Our cutting-edge technology enables you to enjoy the benefits of reduced operational expenses and increased productivity, thanks to the exponential growth in efficiency. Say goodbye to order backlogs and experience a significant improvement in same-day deliveries.",
      image: "../Assets/work3.jpg", // Update as needed for each card
    },
    {
      title: "Hybrid Proprietary Methodology, Opti-Pick",
      body: "Unlike other fulfilment automation systems, APORA is not limited to e-commerce or B2B operations. We have developed a series of AI algorithms that implement our hybrid proprietary methodology, Opti-Pick. This ground-breaking approach has the potential to revolutionize Distribution Center activities, resulting in improved speed, efficiency, and ultimately generating more revenue for your business..",
      image: "../Assets/work4.jpg", // Replace with actual image path
    },
    {
      title: "Unlocking Fulfilment Automation Potential",
      body: "Embrace the future of fulfillment automation with APORA and unlock the true potential of your operations. Streamline your processes, maximize profitability, and deliver exceptional customer experiences with our state-of-the-art technology. With APORA, you can benefit from complete visibility and traceability of multiple packs that are associated with an order. Additionally, our advanced system enables order product and quantity-based carton size estimation and notification, allowing you to optimize packaging and shipping processes for increased efficiency. Contact us today to learn more about how APORA can transform your business.",
      image: "../Assets/integration.webp", // Replace with actual image path
    },
  ];

  const images = [
    {
      default: "../Assets/eco.jpg",
      hover: "../Assets/work2.webp",
    },
    {
      default: "../Assets/eco.jpg",
      hover: "../Assets/work3.jpg",
    },
    {
      default: "../Assets/eco.jpg",
      hover: "../Assets/work4.jpg",
    },
  ];

  const handleShow = (index) => {
    setModalContent(cardContents[index]);
    setShowModal(true);
  };

  const [activeTab, setActiveTab] = useState(""); // Set default active tab

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };
  const navigate = useNavigate();
  const handleMultichannelintegration = () => {
    navigate("/multichannelintegration");
  };
  const handleOrderProcessing = () => {
    navigate("/orderprocessing");
  };
  const handlePicklistgeneration = () => {
    navigate("/picklistgeneration");
  };
  const handleWorkforcemanagement = () => {
    navigate("/workforcemanagement");
  };
  const handlePicksequencing = () => {
    navigate("/picksequencing");
  };
  const handlePickandshipping = () => {
    navigate("/pickandshipping");
  };
  const handleFulfillmentvalidation = () => {
    navigate("/fulfillmentvalidation");
  };
  const handleEcommerceintegration = () => {
    navigate("/ecommerceintegration");
  };
  const handleApora=()=>{
    navigate('/aporafulfillmentautomation')
  }

  // ==================================================================
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="center-center">
      <div style={{ height: "40vh" }}>
        <div className="starting-picklistgeneration">
          <h1 className="gradient-text">
            Automated Task Allocation and Work Load Balancing
            <br />
          </h1>
          {/* <h3 className="gradient-text">Customer Satisfaction</h3>   */}

          <div className="aboutpage-subtitle">
            <h6 className="gradient-text-h6">
              <img src={aporablack} alt="" style={{ height: "80px" }} />
            </h6>
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
      <h6 class="level-2 rectangle bg-success text-white" onClick={handleWorkforcemanagement}>Work Force Management</h6>
     
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

      <div className="firstdiv-multichannelintegration">
        <div className="multichannelintegration-image wrapper">
          <img src={orderprocessing} alt="" className="image--cover" />
        </div>
        <div className="multichannelintegration-content">
          <p style={{ textAlign: "justify", padding: "40px" }}>
            Same day delivery is increasingly becoming normal expectation of
            customers. With capital scarcity Brick and mortar business are also
            keen to achieve just-in-time inventory efficiency. In the bustling
            world of warehouse operations, streamlining processes to maximize
            efficiency is a top priority. Traditional order picking methods
            often result in a large number of picklists, leading to increased
            complexity and reduced productivity. However, with the power of
            AI-powered order synchronization, organizations can revolutionize
            their warehouse operations. <br /> <br /> Our AI-powered order
            synchronization, showcases how it optimizes efficiency and
            effectively reduces the number of picklists, which results in
            significant reduction of walk around time and increase same day
            deliveries.
          </p>{" "}
        </div>
      </div>

      <div className="seconddiv-workforcemanagement">
        <h1>Features</h1>
      </div>
      <Container fluid className="seconddiv-workforcemanagement-container">
        <div className="valuedelivered-maindiv-workforcemanagement">
          <div className="valuedelivered-firstdiv-workforcemanagement">
            <img src={improveresouceutilisation} alt="" />
            {/* <h6>Intelligent Task Allocation</h6> */}
            <p>
           <b> Intelligent Task Allocation</b> is achieved through the AI-powered workforce optimization system, which assigns picking tasks based on factors like employee availability, location, and workload. By considering individual capabilities and workload distribution, the system ensures tasks are optimally allocated, resulting in efficient, balanced workloads across the workforce.
            </p>
          </div>
          <div className="valuedelivered-seconddiv-workforcemanagement">
            <img src={efficiency} alt="" />
            {/* <h6>Real Time Performance Monitoring</h6> */}
            <p>
             <b>Real Time Performance Monitoring</b> drive AI-powered workforce optimization by analyzing and identifying storage patterns, enabling effective resource assignment in key areas of the warehouse to enhance picking efficiency.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-workforcemanagement">
            <img src={improvedorderaccuracy} alt="" />
            {/* <h6>Machine Learning Algorithms</h6> */}
            <p> <b>Machine Learning Algorithms</b>
              AI-powered workforce optimization utilizes machine learning
              algorithms to analyse and identify storage patterns and
              effectively assign resources in required areas of warehouse to
              bring efficiency in picking processes.
            </p>
          </div>
          <div className="valuedelivered-thirddiv-workforcemanagement">
            <img src={improvedorderaccuracy} alt="" />
            <h6></h6>
            <p> <b>Multiple Order Synchronisation</b> greatly helps maintain a lean resource pool while enhancing efficiency by optimizing walk-around time for warehouse staff.
              
            </p>
          </div>
        </div>
      </Container>

      <div className="container mt-5 valuedelivered-workforcemanagement">
        <div className="d-flex justify-content-center">
          <h2 className="gradient-text">Value Delivered</h2>
        </div>
        <div className="row justify-content-center ">
          {/* Card 1 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div
              className="card-workforcemanagement"
              style={{ background: "white" }}
            >
              <h5 style={{color:"white",background:"#303097"}}>
                Enhanced Efficiency
              </h5>
              <div className="image-crop-workforcemanagement">
                <img
                  className="avatar-workforcemanagement"
                  src="../Assets/work2.webp"
                  alt="Order Analysis"
                />
              </div>
              <div className="bio-workforcemanagement">
                <p style={{color:"black"}}>
                  AI-powered workforce optimization leverages advanced
                  algorithms to intelligently allocate tasks and resources. By
                  analysing real-time data such as order volumes, item
                  locations, and employee performance, the system optimizes the
                  assignment of picking tasks to the workforce. This automation
                  streamlines the picking process, reduces travel time, and
                  increases overall efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div
              className="card-workforcemanagement"
              style={{ background: "white" }}
            >
              <h5 style={{color:"white",background:"#303097"}}>
                Improved Productivity
              </h5>
              <div className="image-crop-workforcemanagement">
                <img
                  className="avatar-workforcemanagement"
                  src="../Assets/work2.webp"
                  alt="Inventory Management"
                />
              </div>
              <div className="bio-workforcemanagement">
                <p style={{color:"black"}}>
                  With AI-powered workforce optimization, organizations can
                  unlock the full potential of their workforce. The system takes
                  into account employee skills, experience, and availability to
                  allocate tasks that align with individual strengths. By
                  matching the right employees with the right tasks,
                  productivity is maximized, and employees are empowered to
                  perform at their best.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4 col-sm-12 mb-4">
            <div
              className="card-workforcemanagement"
              style={{ background: "white" }}
            >
              <h5 style={{color:"white",background:"#303097"}}>
                Adaptive Planning
              </h5>
              <div className="image-crop-workforcemanagement">
                <img
                  className="avatar-workforcemanagement"
                  src="../Assets/work2.webp"
                  alt="Real-Time Analytics"
                />
              </div>
              <div className="bio-workforcemanagement">
                <p style={{color:"black"}}>
                  The dynamic nature of warehousing requires flexible planning
                  and resource allocation. AI-powered workforce optimization
                  adapts to changing circumstances by continuously analysing
                  data and adjusting workforce assignments accordingly. Whether
                  it's a sudden increase in order volumes or a change in order
                  priorities, the system optimizes workforce planning to meet
                  shifting demands effectively
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workforcemanagement;
