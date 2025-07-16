require('dotenv').config(); //env 
import React from 'react';

import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import SupportPage from './landing_page/support/SupportPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/product/ProductPage';
import AboutPage from './landing_page/about/AboutPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/signup/Login';
import axios from 'axios';
// import { Footer } from 'fo';


const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL; // Backend URL
axios.defaults.withCredentials = true; // Send session cookies

root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/about' element={<AboutPage/>}></Route>
      <Route path='/product' element={<ProductPage/>}></Route>
      <Route path='/pricing' element={<PricingPage/>}></Route>
      <Route path='/support' element={<SupportPage/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
