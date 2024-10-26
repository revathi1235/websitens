
import './App.css';
// import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Content from './pages/Content';
// import Deconsolidation from './pages/Deconsolidation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter,Routes,Route  } from 'react-router-dom';
// import NavbarCommon from './pages/NavbarCommon';
// import CommonContact from './pages/CommonContact';
import Navbar from './Newpages/Navbar'
import AporaFulfillmentautomation from './pages/AporaFulfillmentautomation';
import Services from './pages/Services';

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
