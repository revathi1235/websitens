import React, { useState, useEffect } from 'react';
import './chart2.css'
import {Row,Col, Container} from 'react-bootstrap'
// Sample data for headers and corresponding items with images
const data = {
  'Yard Management': {
      items: [
        { name: 'Our yard management function generates unique QR code labels, defining zones and enhancing warehouse yard organization.', image: '../Assets/Picture13.svg',description: 'In warehouse yard management, the lack of clear zone definition, aisle, rack, and tote labelling can lead to several issues, including loss due to item misplacement and expiry, adding to operational inefficiencies, safety risks, and financial losses.' },
        { name: 'Labels improve item placement and retrieval processes, reducing time spent searching for inventory.',  },
        { name: 'Streamlined operations lead to increased efficiency, minimizing delays in put-away and retrieval tasks.',  },
        { name: 'Improved efficiency supports timely deliveries, enhancing overall customer satisfaction and operational performance.', },
         ],
    },
    'Material inward': {
      items: [
        { name: 'PURVEY WMS utilizes QR code label generation to ensure precise tracking of inventory levels and locations, reducing discrepancies.', image: '../Assets/uniquescan.jpeg',description: 'The lack of pallet, bag, and carton level tracking can lead to significant discrepancies in inventory counts. Inaccurate records may result in overstocking or stockouts, negatively affecting order fulfillment, operational efficiency, and ultimately impacting customer satisfaction and the overall profitability of the warehouse.' },
       { name: 'PURVEY WMS optimizes crossdocking processes by efficiently managing incoming and outgoing shipments, reducing handling time and improving operational flow.'},
       ],
    },
    'Deconsolidation & Crossdocking': {
      items: [
        { name: 'Enhanced Inventory Accuracy: Barcode/QR codes generated at the item level ensure precise tracking during deconsolidation, reducing discrepancies and improving overall inventory accuracy.', image: '../Assets/scan.svg',description:'The deconsolidation process in warehouses faces challenges such as inefficient workflows, inaccurate inventory tracking, and poor visibility of incoming shipments. Manual processes introduce errors and slow operations, while inadequate space utilization and safety hazards further complicate handling.' },
        { name: 'Enhanced Inventory Accuracy: Barcode/QR codes generated at the item level ensure precise tracking during deconsolidation, reducing discrepancies and improving overall inventory accuracy.', image: '../Assets/Picture6.svg' ,description:"From receipt to storage, connect GRNs with packages for total transparency."},
        
      ],
    },
    'Quality Assurance': {
      items: [
        { name: 'Streamlined Inspection: QR/barcode scan-based results enable quick marking of items as approved or rejected, speeding up the inspection process.', image: '../Assets/Picture11.svg',description:'Quality assurance in warehouses faces challenges such as inconsistent inspection processes, poor documentation, and inefficient staging for approved and rejected items. These issues lead to delays, miscommunication, and inadequate visibility. ' },
        { name: 'Organized Staging: Scanned data assigns specific areas for approved and rejected items, reducing congestion and improving processing speed.', image: '../Assets/goodsreceipt.svg',description:'Ensure accuracy in inventory with Goods Receipt Note to package linking.' },
        { name: 'Real-Time Visibility: QR/barcode systems provide instant status updates, allowing staff to quickly locate approved or rejected products.', image: '../Assets/Package linking.png' ,description:'Transform your logistics with direct package to item level connections.'},
        { name: 'Optimized Storage: Scanning technology offers clear guidance for storing items based on their status, enhancing space utilization and accessibility.', image: '../Assets/acceptance.svg' ,description:'Optimize workflows by effectively separating acceptance from rejection.'},
         
      ],
    },
    'Unpacking & Repacking': {
      items: [
        { name: 'Enhanced Traceability: Scan-based serialization allows precise tracking from bulk packaging to the source, ensuring accountability.', image: '../Assets/work4.jpg',description:'Unpacking and repacking bulk items in a food and beverage warehouse presents challenges, including inefficient processes, inaccurate portioning, item loss, and cross-contamination risks. These issues can impact operational efficiency, product quality and impact profitability.' },
        { name: 'Improved Compliance: It maintains a detailed audit trail, helping businesses meet regulatory requirements and industry standards.', image: '../Assets/work3.jpg',description:'Track item losses seamlessly to enhance operational efficiency' },
        { name: 'Efficient Recall Management: Serialization enables quick identification of affected items during recalls, facilitating faster responses.', image: '../Assets/work4.jpg',description:'Streamline operations by effectively assigning staging locations for every item.' },
        { name: 'Increased Inventory Accuracy: It improves inventory management with real-time visibility, reducing discrepancies and ensuring accurate records', image: '../Assets/work3.jpg',description:'' },
       
      ],
    },
    'PutAway': {
        items: [
          { name: 'Maximized Space Utilization: Market rack locations and dynamic putaway optimize storage, ensuring efficient use of all areas.', image: '../Assets/work4.jpg' ,description:'Inefficient putaway processes in warehouses lead to significant pain points, including delayed inventory placement and increased handling times. These issues negatively impact space management, causing congestion and hindering optimal storage utilization. Additionally, poor batch management can result in inventory discrepancies and difficulties in tracking product expiration dates, affecting overall operational efficiency.'},
          { name: 'Improved Inventory Flow: Dynamic methods enhance inventory management, reducing congestion and improving transitions.', image: '../Assets/work3.jpg' ,descr:"Simplify your warehouse operations with real-time automated put away lists."},
          { name: 'Enhanced Picking Efficiency: Proximity AI algorithms optimize item placement, minimizing picker travel time and boosting speed.', image: '../Assets/work4.jpg' ,description:'Optimize order fulfillment through strategic item staging location signage.'},
          { name: 'Data-Driven Decisions: Proximity AI allows placing the same item from different batches close together, making picking easier and faster by reducing travel time for staff and streamlining order fulfillment.', image: '../Assets/work3.jpg' ,description:'Optimize your storage strategy with proximity-based put away location indicators.'},
         

        ],
      },
      'Picking': {
    items: [
        {
            name: 'Bulk Picking: Orders are typically picked in larger quantities to meet bulk shipping requirements, reducing handling time.',
            image: '../Assets/work4.jpg',
            description: 'Warehouse picking for wholesale and retail with FIFO include inventory management complexity, order prioritization, picking errors, and space utilization. Challenges also involve labor issues and balancing speed with accuracy.'
        },
        {
            name: 'Batch Processing: Orders are processed in batches to maximize efficiency and reduce travel time within the warehouse.',
            image: '../Assets/work3.jpg',
            description: 'Optimize your retail operations with an efficient dispatch method'
        },
        {
            name: 'Individual Item Picking: Orders are picked item-by-item to fulfill specific retail needs, ensuring accuracy in smaller quantities.',
            image: '../Assets/work4.jpg',
            description: 'Automated FIFO picking: the smart way to manage your inventory flow.'
        },
        {
            name: 'Prioritized Picking: Retail orders are prioritized based on urgency, ensuring timely fulfillment and customer satisfaction.',
            image: '../Assets/work3.jpg',
            description: 'Boost efficiency with multiple order simultaneous picking for streamlined operations.'
        },
      
    ],
},

      'Van Delivery & Sales': {
        items: [
          { name: 'QR/Barcode Scanning: Implementing QR codes and barcodes enables quick and accurate scanning of products during the picking process, reducing errors in product counting and ensuring precise batch tracking.', image: '../Assets/work4.jpg', description: 'Warehouse dispatch process challenges include inaccurate product counting, inefficient batch tracking, and delayed delivery updates. Complex documentation management and challenges with loose item tracking hinder efficiency. Integration issues, limited visibility, resource constraints, return management complications, and scalability challenges further complicate the process.' },
          { name: 'Order Consolidation Management: PURVEY WMS consolidates multiple orders seamlessly, ensuring that all items are correctly grouped for dispatch. This function reduces handling time and minimizes the risk of mis-delivery.', image: '../Assets/work3.jpg', description: 'A tailored dispatch approach for retail orders, focusing on meeting customer demand while minimizing lead time.' },
          { name: 'Real-Time Tracking and Updates: The system provides real-time visibility into the status of picked items, allowing for immediate updates on delivery status and inventory levels, improving overall dispatch efficiency and communication.', image: '../Assets/work4.jpg', description: 'Utilizes the First-In-First-Out (FIFO) principle to enhance inventory management and reduce waste.' },
          { name: 'Loose Delivery Product Count & Batch Tracking', image: '../Assets/work3.jpg', description: 'Enables the picking of multiple orders at once, improving efficiency and reducing processing time in warehouses.' },
          { name: 'Track Loose Items', image: '../Assets/work4.jpg', description: 'A systematic approach to order picking that minimizes travel time by following a unidirectional path through the storage area.' },
        
          
      ],
      },    
  };
  
  const Demo = () => {
    const [selectedHeader, setSelectedHeader] = useState('Yard Management');
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
    <div>
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
      <div className='dummy-bg'>
      <Container>
        <Row>
            <Col lg={6} md={12}>


            {selectedItem && (
                    <div>
                        <img
                            src={selectedItem.image}
                            alt={selectedItem.name}
                            className='deconsolidation-img'
                        />
                      <div className="text-center">  {/* Add a class for centering */}
    <p className='ms-4' style={{ marginTop: '1px', fontSize: '1em' }}>
{selectedItem.description}
    </p>
</div>
                    </div>
                )}  




             
            </Col>
            <Col lg={6} md={12}>
            {selectedHeader && (
                    <div>
                        <ul className="block-list-deconsolidation mt-5">
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




      <div>
      {/* Desktop layout */}
      <div className="container-chart desktop-chart">
        <h1 className="level-1 rectangle" >APORA</h1>
        <ol className="level-2-wrapper">
          <li><h6 className="level-2 rectangle" >Multi-Channel Integration</h6></li>
          <li><h6 className="level-2 rectangle" >Order Processing</h6></li>
          <li><h6 className="level-2 rectangle" >Pick List Generation</h6></li>
          <li><h6 className="level-2 rectangle" >Work Force Management</h6></li>
          <li><h6 className="level-2 rectangle" >Pick Sequencing</h6></li>
          <li><h6 className="level-2 rectangle" >Package & Shipping</h6></li>
          <li><h6 className="level-2 rectangle" >Fulfillment Validation</h6></li>
          <li><h6 className="level-2 rectangle" >E-Commerce Integration</h6></li>
        </ol>
      </div>

      {/* Mobile layout */}
      <div className="container-chart mobile-chart">
        <h1 className="level-1 rectangle">APORA</h1>
        <ul className="level-2-wrapper">
          <li>Multi-Channel Integration</li>
          <li>Order Processing</li>
          <li>Pick List Generation</li>
          <li>Work Force Management</li>
          <li>Pick Sequencing</li>
          <li>Package & Shipping</li>
          <li>Fulfillment Validation</li>
          <li>E-Commerce Integration</li>
        </ul>
      </div>
    </div>





    <div>
      {/* Desktop layout */}
      <div className="container-chart2 desktop-chart">
        <h1 className="level-12 rectangle">Purvey</h1>
        <ol className="level-22-wrapper">
          <li><h6 className="level-22 rectangle2">Inbound Receipt</h6></li>
          <li><h6 className="level-22 rectangle2">Cross Docking</h6></li>
          <li><h6 className="level-22 rectangle2 me-2">Deconsolidation</h6></li>
          <li><h6 className="level-22 rectangle2">Quality Check</h6></li>
          <li><h6 className="level-22 rectangle2">Repacking and Putaway</h6></li>
          <li><h6 className="level-22 rectangle2">Pick Management</h6></li>
          <li><h6 className="level-22 rectangle2 me-2">Dispatch</h6></li>
          <li><h6 className="level-22 rectangle2">Inventory Management</h6></li>
          <li><h6 className="level-22 rectangle2">API Integration</h6></li>
          <li><h6 className="level-22 rectangle2">IOT Integration</h6></li>
        </ol>
      </div>

      {/* Mobile layout */}
      <div className="container-chart2 mobile-chart">
        <h1 className="level-12 rectangle">Purvey</h1>
        <ul className="level-22-wrapper">
          <li>Inbound Receipt</li>
          <li>Cross Docking</li>
          <li>Deconsolidation</li>
          <li>Quality Check</li>
          <li>Repacking and Putaway</li>
          <li>Pick Management</li>
          <li>Dispatch</li>
          <li>Inventory Management</li>
          <li>API Integration</li>
          <li>IOT Integration</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Demo
