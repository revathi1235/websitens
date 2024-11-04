import React, { useState, useEffect } from 'react';

import {Row,Col, Container} from 'react-bootstrap'
// Sample data for headers and corresponding items with images
const data = {
  'Warehouse': {
      items: [
        { name: 'Vendor Management', image: './Assets/picture13.svg',description: 'Transform Your Warehouse Operations with Unique Scans for Effortless Inventory Management and Increased Efficiency' },
        { name: 'Goods Receipt Management', image: './Assets/picture14.svg',description: 'Transform Your Warehouse Operations with Unique Scans for Effortless Inventory Management and Increased Efficiency' },
        { name: 'Planogram Management', image: './Assets/work3.svg',description: 'Transform Your Warehouse Operations with Unique Scans for Effortless Inventory Management and Increased Efficiency' },
        { name: 'Warehouse Operations Additions', image: './Assets/work3.svg',description: 'Transform Your Warehouse Operations with Unique Scans for Effortless Inventory Management and Increased Efficiency' },
        { name: 'Organizational Structure Addition', image: './Assets/work3.svg',description: 'Transform Your Warehouse Operations with Unique Scans for Effortless Inventory Management and Increased Efficiency' },
       ],
    },
    'Material': {
      items: [
        { name: 'Unique Scan Code Generation', image: './Assets/uniquescan.jpeg',description: 'Transform Your Warehouse Operations with Unique Scans for Effortless Inventory Management and Increased Efficiency' },
        { name: 'Pallet, Bags, Carton Level Tracking', image: './Assets/eco.jpg',description:'Achieve Complete Visibility: Track items in Pallets, Bags, and Cartons from Inward Receipt to Deconsolidation, Putaway, Picking, and Dispatch' },
        { name: 'Purchase Order, Advanced Shipping Notice Linking', image: './Assets/picture2.png',description:'Seamlessly Connect Purchase Orders and Advanced Shipping Notices to Enhance Material Receipt Accuracy and Efficiency' },
        { name: 'Invoice Aligned Product, Lot Trace', image: './Assets/picture2.svg' ,description:'Optimize Material Inward Processes with Lot Tracing for Expiry and Location Accuracy in Your Warehouse'},
        { name: 'Electronic Record Transfer Deconsolidation And Crossdocking ', image: './Assets/picture3.svg',description:'Streamline Operations with Swift, Real-Time Information Sharing to Eliminate Data Discrepancies Across Departments' },
        { name: 'Supplier Metrics Data Input For Procurement Planning', image: './Assets/picture4.svg',description:'Enhance Procurement Planning with Comprehensive Supplier Metrics Data Input'  },
        { name: 'API Integrations To Purchase, Finance & ERP Applications', image: './Assets/picture5.svg',description:'Unify your business processes with API integrations to streamline purchasing, finance, and ERP.' },
      ],
    },
    'Deconsolidation': {
      items: [
        { name: 'Packages level Unique Scan Code Generation', image: './Assets/scan.svg',description:'Ensure traceability with unique scan codes for every package level' },
        { name: 'Goods Receipt Note to Package linking', image: './Assets/picture6.svg' ,description:"From receipt to storage, connect GRNs with packages for total transparency."},
        { name: 'Bulk order Package Separation', image: './Assets/picture7.svg',description:'Efficient bulk order separation for smooth and timely deliveries.' },
        { name: 'Invoice Aligned Product, Lot, Quality Trace', image: './Assets/work4.jpg',description:'Maximize efficiency with invoice-aligned traceability of products and lots.' },
        { name: 'Automated notification generation to Quality Assurance', image: './Assets/qa.svg',description:'Automated notifications empower dispatch teams for seamless bulk delivery execution' },
        { name: 'Automated notification generation to dispatch for Bulk Delivery', image: './Assets/picture9.svg' ,description:'Automated notifications empower dispatch teams for seamless bulk delivery execution'},
        
      ],
    },
    'Quality': {
      items: [
        { name: 'Item Level Unique Scan Code Generation', image: './Assets/picture11.svg',description:'Item-level unique scan codes: enhancing traceability and accuracy in operations' },
        { name: 'Goods Receipt Note to Package linking', image: './Assets/picture12.svg',description:'Ensure accuracy in inventory with Goods Receipt Note to package linking.' },
        { name: 'Package To Item Level Linking', image: './Assets/work3.jpg' ,description:'Transform your logistics with direct package to item level connections.'},
        { name: 'Acceptance And Rejection Separation', image: './Assets/work4.jpg' ,description:'Optimize workflows by effectively separating acceptance from rejection.'},
        { name: 'Approved And Rejected Item Staging Location Assignment', image: './Assets/work4.jpg',description:'Streamline operations through clear assignment of staging locations for approved and rejected items.' },
        { name: 'Item Scan Code Level Quality Status Mapping', image: './Assets/work4.jpg' ,description:"Empower your operations with detailed item scan code level quality tracking"},
        { name: 'Automated Notification Generation To Unpacking And Repacking', image: './Assets/work4.jpg',description:'Stay organized and on schedule with automated notifications for unpacking and repacking.' },
        { name: 'Automated Notification Generation To Put Away', image: './Assets/work3.jpg' ,description:'Transform your inventory management with automated alerts for put away actions.'},
        
      ],
    },
    'Unpacking': {
      items: [
        { name: 'Repack Level Unique Scan Code Generation', image: './Assets/work4.jpg',description:'Achieve accuracy with repack level unique scan code generation for streamlined tracking.' },
        { name: 'Item Loss Tracking', image: './Assets/work3.jpg',description:'Track item losses seamlessly to enhance operational efficiency' },
        { name: 'Item Staging Location Assignment', image: './Assets/work4.jpg',description:'Streamline operations by effectively assigning staging locations for every item.' },
        { name: 'Item Scan Code Level  Batch Creation & Quality Status Mapping', image: './Assets/work3.jpg',description:'' },
        { name: 'Automated Notification Generation To Put Away', image: './Assets/work4.jpg',description:'Transform your operations with effective item scan code batch creation and quality status mapping.  ' },
       
      ],
    },
    'PutAway': {
        items: [
          { name: 'Dynamic Put Away Method', image: './Assets/work4.jpg' ,description:'Enhance warehouse performance using our innovative dynamic put away method.'},
          { name: 'Automated Put Away List Generation', image: './Assets/work3.jpg' ,descr:"Simplify your warehouse operations with real-time automated put away lists."},
          { name: 'Item Staging Location  Indication For Easy Pick', image: './Assets/work4.jpg' ,description:'Optimize order fulfillment through strategic item staging location signage.'},
          { name: 'Zone Aligned & Existing Stock Location Proximity Based  Put Away Location Indication', image: './Assets/work3.jpg' ,description:'Optimize your storage strategy with proximity-based put away location indicators.'},
          { name: 'Warehouse Rack Location Mapped Put Away Confirmation', image: './Assets/work4.jpg',description:'Ensure accuracy with mapped rack locations for seamless put away confirmation.' },
          { name: 'Item Scan Code Level  Batch Location Level  Record Creation', image: './Assets/work2.jpg',description:'Streamline your processes with item scan code-driven batch location records.' },
          { name: 'Real Time Inventory Information', image: './Assets/work3.jpg',description:"Achieve efficiency and accuracy with real-time inventory visibility." },

      

        ],
      },
      'Picking': {
    items: [
        {
            name: 'Whole Sale Dispatch Method',
            image: './Assets/work4.jpg',
            description: 'Transform your distribution process with optimized wholesale dispatch technique.'
        },
        {
            name: 'Retail Dispatch Method',
            image: './Assets/work3.jpg',
            description: 'Optimize your retail operations with an efficient dispatch method'
        },
        {
            name: 'Automated FIFO Pick Method',
            image: './Assets/work4.jpg',
            description: 'Automated FIFO picking: the smart way to manage your inventory flow.'
        },
        {
            name: 'Multiple Order Simultaneous Pick',
            image: './Assets/work3.jpg',
            description: 'Boost efficiency with multiple order simultaneous picking for streamlined operations.'
        },
        {
            name: 'Unidirectional Pick Sequencing',
            image: './Assets/work4.jpg',
            description: 'Maximize productivity by implementing unidirectional pick sequencing in your warehouse.'
        },
        {
            name: 'Automated Reorder Level Notification',
            image: './Assets/work2.jpg',
            description: 'Automatically notifies when stock reaches a predefined reorder level, ensuring timely replenishment of inventory.'
        },
        {
            name: 'Real Time Order Fulfilment Status Information',
            image: './Assets/work3.jpg',
            description: 'Achieve transparency and efficiency with real-time order fulfillment status information.'
        },
        
    ],
},

      'Delivery': {
        items: [
          { name: 'Packed delivery Product Count & Batch Tracking', image: './Assets/work4.jpg', description: 'An efficient dispatch method designed for bulk orders, ensuring quick and accurate delivery of large quantities to retailers.' },
          { name: 'Packed Delivery Note Receipt', image: './Assets/work3.jpg', description: 'A tailored dispatch approach for retail orders, focusing on meeting customer demand while minimizing lead time.' },
          { name: 'Dynamic delivery Updation', image: './Assets/work4.jpg', description: 'Utilizes the First-In-First-Out (FIFO) principle to enhance inventory management and reduce waste.' },
          { name: 'Loose Delivery Product Count & Batch Tracking', image: './Assets/work3.jpg', description: 'Enables the picking of multiple orders at once, improving efficiency and reducing processing time in warehouses.' },
          { name: 'Track Loose Items', image: './Assets/work4.jpg', description: 'A systematic approach to order picking that minimizes travel time by following a unidirectional path through the storage area.' },
        
          
      ],
      },    
  };
  
  const HeaderComponent = () => {
    const [selectedHeader, setSelectedHeader] = useState('Warehouse');
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
       <h1 className='headingStyle'>Purvey WMS</h1>
     
            <div >
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
                {selectedHeader && (
                    <div>
                        <ul className="block-list-deconsolidation mt-2">
                            {items.map((item) => (
                                <li
                                    key={item.name}
                                    onClick={() => handleItemClick(item)}
                                    className={selectedItem?.name === item.name ? 'selected-item-deconsolidation' : ''}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </Col>
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
        </Row>  
    </Container>
</div>
   
    </div>
  );
};

export default HeaderComponent;
