import React, { useState, useEffect } from 'react';

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
        { name: 'Enhanced Inventory Accuracy: Barcode/QR codes generated at the item level ensure precise tracking during deconsolidation, reducing discrepancies and improving overall inventory accuracy.', image: '../Assets/scan.svg',description:'Enhanced Inventory Accuracy: Barcode/QR codes generated at the item level ensure precise tracking during deconsolidation, reducing discrepancies and improving overall inventory accuracy.' },
        { name: 'Enhanced Inventory Accuracy: Barcode/QR codes generated at the item level ensure precise tracking during deconsolidation, reducing discrepancies and improving overall inventory accuracy.', image: '../Assets/Picture6.svg' ,description:"From receipt to storage, connect GRNs with packages for total transparency."},
        
      ],
    },
    'Quality Assurance': {
      items: [
        { name: 'Streamlined Inspection: QR/barcode scan-based results enable quick marking of items as approved or rejected, speeding up the inspection process.', image: '../Assets/Picture11.svg',description:'Item-level unique scan codes: enhancing traceability and accuracy in operations' },
        { name: 'Organized Staging: Scanned data assigns specific areas for approved and rejected items, reducing congestion and improving processing speed.', image: '../Assets/goodsreceipt.svg',description:'Ensure accuracy in inventory with Goods Receipt Note to package linking.' },
        { name: 'Real-Time Visibility: QR/barcode systems provide instant status updates, allowing staff to quickly locate approved or rejected products.', image: '../Assets/Package linking.png' ,description:'Transform your logistics with direct package to item level connections.'},
        { name: 'Optimized Storage: Scanning technology offers clear guidance for storing items based on their status, enhancing space utilization and accessibility.', image: '../Assets/acceptance.svg' ,description:'Optimize workflows by effectively separating acceptance from rejection.'},
         
      ],
    },
    'Unpacking & Repacking': {
      items: [
        { name: 'Repack Level Unique Scan Code Generation', image: '../Assets/work4.jpg',description:'Achieve accuracy with repack level unique scan code generation for streamlined tracking.' },
        { name: 'Item Loss Tracking', image: '../Assets/work3.jpg',description:'Track item losses seamlessly to enhance operational efficiency' },
        { name: 'Item Staging Location Assignment', image: '../Assets/work4.jpg',description:'Streamline operations by effectively assigning staging locations for every item.' },
        { name: 'Item Scan Code Level  Batch Creation & Quality Status Mapping', image: '../Assets/work3.jpg',description:'' },
        { name: 'Automated Notification Generation To Put Away', image: '../Assets/work4.jpg',description:'Transform your operations with effective item scan code batch creation and quality status mapping.  ' },
       
      ],
    },
    'PutAway': {
        items: [
          { name: 'Dynamic Put Away Method', image: '../Assets/work4.jpg' ,description:'Enhance warehouse performance using our innovative dynamic put away method.'},
          { name: 'Automated Put Away List Generation', image: '../Assets/work3.jpg' ,descr:"Simplify your warehouse operations with real-time automated put away lists."},
          { name: 'Item Staging Location  Indication For Easy Pick', image: '../Assets/work4.jpg' ,description:'Optimize order fulfillment through strategic item staging location signage.'},
          { name: 'Zone Aligned & Existing Stock Location Proximity Based  Put Away Location Indication', image: '../Assets/work3.jpg' ,description:'Optimize your storage strategy with proximity-based put away location indicators.'},
          { name: 'Warehouse Rack Location Mapped Put Away Confirmation', image: '../Assets/work4.jpg',description:'Ensure accuracy with mapped rack locations for seamless put away confirmation.' },
          { name: 'Item Scan Code Level  Batch Location Level  Record Creation', image: '../Assets/work2.jpg',description:'Streamline your processes with item scan code-driven batch location records.' },
          { name: 'Real Time Inventory Information', image: '../Assets/work3.jpg',description:"Achieve efficiency and accuracy with real-time inventory visibility." },

      

        ],
      },
      'Picking': {
    items: [
        {
            name: 'Whole Sale Dispatch Method',
            image: '../Assets/work4.jpg',
            description: 'Transform your distribution process with optimized wholesale dispatch technique.'
        },
        {
            name: 'Retail Dispatch Method',
            image: '../Assets/work3.jpg',
            description: 'Optimize your retail operations with an efficient dispatch method'
        },
        {
            name: 'Automated FIFO Pick Method',
            image: '../Assets/work4.jpg',
            description: 'Automated FIFO picking: the smart way to manage your inventory flow.'
        },
        {
            name: 'Multiple Order Simultaneous Pick',
            image: '../Assets/work3.jpg',
            description: 'Boost efficiency with multiple order simultaneous picking for streamlined operations.'
        },
        {
            name: 'Unidirectional Pick Sequencing',
            image: '../Assets/work4.jpg',
            description: 'Maximize productivity by implementing unidirectional pick sequencing in your warehouse.'
        },
        {
            name: 'Automated Reorder Level Notification',
            image: '../Assets/work2.jpg',
            description: 'Automatically notifies when stock reaches a predefined reorder level, ensuring timely replenishment of inventory.'
        },
        {
            name: 'Real Time Order Fulfilment Status Information',
            image: './Assets/work3.jpg',
            description: 'Achieve transparency and efficiency with real-time order fulfillment status information.'
        },
        
    ],
},

      'Van Delivery & Sales': {
        items: [
          { name: 'Packed delivery Product Count & Batch Tracking', image: '../Assets/work4.jpg', description: 'An efficient dispatch method designed for bulk orders, ensuring quick and accurate delivery of large quantities to retailers.' },
          { name: 'Packed Delivery Note Receipt', image: '../Assets/work3.jpg', description: 'A tailored dispatch approach for retail orders, focusing on meeting customer demand while minimizing lead time.' },
          { name: 'Dynamic delivery Updation', image: '../Assets/work4.jpg', description: 'Utilizes the First-In-First-Out (FIFO) principle to enhance inventory management and reduce waste.' },
          { name: 'Loose Delivery Product Count & Batch Tracking', image: '../Assets/work3.jpg', description: 'Enables the picking of multiple orders at once, improving efficiency and reducing processing time in warehouses.' },
          { name: 'Track Loose Items', image: '../Assets/work4.jpg', description: 'A systematic approach to order picking that minimizes travel time by following a unidirectional path through the storage area.' },
        
          
      ],
      },    
  };
  
  const HeaderComponent = () => {
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

  ;
  return (
    <div>

      <Container>
      <p className='font-highlight-deconsol mt-5'> Revolutionize your warehouse operations with our AI-driven software designed for optimal warehouse management solutions.</p>  
      <br />
    
      <div style={{display:"flex",justifyContent:"center"}}>
     
     <p   className='deconsolidation-paragraph'>
     Our innovative  enhances efficiency by enabling the seamless management of your inventory and logistics, ensuring that every product is tracked in real-time. Experience lightning-speed fulfillment that significantly boosts customer satisfaction. With intelligent automation features and smart analytics, our WMS solution  streamlines your operations, reduces costs, and maximizes productivity. Transform the way you manage your warehouse and take your logistics to the next level with our cutting-edge technology.
     </p>
     <div style={{height:'30vh'}}></div>
      </div>
      </Container>
       <h1 className='headingStyle'>Purvey - WMS</h1>
     
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
    In warehouse yard management, the lack of clear zone definition, aisle, rack, and tote labelling can lead to several issues, including loss due to item misplacement and expiry, adding to operational inefficiencies, safety risks, and financial losses.

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
   
    </div>
  );
};

export default HeaderComponent;
