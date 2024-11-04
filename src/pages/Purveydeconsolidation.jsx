import React from 'react'
import { Container } from 'react-bootstrap'
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import Chart2 from './Chart2'
import multichannelintegration from '../Assets/work3.jpg'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import { useNavigate } from "react-router-dom";

function Purveydeconsolidation() {
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
    <h1 className="gradient-text">Maximize Efficiency with Expert Deconsolidation Solutions
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
      <h6 class="level-22 rectangle2" onClick={handleCrossdocking}> Cross Docking</h6>
     
    </li>
      <li>
      <h6 class="level-22 rectangle2 me-2  bg-success text-white" onClick={handleDeconsolidation}>Deconsolidation</h6>
     
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



   <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
          DECONSOLIDATION
          </h4>Purvey WMS's Deconsolidation Module, is an essential component of our advanced Warehouse Management System. Designed to streamline the process of breaking down consolidated shipments, our module enables efficient sorting, labelling, and allocation of individual items or smaller units. With Purvey WMS, you can optimize your deconsolidation operations, reduce processing time, and ensure accurate distribution to their respective destinations or storage locations. <br />
          Purvey WMS simplifies the unpacking and unloading process of consolidated shipments. The software provides clear guidance to warehouse staff, ensuring that items are efficiently unpacked and ready for further processing.
          </p></div>
   </div>












<div className='seconddiv-multichannelintegration'>
    <h1>Features</h1>
</div>
<Container fluid>
 

    <div className='valuedelivered-maindiv-purveydeconsolidation'>
  <div className='valuedelivered-firstdiv-purveydeconsolidation'>
    <img src={improveresouceutilisation} alt="" />
    <h6>Sorting and Allocating Individual Items</h6>
    <p >Our Deconsolidation Module helps in sorting and allocating individual items based on predefined rules or specific criteria such as SKU, destination, or order number. This ensures accurate placement of items for seamless distribution or storage.</p>
  </div>
  <div className='valuedelivered-seconddiv-purveydeconsolidation'>
    <img src={efficiency} alt="" />
    <h6>Hybrid Web and Mobile App Solutions </h6>
    <p>The PURVEY WMS cross-docking function provides real-time visibility into the status of all cross-docked orders. This allows businesses to track shipments, monitor progress, and receive instant notifications on order fulfilment milestones.

</p>
  </div>
  <div className='valuedelivered-thirddiv-purveydeconsolidation'>
    <img src={improvedorderaccuracy} alt="" />
    <h6>Built in Quality control </h6>
    <p>The PURVEY WMS cross-docking function includes built-in quality control checks to ensure accuracy and integrity of the goods being processed. Any discrepancies or issues are immediately flagged for resolution, reducing the risk of errors and customer dissatisfaction</p>
  </div>

</div>
<div className='valuedelivered-maindiv-purveydeconsolidation'>
  <div className='valuedelivered-firstdiv-purveydeconsolidation'>
    <img src={improveresouceutilisation} alt="" />
    <h6>Sorting and Allocating Individual Items</h6>
    <p >Our Deconsolidation Module helps in sorting and allocating individual items based on predefined rules or specific criteria such as SKU, destination, or order number. This ensures accurate placement of items for seamless distribution or storage.</p>
  </div>
  <div className='valuedelivered-seconddiv-purveydeconsolidation'>
    <img src={efficiency} alt="" />
    <h6>Hybrid Web and Mobile App Solutions </h6>
    <p>The PURVEY WMS cross-docking function provides real-time visibility into the status of all cross-docked orders. This allows businesses to track shipments, monitor progress, and receive instant notifications on order fulfilment milestones.

</p>
  </div>
 

</div>
<br />

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
          
            <h2 class="service_heading-crossdocking">Streamlined Operations</h2>
            <p class="service_para-crossdocking">
            With Purvey WMS's Deconsolidation Module, you can streamline your warehouse operations by reducing the time and effort required to break down consolidated shipments. This results in faster order processing and improved overall efficiency.
</p>           
        </div>
        <div className="service-crossdocking rainbow-crossdocking">
           
            <h2 class="service_heading-crossdocking">Enhanced Inventory Control</h2>
            <p class="service_para-crossdocking">
            Accurate sorting, tracking, and inventory updates provided by our module contribute to improved inventory control. You can reduce stockouts, minimize excess inventory, and ensure optimal stock management throughout your warehouse.
            </p>
        </div>
        <div className="service-crossdocking rainbow-crossdocking">
           
            <h2 class="service_heading-crossdocking">Increased Accuracy</h2>
            <p class="service_para-crossdocking">
            By leveraging the automation and verification capabilities of Purvey WMS, you can significantly reduce errors in the deconsolidation process. This leads to enhanced accuracy, reducing the risk of misplacements or shipping incorrect items.
            </p>
        </div>
       
        

</div>
</div>
<div class="container-crossdocking">
   
    <div  className='row-crossdocking'>
      
        <div className="service-crossdocking rainbow-crossdocking">
          
            <h2 class="service_heading-crossdocking">Improved Customer Satisfaction</h2>
            <p class="service_para-crossdocking">
            Efficient deconsolidation with Purvey WMS means faster order fulfilment and accurate deliveries. This translates into improved customer satisfaction, as orders are processed promptly, and products reach customers in a timely manner.             </p>
           
        </div>
        <div className="service-crossdocking rainbow-crossdocking">
           
            <h2 class="service_heading-crossdocking">Scalability and Integration</h2>
            <p class="service_para-crossdocking">
            Our Deconsolidation Module seamlessly integrates with other modules within Purvey WMS and can scale alongside your growing business needs. Whether you handle a few shipments or high volumes, our software adapts to support your requirements.
            </p>
        </div>
      
       
        

</div>
</div>
  </div>


    </div>
  )
}

export default Purveydeconsolidation