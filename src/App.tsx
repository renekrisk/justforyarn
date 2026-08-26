import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Inspo from './pages/Inspo';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Sticky Header */}
      <Header />
      
      {/* Router body */}
      <main style={{ flex: 1, marginTop: isHome ? '0px' : '68px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/inspo" element={<Inspo />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Consistent LV Footer on all pages */}
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      {/* Global Interactive Elements */}
      <CustomCursor />
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
