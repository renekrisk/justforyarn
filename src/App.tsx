import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import ForCandidates from './pages/ForCandidates';
import ForEmployers from './pages/ForEmployers';
import Training from './pages/Training';
import Contact from './pages/Contact';
import About from './pages/About';
import Courses from './pages/Courses';

const App: React.FC = () => {
  return (
    <Router>
      {/* Global Interactive Elements */}
      <CustomCursor />
      <Preloader />
      
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Sticky Header */}
        <Header />
        
        {/* Router body */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/about" element={<About />} />
            <Route path="/candidates" element={<ForCandidates />} />
            <Route path="/employers" element={<ForEmployers />} />
            <Route path="/training" element={<Training />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>

        {/* Brand Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
