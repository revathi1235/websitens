
import './App.css';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Content from './pages/Content';
import Multichannelintegration from './pages/Multichannelintegration'
// import Deconsolidation from './pages/Deconsolidation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter,Routes,Route  } from 'react-router-dom';
// import NavbarCommon from './pages/NavbarCommon';
import Inbountreceipt from './pages/Inbountreceipt';
// import CommonContact from './pages/CommonContact';
import Navbar from './Newpages/Navbar'
import AporaFulfillmentautomation from './pages/AporaFulfillmentautomation';
import Services from './pages/Services';
import Orderprocessing from './pages/OrderProcessing';
import Picklistgeneration from './pages/Picklistgeneration';
import Workforcemanagement from './pages/Workforcemanagement';
import Picksequencing from './pages/Picksequencing';
import Pickandshipping from './pages/Pickandshipping';
import Fulfillmentvalidation from './pages/Fulfillmentvalidation';
import Ecommerceintegration from './pages/Ecommerceintegration';
import Contactus from './pages/Contactus';
import Purveyordermanagementsystem from './pages/Purveyordermanagementsystem';
import Crossdocking from './pages/Crossdocking'
import Purveydeconsolidation from './pages/Purveydeconsolidation';
import Qualitycheck from './pages/Qualitycheck';
import Repackingandputaway from './pages/Repackingandputaway';
import Pickmanagement from './pages/Pickmanagement';
import Dispatch from './pages/Dispatch';
import Inventorymanagement from './pages/Inventorymanagement';
import APIintegration from './pages/APIintegration';
import IOTintegration from './pages/IOTintegration';
import Casestudies from './pages/Casestudies';
import Productwarehousemanagementsystem from './pages/Productwarehousemanagementsystem';
import Blogs from './pages/Blogs';

function App() {
  return (
    <HashRouter>
    <div className="App">
    {/* <CommonNavbar/> */}
    {/* <NavbarCommon/> */}
    <Navbar/>
    <Routes>
    
     <Route path='/' element={<Content/>}/>
     <Route path='/aboutus' element={<AboutUs/>}/>
     <Route path='/aporafulfillmentautomation' element={<AporaFulfillmentautomation/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/multichannelintegration' element={<Multichannelintegration/>}/>
    <Route path='/orderprocessing' element={<Orderprocessing/>}/>
    <Route path='/picklistgeneration' element={<Picklistgeneration/>}/>
    <Route path='/workforcemanagement' element={<Workforcemanagement/>}/>
    <Route path='/picksequencing' element={<Picksequencing/>}/>
    <Route path='/pickandshipping' element={<Pickandshipping/>}/>
    <Route path='/fulfillmentvalidation' element={<Fulfillmentvalidation/>}/>
    <Route path='/ecommerceintegration' element={<Ecommerceintegration/>}/>
    <Route path='/contactus' element={<Contactus/>}/>
    < Route path='/purveyordermanagementsystem' element={<Purveyordermanagementsystem/>}/>
    <Route path='/inbountreceipt' element={<Inbountreceipt/>}/>
    <Route path='/crossdocking' element={<Crossdocking/>}/>
    <Route path='/purveydeconsolidation' element={<Purveydeconsolidation/>}/>
    <Route path='/qualitycheck' element={<Qualitycheck/>}/> 
    <Route path='/repackingandputaway' element={<Repackingandputaway/>}/>
    <Route path='/aporapickmanagement' element={<Pickmanagement/>}/>
    <Route path='/dispatch' element={<Dispatch/>}/>
    <Route path='/inventorymanagement' element={<Inventorymanagement/>}/>
    <Route path='/apiintegration' element={<APIintegration/>}/>
    <Route path='/iotintegration' element={<IOTintegration/>}/>
    <Route path='/casestudies' element={<Casestudies/>}/>
    <Route path='/productwarehousemanagementsystem' element={<Productwarehousemanagementsystem/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
     {/* <Route path='/deconsolidation' element={<Deconsolidation/>}/>
   
    <Route path='/contactus' element={<CommonContact/>}/>
<Route path='/navbar' element={<Navbar/>}/> */}
   </Routes>
       {/* <Footer/> */}
    </div>
    </HashRouter>
  );
}

export default App;
