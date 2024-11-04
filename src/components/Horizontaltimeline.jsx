import React, { useState } from 'react';
import './horizontaltimeline.css';

function Horizontaltimeline() {
    const [selectedStep, setSelectedStep] = useState('Plan');

  const handleStepClick = (step) => {
    setSelectedStep(step);
  };

  const renderContent = () => {
    switch (selectedStep) {
      case 'Plan':
        return <div className="content">
    {/* <div className='valuedelivered-section-aporafulfillment'>
  <div className='value-del-aporafulfillment'>
    <h1 style={{fontSize:"30px",marginTop:"20px"}}>Value Delivered</h1>
    </div>
<div class="container-aporafulfill">
   
    <div  className='row-aporafulfill'>
      
        <div className="service rainbow">
          
            <h2 class="service_heading">Precision Picking, Swift Deliveries: AI Empowered for Excellence</h2>
            <p class="service_para">
            APORA's advanced management system enhances warehouse operations by automating fulfillment and streamlining workflows. With on-premises software, it minimizes errors and offers comprehensive tracking of each order, enabling you to optimize efficiency and exceed customer expectations.
            </p>
           
        </div>
        <div className="service rainbow">
           
            <h2 class="service_heading">IoT-Driven Validation: Redefining Returns, Standardizing Success</h2>
            <p class="service_para">
            Boost customer satisfaction and reduce sales returns with APORA's cloud-based management solution, featuring an IoT-enabled two-step validation process. This advanced software ensures consistent fulfillment, building trust and loyalty within your customer base.
            </p>
        </div>
        <div className="service rainbow">
           
            <h2 class="service_heading">Opti-Pick: Unlocking 200% Efficiency Surge, Normalizing Accomplishment</h2>
            <p class="service_para">
            APORA's Opti-Pick algorithm transforms warehouse operations by minimizing pickers' walk-around time. This on-premises software optimizes picking routes for efficient item retrieval, enhancing productivity and efficiency in e-commerce fulfillment through automation.
            </p>
        </div>
        <div className="service rainbow">
            <i class="fas fa-shipping-fast"></i>
            <h2 class="service_heading">SwiftShip: Turbocharging Same Day Deliveries by 100%</h2>
            <p class="service_para ">
            APORA's advanced AI algorithm optimizes every stage of the fulfillment process, significantly enhancing your warehouse operations. With this cloud-based management system, you can handle double the volume of orders and facilitate same-day deliveries. Automate your processes with APORA to meet the increasing demand for rapid deliveries and stay competitive in the market.
            </p>
        </div>

</div>
</div>
  </div> */}

<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet iure quia illum nemo culpa mollitia maiores, quo debitis doloribus facilis excepturi, iusto ducimus molestiae quidem est voluptatem fuga asperiores itaque labore architecto nesciunt vero alias! Laudantium natus, modi, autem vitae incidunt deleniti excepturi assumenda accusantium quidem iste mollitia aut ullam perspiciatis dicta voluptatem quisquam accusamus maxime molestias libero sit officia! Molestiae enim cum sequi. Dolores molestias exercitationem eveniet reprehenderit at, natus, adipisci vitae labore consequatur commodi veritatis accusamus quibusdam aliquid consequuntur quam voluptas cupiditate ea maxime! Adipisci error, iusto at reprehenderit id accusamus tempore, voluptatibus sit sunt atque facere unde?</span>


        </div>;
      case 'Design':
        return <div className="content">
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus amet iusto voluptatem pariatur assumenda cupiditate quis quae, ipsam aut? Rerum, nulla. Fuga vel alias optio delectus magnam necessitatibus eligendi tenetur, culpa officia dolor corrupti assumenda quam dignissimos aspernatur esse praesentium consectetur, voluptates eveniet obcaecati incidunt ratione quaerat explicabo? Porro id fuga adipisci sint facere delectus laudantium error quibusdam vel quas modi veritatis, incidunt, voluptate ex! Ex quidem labore eveniet eaque ea dolore harum quis id dolorum eum eius saepe quos rem tempore, nostrum dolor in necessitatibus numquam inventore. Facere non sint dolores praesentium explicabo nulla ratione illum pariatur blanditiis hic!</span>
        </div>;
      case 'Implement':
        return <div className="content"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus amet iusto voluptatem pariatur assumenda cupiditate quis quae, ipsam aut? Rerum, nulla. Fuga vel alias optio delectus magnam necessitatibus eligendi tenetur, culpa officia dolor corrupti assumenda quam dignissimos aspernatur esse praesentium consectetur, voluptates eveniet obcaecati incidunt ratione quaerat explicabo? Porro id fuga adipisci sint facere delectus laudantium error quibusdam vel quas modi veritatis, incidunt, voluptate ex! Ex quidem labore eveniet eaque ea dolore harum quis id dolorum eum eius saepe quos rem tempore, nostrum dolor in necessitatibus numquam inventore. Facere non sint dolores praesentium explicabo nulla ratione illum pariatur blanditiis hic!</span></div>;
      case 'Launch':
        return <div className="content"><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus amet iusto voluptatem pariatur assumenda cupiditate quis quae, ipsam aut? Rerum, nulla. Fuga vel alias optio delectus magnam necessitatibus eligendi tenetur, culpa officia dolor corrupti assumenda quam dignissimos aspernatur esse praesentium consectetur, voluptates eveniet obcaecati incidunt ratione quaerat explicabo? Porro id fuga adipisci sint facere delectus laudantium error quibusdam vel quas modi veritatis, incidunt, voluptate ex! Ex quidem labore eveniet eaque ea dolore harum quis id dolorum eum eius saepe quos rem tempore, nostrum dolor in necessitatibus numquam inventore. Facere non sint dolores praesentium explicabo nulla ratione illum pariatur blanditiis hic!</span></div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <section id="process">
        <div className="row">
          <div className="section-heading">
            {/* <h2 className="text-center orange">Responsive Horizontal Timeline</h2> */}
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="steps-timeline text-center">
              <div 
                className={`steps-one ${selectedStep === 'Plan' ? 'selected' : ''}`} 
                onClick={() => handleStepClick('Plan')}
              >
                <h3>Plan</h3>
                <div className="end-circle back-orange"></div>
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange"></div>
                  </div>
                </div>
              </div>

              <div 
                className={`steps-two ${selectedStep === 'Design' ? 'selected' : ''}`} 
                onClick={() => handleStepClick('Design')}
              >
                <h3>Design</h3>
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange"></div>
                  </div>
                </div>
              </div>

              <div 
                className={`steps-three ${selectedStep === 'Implement' ? 'selected' : ''}`} 
                onClick={() => handleStepClick('Implement')}
              >
                <h3>Implement</h3>
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange"></div>
                  </div>
                </div>
              </div>

              <div 
                className={`steps-four ${selectedStep === 'Launch' ? 'selected' : ''}`} 
                onClick={() => handleStepClick('Launch')}
              >
                <h3>Launch</h3>
                <div className="step-wrap">
                  <div className="steps-stops">
                    <div className="verticle-line back-orange"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Render content based on selected step */}
        {renderContent()}
      </section>
    </div>
  );
}

export default Horizontaltimeline;
