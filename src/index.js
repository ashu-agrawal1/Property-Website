import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter } from "react-router-dom";

import './style.css'
import Home from './views/home'
import Login from './views/Login'
import Register from './views/Register'
import Properties from './views/Properties'
import AddProperty from './views/AddProperty'
import NotFound from './views/not-found'
import axios from 'axios';
import PropertyDetails from './views/PropertyDetails';
import Own from './views/Own';

// Seting the default configuration for cookies for Axios
axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/own" element={<Own />} />
      <Route path="/addproperty" element={<AddProperty />} />
      <Route path='/details' element={<PropertyDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
