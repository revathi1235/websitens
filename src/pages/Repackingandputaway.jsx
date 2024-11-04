import React from 'react'
import { Container } from 'react-bootstrap'
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import Chart2 from './Chart2'
import multichannelintegration from '../Assets/work3.jpg'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import efficiency from '../Assets/Efficiency.svg'
import './commoncss.css'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import { useNavigate } from "react-router-dom";

function Repackingandputaway() {
  const navigate=useNavigate()
const handleInbountreceipt=()=>{
  navigate('/inbountreceipt')
}
const handleCrossdocking=()=>{
  navigate('/crossdocking')
}
const handleDeconsolidation=()=>{
  navigate('/purveydeconsolidation')
}
const handleQualitycheck=()=>{
  navigate('/qualitycheck')
}
const handleRepackingandputaway=()=>{
  navigate('/repackingandputaway')
}
const handlePickmanagement=()=>{
  navigate('/aporapickmanagement')
}
const handleDispatch=()=>{
  navigate('/dispatch')
}
const handleInventorymanagement=()=>{
navigate('/inventorymanagement')
}
const handleAPIintegration=()=>{
  navigate('/apiintegration')
}
const handleIotintegration=()=>{
  navigate('/iotintegration')
}
const handlePurveywms=()=>{
  navigate('/productwarehousemanagementsystem')
}
  return (
    <div>
      <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text">Efficient Repacking and Put-Away Solutions 

    <br /></h1>
    <h3 className="gradient-text">for Streamlined Operations</h3>

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={purvey_apora_black} alt="" style={{height:"80px"}}/></h6>
    </div>
    </div>

    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart2">
  <h1 class="level-12 rectangle "   onClick={handlePurveywms}>Purvey</h1>
  <ol class="level-22-wrapper">
    <li>
      <h6 class="level-22 rectangle2" onClick={handleInbountreceipt}>Inbount Receipt</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleCrossdocking}> Cross Docking</h6>
     
    </li>
      <li>
      <h6 class="level-22 rectangle2 me-2" onClick={handleDeconsolidation}>Deconsolidation</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleQualitycheck}>Quality Check</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2  bg-success text-white" onClick={handleRepackingandputaway}>Repacking and Putaway</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handlePickmanagement}>Pick Management</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2 me-2" onClick={handleDispatch} >Dispatch</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleInventorymanagement}>  Inventory management</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleAPIintegration}>  Api Integration</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleIotintegration}>  IOT Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
 </div>

 </div>



   <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
        Repacking and Putaway
          </h4>
          Our cutting-edge PURVEY Warehouse Management System introduces a powerful Repacking & Put Away module designed to optimize your warehouse operations. With our advanced features and user-friendly interface, you can revolutionize your repacking and storage processes for enhanced efficiency and productivity.
          Our Repacking & Put Away module simplifies the repacking process by providing intuitive tools to manage and track repackaged items. Seamlessly break down or combine products, update packaging information, and maintain accurate inventory records. This ensures precision in order fulfilment and inventory management.            </p></div>
   </div>












<div className='seconddiv-multichannelintegration'>
    <h1>Features</h1>
</div>
<Container fluid>
 

    <div className='valuedelivered-maindiv-repackingandputaway'>
  <div className='valuedelivered-firstdiv-repackingandputaway'>
    <img src={improveresouceutilisation} alt="" />
    <h6>Streamlining Operations and Maximizing Storage Capacity</h6>
    <p >Say goodbye to wasted storage space and cumbersome searching. Our WMS software's Repacking & Put Away module utilizes intelligent algorithms to allocate the optimal storage location for repacked items. This maximizes your warehouse's storage capacity and minimizes retrieval times, streamlining your operations.</p>
  </div>
  <div className='valuedelivered-seconddiv-repackingandputaway'>
    <img src={efficiency} alt="" />
    <h6>Organized Storage & Tracking Efficiency </h6>
    <p>Take control of your storage areas with our comprehensive location management capabilities. Define and manage location hierarchies, assign specific storage areas for repacked items, and easily track the availability and capacity of each location. No more time wasted on searching for misplaced items.

