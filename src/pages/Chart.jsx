import React from 'react'
import './chart.css'
import { useNavigate } from 'react-router-dom'
function Chart() {


const navigate=useNavigate()
const handleMultichannelintegration=()=>{
  navigate('/multichannelintegration')
}
const handleOrderprocessing=()=>{
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
  return (
    <div>
        <div class="container-chart">
  <h1 class="level-1 rectangle "  onClick={handleApora}>APORA</h1>
  <ol class="level-2-wrapper">
  <li>
    <h6 class="level-2 rectangle animated-border" onClick={handleMultichannelintegration} style={{position: "relative", paddingTop: "10px"}}>
        Multi-Channel Integration
    </h6>
</li>

    <li>
      <h6 class="level-2 rectangle " onClick={handleOrderprocessing}> Order Processing</h6>
     
    </li>
      <li>
      <h6 class="level-2 rectangle " onClick={handlePicklistgeneration}>Pick List Generation</h6>
     
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
  )
}

export default Chart