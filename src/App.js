import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/index.js'; 
import Servicios from './pages/servicios.js'; 
import Team from './pages/team.js'; 
import Contacto from './pages/contacto.js'; 
import Footer from './components/footer.js'; 
import Header from './components/header.js'; 


function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer/>
      </div>
    </Router >
  );
}

export default App; // Exporta el componente App