</p>
  </div>
  <div className='valuedelivered-thirddiv-repackingandputaway'>
    <img src={improvedorderaccuracy} alt="" />
    <h6>Intelligent Put-Away Strategies </h6>
    <p>Our software offers a range of intelligent put-away strategies customized to your unique needs. Whether you prefer random put-away, zone-based storage, or dynamic slotting, our module seamlessly implements these strategies. Improve your operational efficiency by leveraging the optimal method for your warehouse.</p>
  </div>
  <div className='valuedelivered-firstdiv-repackingandputaway'>
    <img src={improveresouceutilisation} alt="" />
    <h6>Comprehensive Tasks Assignment</h6>
    <p >Empower your warehouse operators with clear instructions through our task assignment feature. Our Repacking & Put Away module generates comprehensive tasks displayed on handheld devices or management terminals. These tasks outline the repacked items to be stored and their designated locations, ensuring accuracy and productivity.</p>
  </div>
</div>

<br />

</Container>



<Container >
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p style={{fontFamily:"normal"}}>"Transform your warehouse into a well-oiled machine with our state-of-the-art Repacking & Put Away module. Experience the benefits of optimized storage space, efficient repacking processes, and increased operational productivity."</p>
  </div>
</div>
</Container>



<div className='valuedelivered-section-aporafulfillment'> 
  <div className='value-del-aporafulfillment'>
    <h1 style={{fontSize:"30px",marginTop:"50px"}}>Value Delivered</h1>
    </div>
<div class="container-repackingandputaway">
   
    <div  className='row-repackingandputaway'>
      
        <div className="service-repackingandputaway rainbow-repackingandputaway">
          
            <h2 class="service_heading-repackingandputaway">Optimized storage Space</h2>
            <p class="service_para-repackingandputaway">
            The Repacking & Put Away module helps you maximize your warehouse's storage capacity by efficiently repacking items and utilizing available space more effectively. With intelligent algorithms and storage allocation strategies, you can avoid wasted space and ensure optimal utilization of every inch of your warehouse.
</p>           
        </div>
        <div className="service-repackingandputaway rainbow-repackingandputaway">
           
            <h2 class="service_heading-repackingandputaway">Improved Inventory Accuracy</h2>
            <p class="service_para-repackingandputaway">
            By accurately repacking items and updating packaging information within the WMS software, you can maintain precise inventory records. This reduces the risk of discrepancies, improves inventory accuracy, and enables seamless order fulfilment. Real-time updates ensure that your inventory information remains up to date at all times.
            </p>
        </div>
        <div className="service-repackingandputaway rainbow-repackingandputaway">
           
            <h2 class="service_heading-repackingandputaway">Enhanced Operational Efficiency</h2>
            <p class="service_para-repackingandputaway">
            The module streamlines the repacking and put-away processes, reducing manual effort and minimizing errors. With clear instructions and tasks assigned to warehouse operators, you can achieve faster and more accurate handling of repacked items. This results in increased operational efficiency and overall productivity.


            </p>
        </div>
       
        

</div>
</div>
<div class="container-repackingandputaway mt-5">
   
    <div  className='row-repackingandputaway'>
      
        <div className="service-repackingandputaway rainbow-repackingandputaway">
          
            <h2 class="service_heading-repackingandputaway">Faster Order Fulfillment</h2>
            <p class="service_para-repackingandputaway">
            With optimized storage allocation and streamlined processes, locating and retrieving repacked items becomes quicker and easier. Warehouse operators can efficiently access the right items in designated locations, enabling faster order fulfilment and ensuring customer satisfaction with prompt deliveries.       </p>
           
        </div>
        <div className="service-repackingandputaway rainbow-repackingandputaway">
           
            <h2 class="service_heading-repackingandputaway">Increased Flexibility</h2>
            <p class="service_para-repackingandputaway">
            Repacking & Put Away in WMS provides the flexibility to break down or combine products as needed, allowing you to adapt to changing customer demands and market trends. This flexibility enables you to efficiently manage product variations, bundle products for promotions, or customize orders based on customer preferences.
            </p>
        </div>
      
       
        

</div>
</div>
  </div>


    </div>
  )
}

export default Repackingandputaway