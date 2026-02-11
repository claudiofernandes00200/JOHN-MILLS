import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Location from './pages/Location';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { ContentProvider } from './context/ContentContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/location" element={<Location />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </Router>
    </ContentProvider>
  );
};

export default App;