import React from 'react'
import { Container } from 'react-bootstrap'
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import Chart2 from './Chart2'
import multichannelintegration from '../Assets/work3.jpg'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import { useNavigate } from "react-router-dom";

function Pickmanagement() {
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
    <h1 className="gradient-text">Transform your picking processes with 

    <br /></h1>
    <h3 className="gradient-text">our optimized strategies</h3>

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
      <h6 class="level-22 rectangle2" onClick={handleRepackingandputaway}>Repacking and Putaway</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2  bg-success text-white" onClick={handlePickmanagement}>Pick Management</h6>
     
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
          DISCRETE PICKING
          </h4>
          We have a deep understanding of the challenges faced by warehouses in discrete picking operations.
          Our solutions are designed to address these challenges and deliver measurable results. We stay updated with the latest industry trends and technologies to ensure that our clients receive the most advanced and effective solutions. PURVEY provides an efficient and reliable solutions for discrete picking within warehouse management systems (WMS). Our cutting-edge technology and expertise in this field ensure that your warehouse operations are optimized, resulting in increased productivity and accuracy. we understand the importance of streamlined and error-free picking processes in a warehouse.          </p></div>
   </div>












<div className='seconddiv-multichannelintegration'>
    <h1>Features</h1> 
</div>
<Container fluid>
 

    <div className='valuedelivered-maindiv-pickmanagement'>
  <div className='valuedelivered-firstdiv-pickmanagement'>
    <img src={improveresouceutilisation} alt="" />
    <h6>Advanced Order Allocation</h6>
    <p >Our discrete picking module in PURVEY incorporates advanced algorithms to intelligently allocate orders to the most suitable pickers. Picklists are generated considering factors such as location, optimized pick sequencing, priority and picker availability. Our system ensures optimal resource utilization and minimizes travel time within the warehouse. This leads to faster order fulfilment and increased operational efficiency.</p>
  </div>
  <div className='valuedelivered-seconddiv-pickmanagement'>
    <img src={efficiency} alt="" />
    <h6>Barcode and RFID Integration </h6>
    <p>To ensure efficient and accurate item identification during the picking process, we seamlessly integrate barcode and RFID technologies into our WMS. These technologies enable real-time inventory visibility, minimize the risk of picking errors, and enhance overall inventory accuracy. With our integrated solutions, you can effectively track and manage your inventory, reducing stockouts and improving order fulfilment rates.

</p>
  </div>
  <div className='valuedelivered-thirddiv-pickmanagement'>
    <img src={improvedorderaccuracy} alt="" />
    <h6>Performance Analytics and Reporting</h6>
    <p>You can monitor key metrics such as picking rates, accuracy levels, picker efficiency, and order fulfilment times. These insights allow you to identify areas for improvement, optimize processes, and make data-driven decisions to further enhance your warehouse operations. Our dashboards provide valuable visibility into your picking operations, helping you track performance and drive continuous improvement.</p>
  </div>

</div>

<br />

</Container>



<Container>
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p style={{fontFamily:"normal"}}>"Quality Assurance process in our advanced WMS, you can ensure superior product quality, minimize errors, and maintain customer satisfaction. By leveraging our standardized procedures, real-time tracking, and automated alerts, you can streamline your quality control process, reduce returns, and enhance your brand reputation. Choose our WMS to optimize your quality assurance operations and deliver excellence in every shipment."</p>
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
          
            <h2 class="service_heading-crossdocking">Increased Productivity</h2>
            <p class="service_para-crossdocking">
            Our discrete picking solutions optimize the picking process, reducing travel time and maximizing picker efficiency allowing you to handle higher order volumes with the same resources.
</p>           
        </div>
        <div className="service-crossdocking rainbow-crossdocking">
           
            <h2 class="service_heading-crossdocking">Improved Accuracy</h2>
            <p class="service_para-crossdocking">
            By incorporating barcode/RFID guidance systems, we minimize picking errors and enhance overall accuracy. This reduces the risk of order discrepancies, returns, and customer dissatisfaction.
            </p>
        </div>
        <div className="service-crossdocking rainbow-crossdocking">
           
            <h2 class="service_heading-crossdocking">Real Time Inventory Visibility</h2>
            <p class="service_para-crossdocking">
            Barcode and RFID integration provides real-time visibility into your inventory. You can accurately track stock levels, monitor item locations, and ensure inventory accuracy. This helps prevent stockouts, enables better inventory planning, and enhances order fulfilment rates.
            </p>
        </div>
        <div className="service-crossdocking rainbow-crossdocking">
           
            <h2 class="service_heading-crossdocking">Data Driven Decision Making</h2>
            <p class="service_para-crossdocking">
            Our performance dashboard features provide valuable insights into your picking operations. By monitoring key metrics, you can identify bottlenecks, optimize processes, and make data-driven decisions to drive continuous improvement.
            </p>
        </div>
        

</div>
</div>

  </div>


    </div>
  )
}

export default Pickmanagement