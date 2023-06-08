import './App.css';

// import First from './First';
// import Read from './Read';
// import './box.css';
//import Form from './Form';
// import Boxshad from './Boxshad';
//import LDmode from './LDmode';
// import Nav from './Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import ContactForm from './ContactForm';

import About from './About';
import New from './components/New';
import Slider from './components/Slider';
 import Nav from './Nav';
// import Footer from './Footer';

//  /import Signup from './Signup';
// import Login from './Login';
import PricingTable from './PricingTable';
import {BrowserRouter} from 'react-router-dom';
import Footer from './Footer';
import Signup from './login/Signup';
import Login from './login/Login';
import WatchTrainee from './WatchTrainee';
import CardDesign from './components/CardDesign';
import New1 from './components/New1';
import Video from './components/Video';

// import React, { useState } from 'react';
// import ThemeProvider from './ThemeProvider';
// import ToggleButton from './ToggleButton';
// import ChatBot from 'react-simple-chatbot';
//  import {Segment} from 'semantic-ui-react';
function App() {

  return (
<>
<BrowserRouter>
<Nav/>
     <Routes> 

     
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/service" element={<Service/>} />
     <Route path="/ContactForm" element={<ContactForm/>} /> 
    {/* <Route path="/Login" element={<Login/>} />  */}
    <Route path="/Slider" element={<Slider/>} /> 
    <Route path="/New" element={<New/>} />
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/PricingTable" element={<PricingTable/>} />
    <Route path="/WatchTrainee" element={<WatchTrainee/>} />
    <Route path="/CardDesign" element={<CardDesign/>} />
    <Route path="/New1" element={<New1/>} />
    <Route path="/Video" element={<Video/>} />
    

</Routes> 
<Footer/>
</BrowserRouter>
</>
  );
}

export default App;


