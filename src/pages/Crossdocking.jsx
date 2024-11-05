import React from 'react'
import { Container } from 'react-bootstrap'
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import Chart2 from './Chart2'
import multichannelintegration from '../Assets/work3.jpg'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
// import scalabilityandflexibility from '../Assets/scalabilityandflexibility.svg'
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'

function Crossdocking() {
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
    <h1 className="gradient-text">Maximize Efficiency with Our Cross Docking Services
    <br /></h1>
    {/* <h3 className="gradient-text">Across All Touchpoints.</h3> */}

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
      <h6 class="level-22 rectangle2  bg-success text-white" onClick={handleCrossdocking}> Cross Docking</h6>
     
    </li>
      <li>
      <h6 class="level-22 rectangle2 me-2" onClick={handleDeconsolidation}>Deconsolidation</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleQualitycheck}>Quality Check</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleRepackingandputaway}>Repacking and Putaway</h6>
     
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



   {/* <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"20px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
          CROSS DOCKING</h4>In today's fast-paced business environment, efficient order fulfilment is critical to success. Customers expect their orders to be processed and delivered quickly and accurately, and businesses that cannot meet these expectations risk losing customers to competitors.
          One way to improve order fulfilment efficiency is to use a cross-docking system. Cross-docking is a process in which incoming goods are sorted and consolidated directly for outbound shipping, without being placed in long-term storage. This can significantly reduce order fulfilment cycle times and improve customer satisfaction.</p>
    </div>
   </div> */}
<div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image wrapper'>
        <img src={multichannelintegration} alt="" className='image--cover'/>
    </div>
    <div className='multichannelintegration-content'>
      <h2 >Cross Docking</h2>
        <p style={{textAlign:"justify",padding:"40px"}}>In today's fast-paced business environment, efficient order fulfilment is critical to success. Customers expect their orders to be processed and delivered quickly and accurately, and businesses that cannot meet these expectations risk losing customers to competitors.
        One way to improve order fulfilment efficiency is to use a cross-docking system. Cross-docking is a process in which incoming goods are sorted and consolidated directly for outbound shipping, without being placed in long-term storage. This can significantly reduce order fulfilment cycle times and improve customer satisfaction.</p>
    </div>
   </div>











<div className='seconddiv-multichannelintegration'>
    <h1>Features</h1>
</div>
<Container  className='seconddiv-orderprocessing-container'>
 

    <div className='valuedelivered-maindiv-orderprocessing' >

  <div className='valuedelivered-firstdiv-orderprocessing'>
    <img src={improveresouceutilisation} alt="" />
    {/* <h6>Enhanced Efficiency</h6> */}
    <p><b>Enhanced Efficiency</b> through AI-powered order synchronization leverages advanced algorithms to intelligently analyze order similarities and content item proximities within the warehouse. By identifying patterns, the system synchronizes multiple orders that share common items or are in close proximity. This synchronization reduces the number of picklists, enabling warehouse staff to complete orders more efficiently.</p>
  </div>
  <div className='valuedelivered-seconddiv-orderprocessing'>
    <img src={efficiency} alt="" />
    {/* <h6>Reduced Complexity</h6> */}
    <p><b>Reduced Complexity</b> in traditional order picking processes often leads to numerous picklists, requiring warehouse staff to walk around multiple times for each list. AI-powered order synchronization simplifies this by consolidating related orders into a single picklist, allowing staff to manage tasks more effectively and focus on efficient order fulfillment.</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src={improvedorderaccuracy} alt="" />
    {/* <h6>Increased Productivity</h6> */}
    <p><b>Increased Productivity</b> is achieved by reducing the number of picklists through AI-powered order synchronization. Warehouse staff spend less time managing and switching between lists, which allows for a more streamlined process. This efficiency enables employees to work faster, fulfill orders promptly, and effectively meet customer demands in the warehouse</p>
  </div>
  <div className='valuedelivered-thirddiv-orderprocessing'>
    <img src={improvedorderaccuracy} alt="" />
    {/* <h6>Improved Resource Utilization</h6> */}
    <p><b>Improved Resource Utilization</b> is achieved through AI-powered order synchronization, which considers the proximity of items within the warehouse. By synchronizing orders based on similar item locations, staff can navigate efficiently, minimizing travel time and maximizing the use of labor and equipment, ultimately leading to significant cost savings for the operation.</p>
  </div>
</div>
</Container>



<Container>
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p >"If you are looking for a way to improve your business's efficiency and profitability, a cross-docking system is a valuable tool that can help you achieve your goals."</p>
  </div>
</div>
</Container>



<div className='valuedelivered-section-aporafulfillment'>
  <div className='value-del-aporafulfillment'>
    <h1 style={{fontSize:"30px",marginTop:"50px"}}>Value Delivered</h1>
    </div>
<div class="container-crossdocking">
   
    <div  className='row-crossdocking'>
      
        <div className="service-crossdocking rainbow-crossdocking">
          
            <h2 class="service_heading-crossdocking">Reduced Inventory Cost</h2>
            <p class="service_para-crossdocking">
            Cross-docking eliminates the need for long-term storage, which can help businesses reduce inventory costs.  </p>
           
        </div>
        <div className="service-crossdocking rainbow-crossdocking">
           
            <h2 class="service_heading-crossdocking">Improved Cash Flow</h2>
            <p class="service_para-crossdocking">
            Cross-docking can help businesses improve cash flow by reducing the amount of time that goods are tied up in inventory.
            </p>
        </div>
        <div className="service-crossdocking rainbow-crossdocking">
           
            <h2 class="service_heading-crossdocking">Increased Customer Satisfaction</h2>
            <p class="service_para-crossdocking">
            With seamless integration and efficient communication, our WMS fosters stronger supplier relationships. Timely notifications, quick resolutions, and accurate information exchange enhance collaboration and trust.
            </p>
        </div>

</div>
</div>
  </div>



<Footer/>

    </div>
  )
}

export default Crossdocking