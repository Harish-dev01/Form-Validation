import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Register';
import Header from './Header';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Login from './Login';
import Landing from './Landing';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header /> 
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          
        </Routes>
        <Footer />
      </div>
    
    </BrowserRouter>

    
  );
}

export default App;
