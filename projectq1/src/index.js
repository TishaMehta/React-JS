import React from 'react';

import './index.css';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Student from "./Student";
import Product from "./Product";
import Header from "./Header";
import Layout from "./Layout";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/Student" element={<Student />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/Header" element={<Header />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
