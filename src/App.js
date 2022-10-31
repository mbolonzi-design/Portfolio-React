import React from 'react';
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
//import NavBar from './components/NavBar/NavBar';
import './App.css';
//import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      < Home />
      <hr />
      < About />
      <hr />
      < Projects />
      <hr />
      < Contacts />

      {/* <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} /> */}
        {/* </Routes> */}
        {/* <Footer /> */}
        {/* // <About /> */}
        {/* // <Projects /> */}
        {/* // <Contacts /> */}
      {/* </Router> */} 
    </div>
  );
}

export default App;
