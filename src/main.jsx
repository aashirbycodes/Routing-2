import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import  About from './pages/about/about.jsx'
import ContactUs from './pages/contactus/contact.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>,
);