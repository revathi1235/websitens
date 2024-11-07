import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for managing meta tags

import {Row,Col, Container} from 'react-bootstrap'
// Sample data for headers and corresponding items with images
const data = {
    'Put Away': {
      items: [
        { name: 'Automated Put-Away List Generation: AI algorithms analyze incoming inventory and generate optimized put-away lists based on factors such as item size, weight, and demand, ensuring efficient placement and reducing manual planning time.', image: './Assets/work3.jpg',description:'Regular put-away methods lead to several challenges, including inefficient space utilization, increased travel time, and poor inventory accuracy. They lack flexibility and increase the risk of errors, resulting in longer put-away times. Additionally, limited real-time data, compliance difficulties, scalability issues, and a lack of analytical insights hinder operational efficiency and responsiveness in warehouse management.' },
        { name: 'Dynamic Storage Optimization: The system continuously assesses storage conditions and adjusts item locations in real-time to maximize space utilization, enhance accessibility, and adapt to changing inventory needs.', image: './Assets/eco.jpg' ,description:'Elevate your inventory management with cutting-edge dynamic storage optimization.'},
        { name: 'Resource Optimization: By analyzing worker availability, equipment, and storage locations, the AI optimizes resource allocation, ensuring that the right personnel and tools are deployed for efficient put-away operations.', image: './Assets/work4.jpg' ,description:"Unlock your potential by optimizing resources for smarter operations"},
        { name: 'Process Control and Monitoring: Automated monitoring tracks the progress of put-away tasks in real-time, providing actionable insights and alerts for any delays or inefficiencies, allowing for immediate corrective actions.', image: './Assets/eco.webp' ,description:'Transform your workflow with precise process control and continuous monitoring.'},
        ],
    },
    'Pick & Dispatch': {
      items: [
        { name: 'Sales Order Similarity & Proximity Groupings: Groups similar sales orders by proximity to minimize travel distance and enhance picking efficiency.', image: './Assets/work4.jpg' ,description:"Normal order-wise picking faces key challenges such as increased travel time due to non-optimized routes, leading to inefficiencies. It often results in picking errors and inaccuracies, causing delays in order fulfillment. Additionally, this method can create congestion in the picking area and lack flexibility to adapt to changes in order volume or item availability."},
        { name: 'Zone-Aligned Pick List Generation: Creates pick lists based on warehouse zones, reducing congestion and travel time for pickers.', image: './Assets/work2.jpg',description:"Zone-aligned pick list generation: the key to streamlined order fulfillment." },
        {name:'Resource Optimization: Analyzes workload and equipment availability to intelligently allocate resources for improved operational efficiency.'},
        {name:'Unidirectional Pick Sequencing: Streamlines picking flow by implementing unidirectional sequencing, reducing backtracking.'},
        {name:'QR/Barcode-Based Pick Accuracy Validation: Uses QR and barcode scanning for real-time validation, ensuring accuracy and enhancing order fulfillment.'}
       ],
    },
    'Resource ': {
      items: [
        { name: 'Real-Time Worker Performance Analysis: Provides instant feedback on individual productivity, helping maintain motivation and accountability.', image: './Assets/work3.jpg',description:'Challenges of worker utilization during put-away and picking processes include inefficient task allocation, long travel times, and lack of real-time visibility. Inadequate training, high turnover rates, and inflexible processes further hinder productivity. Resource constraints limit efficiency, ultimately impacting overall warehouse operations.  ' },
        { name: 'Automated Task Assignment: Streamlines task distribution based on worker availability and skills, reducing stress and enhancing efficiency.', image: './Assets/work2.jpg' ,description:""},
        { name: 'Intelligent Workload Balancing: Optimizes workloads among team members to prevent burnout and maintain consistent productivity levels.', image: './Assets/work3.jpg',description:"" },
        {name:'QR/Barcode-Based Tracking: Ensures high delivery accuracy with minimal stress on labor, facilitating efficient pick and put-away processes.'},
        {name:'AI-Powered Zone-Aligned Pick List Generation: Facilitates unidirectional, simultaneous picking of multiple orders, resulting in a fourfold increase in productivity, enhancing overall motivation and reducing the risk of labor burnout.'}
       ],
    },
    'Traceability': {
      items: [
        { name: 'SKU Attribute Management: APORA uses QR/barcodes to manage and track SKU attributes, ensuring accurate inventory classification and identification.', image: './Assets/work4.jpg',description:'Without traceability solutions, warehouses face challenges such as inventory inaccuracies, lost items, increased picking errors, and inefficient stock management. Compliance issues arise, response times slow, and supply chain coordination suffers. Additionally, return processing becomes cumbersome, limiting analytical insights and reducing accountability among staff, ultimately impacting operational efficiency' },
        { name: 'Unique ID Number: Each item is assigned a unique ID number, enhancing traceability and enabling precise tracking throughout the warehouse.', image: './Assets/work3.jpg' },
        { name: 'Vendor of Origin: QR/barcodes capture vendor information, facilitating better supplier management and improving accountability for received goods.', image: './Assets/work4.jpg' },
        { name: 'Receipt Package Identity: APORA links receipt packages to their contents via barcodes, streamlining the receiving process and reducing errors in inventory management.', image: './Assets/work3.jpg' },
       ],
    },
    'Monitor': {
        items: [
          { name: 'Lot Management and Serialization: APORA provides robust lot management and serialization features, enabling precise tracking of product origins and movement, improving traceability for compliance and recalls. ', image: './Assets/work4.jpg' ,description:'Without lot management, serialization, and batch tracking, warehouses face inventory inaccuracies, traceability issues, and increased picking errors. Shortened product shelf life and ineffective stock rotation lead to waste and compliance risks. Additionally, returns management becomes complex, supplier accountability suffers, and labor costs rise due to manual tracking processes.'},
          { name: 'Batch Tracking: The system facilitates efficient batch tracking, allowing for effective stock rotation and management of FIFO/LIFO processes, reducing the risk of expired or spoiled products. ', image: './Assets/work3.jpg' },
          { name: 'Storage Location Management: APORA optimizes storage location management, ensuring items are placed and retrieved from designated areas, enhancing picking accuracy and reducing inventory discrepancies. ', image: './Assets/work4.jpg' },
          { name: 'Product Age Tracking: With product age tracking capabilities, APORA monitors shelf life, helping warehouses manage inventory proactively and minimize waste due to expired goods. ', image: './Assets/work4.jpg' },
        ],
      },
        
  };
  
  const AporaHomepage = () => {
    const [selectedHeader, setSelectedHeader] = useState('Put Away');
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
  
    useEffect(() => {
      setItems(data[selectedHeader].items); // Update items based on the selected header
      setSelectedItem(data[selectedHeader].items[0]); // Set default selected item for each header
    }, [selectedHeader]);
  

  const handleHeaderClick = (header) => {
    setSelectedHeader(header);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the selected item when clicked
  };
  

  return (
    <div className='AporaHomepage'>

      <Container>
      <div style={{display:"flex",justifyContent:"center",textAlign:"justify"}}>
     
      </div>
      </Container>
       <h1 className='headingStyle-Apora'>APORA </h1>
     
            <div className='mt-4'>
                {/* Main Headers */}
                <ul className="responsive-list">
        {Object.keys(data).map((header) => (
          <li
            key={header}
            onClick={() => handleHeaderClick(header)}
            className={selectedHeader === header ? 'selected-header' : ''}
          >
            {header.toUpperCase()}
          </li>
        ))}
      </ul>
            </div>

            {/* List of Items based on Selected Header */}
            <div className='backgroundimg-deconsolidation'>
            <Container  >
                <Row>
                        <Col lg={6} >
            {selectedItem && (
                <div>
                    <img
                        src={selectedItem.image}
                        alt={selectedItem.name}
                       className='deconsolidation-img'
                    />
                     <p className='ms-4' style={{ marginTop: '1px', fontSize: '1em',textAlign:"center" }}>
        {selectedItem.description}
    </p>
                </div>
            )}
        </Col>
                    <Col lg={6}>
                        {selectedHeader && (
                            <div>
                                <ul className="block-list-deconsolidation  mt-2">
                                    {items.map((item) => (
                                        <li
                                            key={item.name}
                                            >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </Col>
                
                 
                </Row>  
            </Container>
            </div>
   
    </div>
  );
};

export default AporaHomepage;
