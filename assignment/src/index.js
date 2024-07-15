import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import Layout from './Layout';
import SmartphoneDetails from './SmartphoneDetails';
import Smartphones from './Smartphones';
import SmartphoneAdd from './SmartphoneAdd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Smartphones" element={<Smartphones />}></Route>
        <Route path="/Smartphone/:id" element={<SmartphoneDetails />}></Route>
        <Route path="/Smartphones/add" element={<SmartphoneAdd />}></Route>
        <Route path="/Smartphone/edit/:id" element={<SmartphoneAdd />}></Route>
      </Route>

    </Routes>
  </BrowserRouter>
);

