import React, { useState, createContext } from 'react';
import About from './Components/About/about';
import './App.css'
import AcyuteHome from './Components/Home/AcyuteHome';
import DatabaseMangement from './Components/DBManagement/dbManagement';
import DigitalMarketing from './Components/DigitalMarketing/DigitalMarketing';
import Networking from './Components/Networking/Networking';
import WebDesign from './Components/WebDesign/webDesign';
import WebDevelopment from './Components/SoftwareDevelopment/webDevelopment';
import ITConsultancy from './Components/ITConsulting/IT-Consultancy';
import ErrorPage from './Components/404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './Components/Services/Services';
import ContactForm from './Components/Contact/Contact';
import StartAProject from './Components/StartAProject/StartAProject';

// Create a context
export const MyContext = createContext();

function App() {

  const [showMenuPopup, setShowMenuPopup] = useState(false);

  return (
    <div>
      <MyContext.Provider value={{ showMenuPopup, setShowMenuPopup }}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AcyuteHome/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/database-management" element={<DatabaseMangement />} />
          <Route exact path="/digital-marketing" element={<DigitalMarketing />} />
          <Route exact path="/networking" element={<Networking />} />
          <Route exact path="/web-development" element={<WebDesign />} />
          <Route exact path="/software-development" element={<WebDevelopment />} />
          <Route exact path="/it-consultancy" element={<ITConsultancy />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/contact" element={<ContactForm />} />
          <Route exact path="/start-a-project" element={<StartAProject />} />
          <Route path="*" element={<ErrorPage/>} />
          {/* <Route path="*" element={<Navigate to ="/" />}/> */}
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
