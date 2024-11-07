import React from 'react'
import './contactus.css'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMailBulk, faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
import Demo from './Demo';
function Contactus() {
  return (
    <div className='contact-section mt-2'>
        <section class="contact-page-sec">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-map-marked"></i>
              </div>
              <div class="contact-info-text">
                <h2>address</h2>
                <span style={{ color: "grey" }}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        style={{ color: "white" }}
                      />{" "}
                      Malambuzha Rd,
                     
                      Olavakkode,<br />
                     
                      Palakkad Kerala 
                      678002
                    </span>
              </div>
            </div>            
          </div>          
        </div>          
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-info-text">
                <h2>INDIA</h2>
                
                <span><FontAwesomeIcon icon={faEnvelope} style={{color:"white"}}/> info@nacresys.com</span>
                <span><FontAwesomeIcon icon={faPhone} style={{color:"white"}} /> +91 77367 42072</span>
              </div>
            </div>            
          </div>                
        </div>                
        <div class="col-md-4">
          <div class="contact-info">
            <div class="contact-info-item">
              <div class="contact-info-icon">
                <i class="fas fa-clock"></i>
              </div>
              <div class="contact-info-text">
              <h2>UAE</h2>
                {/* <span>info@LoremIpsum.com</span>  */}
                <span><FontAwesomeIcon icon={faEnvelope} style={{color:"white"}}/> kumar@nacresys.com</span>
                <span><FontAwesomeIcon icon={faPhone} style={{color:"white"}} /> +971 56 815 9306</span>
              </div>
            </div>            
          </div>          
        </div>          
      </div>
      <div class="row">
        <div class="col-md-8">
          <div class="contact-page-form" method="post">
            <h2>Get in Touch</h2> 
            <form action="contact-mail.php" method="post">
              <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Your Name" name="name"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="email" placeholder="E-mail" name="email" required/>
                </div>
              </div>                              
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Phone Number" name="phone"/>
                </div>
              </div>  
              <div class="col-md-6 col-sm-6 col-xs-12">
                <div class="single-input-field">
                  <input type="text" placeholder="Subject" name="subject"/>
                </div>
              </div>                
              <div class="col-md-12 message-input">
                <div class="single-input-field">
                  <textarea  placeholder="Write Your Message" name="message"></textarea>
                </div>
              </div>                                                
              <div class="single-input-fieldsbtn">
                <input type="submit" value="Send Now"/>
              </div>                          
            </div>
            </form>   
          </div>      
        </div>
      
       <div class="col-md-4">  
         
          <div class="contact-page-map">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d15676.981072908808!2d76.63954849848753!3d10.792517629713958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d10.7902659!2d76.652822!4m5!1s0x3ba86fe1b9379cdd%3A0x295ae1ce9e81c364!2snacre%20system!3m2!1d10.799584399999999!2d76.64686069999999!5e0!3m2!1sen!2sin!4v1730199327769!5m2!1sen!2sin" width="400" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1530229867985!2d76.64428577481853!3d10.799589658766479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86fe1b9379cdd%3A0x295ae1ce9e81c364!2sNacre%20System!5e0!3m2!1sen!2sin!4v1730780934340!5m2!1sen!2sin" width="400" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>          
        
        </div> 
           
      </div>
    </div>
  </section>
<Demo/>

  <Footer/>
    </div>
  )
}

export default Contactus