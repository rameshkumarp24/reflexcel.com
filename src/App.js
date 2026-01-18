import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Team from './pages/Team';
import Careers from './pages/Careers';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Check for ?redirect= in the URL and update the address bar
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      const newUrl = redirect + window.location.search.replace(/([?&])redirect=[^&]+(&)?/, (m, p1, p2) => p2 ? p1 : '');
      window.history.replaceState({}, '', newUrl);
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
