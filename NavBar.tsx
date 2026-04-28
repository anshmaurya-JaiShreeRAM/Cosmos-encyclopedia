import { useState, useEffect } from 'react';

type Page = 'home' | 'research' | 'spacecraft' | 'dictionary' | 'about';

interface NavBarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const navItems: { id: Page; label: string; icon: string }[] = [
  { id: 'home', label: 'HOME', icon: '⬡' },
  { id: 'research', label: 'RESEARCH', icon: '◈' },
  { id: 'spacecraft', label: 'SPACECRAFT', icon: '◉' },
  { id: 'dictionary', label: 'LEXICON', icon: '◆' },
  { id: 'about', label: 'ABOUT', icon: '◇' },
];

export default function NavBar({ currentPage, navigateTo }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.4s ease;
          font-family: 'Orbitron', sans-serif;
        }
        .navbar-scrolled {
          background: rgba(10,10,15,0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0,212,255,0.15);
          padding: 0.7rem 2rem;
          box-shadow: 0 4px 30px rgba(0,0,0,0.5);
        }
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: none;
        }
        .nav-logo-emblem {
          width: 42px;
          height: 42px;
          background: linear-gradient(135deg, #0b3d91, #00d4ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          border: 2px solid rgba(0,212,255,0.5);
          box-shadow: 0 0 15px rgba(0,212,255,0.4);
          position: relative;
          overflow: hidden;
        }
        .nav-logo-emblem::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.1) 100%);
          border-radius: 50%;
        }
        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .nav-logo-title {
          color: #00d4ff;
          font-size: 0.9rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-shadow: 0 0 10px rgba(0,212,255,0.5);
        }
        .nav-logo-sub {
          color: rgba(0,212,255,0.45);
          font-size: 0.55rem;
          letter-spacing: 0.12em;
          font-family: 'Exo 2', sans-serif;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
        }
        .nav-link-btn {
          background: none;
          border: none;
          color: rgba(232,244,253,0.7);
          font-family: 'Orbitron', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          padding: 8px 14px;
          cursor: none;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          border-radius: 4px;
        }
        .nav-link-btn .nav-icon {
          font-size: 0.8rem;
          opacity: 0.7;
        }
        .nav-link-btn:hover {
          color: #00d4ff;
        }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 14px;
          right: 14px;
          height: 1px;
          background: #00d4ff;
          transform: scaleX(0);
          transition: transform 0.3s ease;
          box-shadow: 0 0 5px rgba(0,212,255,0.8);
        }
        .nav-link-btn:hover::after,
        .nav-link-btn.active::after {
          transform: scaleX(1);
        }
        .nav-link-btn.active {
          color: #00d4ff;
          background: rgba(0,212,255,0.08);
        }
        .nav-by {
          color: rgba(0,212,255,0.25);
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          white-space: nowrap;
          padding-left: 1rem;
          border-left: 1px solid rgba(0,212,255,0.15);
          font-family: 'Exo 2', sans-serif;
        }
        .nav-hamburger {
          display: none;
          background: none;
          border: 1px solid rgba(0,212,255,0.3);
          color: #00d4ff;
          width: 38px;
          height: 38px;
          border-radius: 4px;
          cursor: none;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .ham-line {
          width: 20px;
          height: 2px;
          background: #00d4ff;
          border-radius: 1px;
          transition: all 0.3s ease;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10,10,15,0.97);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          animation: fadeIn 0.3s ease;
        }
        .mobile-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: 1px solid rgba(252,61,33,0.4);
          color: #fc3d21;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          cursor: none;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-nav-btn {
          background: none;
          border: 1px solid rgba(0,212,255,0.2);
          color: rgba(232,244,253,0.8);
          font-family: 'Orbitron', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.2em;
          padding: 1rem 3rem;
          cursor: none;
          transition: all 0.3s ease;
          width: 260px;
          text-align: center;
          border-radius: 4px;
        }
        .mobile-nav-btn.active,
        .mobile-nav-btn:hover {
          background: rgba(0,212,255,0.1);
          border-color: #00d4ff;
          color: #00d4ff;
          box-shadow: 0 0 20px rgba(0,212,255,0.2);
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 860px) {
          .nav-links, .nav-by { display: none; }
          .nav-hamburger { display: flex; }
        }
        @media (max-width: 480px) {
          .navbar { padding: 0.8rem 1rem; }
        }
      `}</style>

      <div className="nav-logo" onClick={() => navigateTo('home')}>
        <div className="nav-logo-emblem">🚀</div>
        <div className="nav-logo-text">
          <span className="nav-logo-title">COSMOS</span>
          <span className="nav-logo-sub">ENCYCLOPEDIA · by Ansh Maurya</span>
        </div>
      </div>

      <ul className="nav-links">
        {navItems.map(item => (
          <li key={item.id}>
            <button
              className={`nav-link-btn ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => navigateTo(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <span className="nav-by">by Ansh Maurya</span>

      <button className="nav-hamburger" onClick={() => setMenuOpen(true)}>
        <span className="ham-line" />
        <span className="ham-line" />
        <span className="ham-line" />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
          <div className="nav-logo-title" style={{ fontSize: '1.2rem', color: '#00d4ff', letterSpacing: '0.2em', marginBottom: '1rem' }}>
            COSMOS ENCYCLOPEDIA
          </div>
          {navItems.map(item => (
            <button
              key={item.id}
              className={`mobile-nav-btn ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => { navigateTo(item.id); setMenuOpen(false); }}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
