import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

import './styles.css';
import Background from './components/Background';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Freelance from './pages/Freelance';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <Background />
      <Navbar open={menuOpen} setOpen={setMenuOpen} />
      <ScrollToTop />

      <main className="site-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="page-shell"
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/professional-summary" element={<Navigate to="/about" replace />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Navigate to="/about" replace />} />
              <Route path="/qa-lab" element={<Navigate to="/about" replace />} />
              <Route path="/freelance" element={<Freelance />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Swayam Sood</span>
        <span>SDET / QA Engineer · Manual Testing · Automation · Development</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
