import React from 'react'
import bglightgreen from '../Assets/bglightgreen2.svg'
import './commoncss.css'
import { Container } from 'react-bootstrap'
import bluebgservicepage from '../Assets/bluebgservicepage.svg.jpg'
function Services() {
  return (
    <div>
         <div className='greenbg-servicepage-main-div'>
            <img 
                src={bglightgreen} 
                alt="green background for service page"  
                className="centered-image-servicepage" 
            />
               <h1 className="service-heading">Services</h1>
            <div className="button-container">
              
                <button className="service-button">Implimentation</button>
                <button className="service-button">Customer care</button>
                {/* <button className="service-button">Button 3</button>
                <button className="service-button">Button 4</button> */}
            </div>
        </div>



        <div >
        <Container >
        <div className='secondsec-servicepage'>
            <span className='heading-servicepage'>Implementation Services</span>
            <h2 className='heading2-servicepage'>Faster and easier to deploy.</h2>
            <div className='shortcontent-maindiv'>
            <div className='shortcontent-leftdiv'>
  <h6 className='h6-servicepage'>The first measure of Speed to Pivot is Time to Value – the time it takes from selecting a WMS provider to realizing ROI.</h6>

  </div>
  <div className='shortcontect-right-div'>
            <ul class="timeline">
<li>
    <div class="direction-l">
        <div class="flag-wrapper">
            <span class="flag">Plan</span>
            
        </div>
       
    </div>
</li>
<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Design</span>
            
        </div>
       
    </div>
</li>
<li>
    <div class="direction-l">
        <div class="flag-wrapper">
            <span class="flag">Implement</span>
            
        </div>
       
    </div>
</li>
<li>
    <div class="direction-r">
        <div class="flag-wrapper">
            <span class="flag">Launch</span>
            
        </div>
       
    </div>
</li>
</ul>
            </div>
            </div>
  
       
        </div>
        </Container>
        </div>




<Container>
<div style={{height:"40vh"}}>
            <h3 className='thirddiv-servicepage'>Why are we so much faster ..... ?</h3>


        <div>
            <p className='thirddiv-content'>Nacre System has compiled an impressive history of successful systems implementations, ranging from very small systems at single site facilities to complex solutions throughout multi-national organizations. The Nacre System methodology has remained the same throughout: understand the customer’s business requirements through process methodology, thorough planning, comprehensive training and the right leadership to assure a successful project implementation.</p>
        </div>
        </div>
</Container>





<div className='bluebg-servicepage-main-div'>
            <img 
                src={bluebgservicepage} 
                alt="green background for service page"  
                className="centered-image-servicepage" 
            />
               <h5 className="fourthdiv-servicepage">PURVEY WMS provides exceptional Inbound Receipt functionality within our advanced Warehouse Management System. With our state-of-the-art technology and commitment to excellence, we guarantee efficient handling, accurate tracking, and streamlined operations for your incoming goods. Partner with us to leverage the power of our WMS and experience enhanced efficiency and improved inventory management in your warehouse.</h5>
            
        </div>


        
    </div>
  )
}

export default Services