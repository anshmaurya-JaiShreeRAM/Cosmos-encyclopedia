import { useState, useEffect, useRef } from 'react';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';
import HeroPage from './pages/HeroPage';
import ResearchPage from './pages/ResearchPage';
import SpacecraftPage from './pages/SpacecraftPage';
import DictionaryPage from './pages/DictionaryPage';
import AboutPage from './pages/AboutPage';
import './styles/globals.css';

type Page = 'home' | 'research' | 'spacecraft' | 'dictionary' | 'about';

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }
      requestAnimationFrame(() => {
        if (trailRef.current) {
          trailRef.current.style.left = `${x}px`;
          trailRef.current.style.top = `${y}px`;
        }
      });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (page: Page) => {
    if (page === currentPage) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 500);
  };

  if (loading) return <LoadingScreen />;

  return (
    <div className="app-root">
      <CustomCursor />
      <div className={`warp-overlay ${transitioning ? 'active' : ''}`} />
      <NavBar currentPage={currentPage} navigateTo={navigateTo} />
      <div className={`page-content ${transitioning ? 'page-exit' : 'page-enter'}`}>
        {currentPage === 'home' && <HeroPage navigateTo={navigateTo} />}
        {currentPage === 'research' && <ResearchPage />}
        {currentPage === 'spacecraft' && <SpacecraftPage />}
        {currentPage === 'dictionary' && <DictionaryPage />}
        {currentPage === 'about' && <AboutPage />}
      </div>
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <span className="footer-logo-icon">🚀</span>
            <span className="footer-brand">COSMOS ENCYCLOPEDIA</span>
          </div>
          <p className="footer-credit">
            © 2024 COSMOS ENCYCLOPEDIA | Designed &amp; Developed by <span className="footer-name">Ansh Maurya</span>
          </p>
          <div className="footer-links">
            <button onClick={() => navigateTo('home')} className="footer-link">Home</button>
            <button onClick={() => navigateTo('research')} className="footer-link">Research</button>
            <button onClick={() => navigateTo('spacecraft')} className="footer-link">Spacecraft</button>
            <button onClick={() => navigateTo('dictionary')} className="footer-link">Dictionary</button>
            <button onClick={() => navigateTo('about')} className="footer-link">About</button>
          </div>
          <div style={{ 
            fontFamily: 'Orbitron, sans-serif', 
            fontSize: '0.55rem', 
            letterSpacing: '0.2em', 
            color: 'rgba(0,212,255,0.2)',
            marginTop: '0.5rem'
          }}>
            A PASSION PROJECT FOR SPACE EDUCATION
          </div>
        </div>
      </footer>
    </div>
  );
}
