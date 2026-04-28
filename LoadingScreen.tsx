import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [count, setCount] = useState(10);
  const [phase, setPhase] = useState(0);

  const phases = [
    'INITIALIZING SYSTEMS...',
    'CALIBRATING SENSORS...',
    'LOADING COSMOS DATABASE...',
    'ESTABLISHING UPLINK...',
    'LAUNCH SEQUENCE READY',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => {
        if (c <= 1) {
          clearInterval(interval);
          return 0;
        }
        return c - 1;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setPhase(p => (p + 1) % phases.length);
    }, 700);
    return () => clearInterval(phaseInterval);
  }, []);

  return (
    <div className="loading-screen">
      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          background: #0a0a0f;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          font-family: 'Orbitron', sans-serif;
          overflow: hidden;
        }
        .loading-stars {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }
        .loading-star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 2s ease-in-out infinite alternate;
        }
        @keyframes twinkle {
          from { opacity: 0.1; transform: scale(0.8); }
          to { opacity: 0.9; transform: scale(1.2); }
        }
        .loading-rings {
          position: relative;
          width: 140px;
          height: 140px;
          margin-bottom: 2rem;
        }
        .ring {
          position: absolute;
          border-radius: 50%;
          border: 2px solid transparent;
        }
        .ring-1 {
          inset: 0;
          border-top-color: #00d4ff;
          animation: spin 1.2s linear infinite;
          box-shadow: 0 0 15px rgba(0,212,255,0.5);
        }
        .ring-2 {
          inset: 16px;
          border-right-color: #fc3d21;
          animation: spin 0.8s linear infinite reverse;
          box-shadow: 0 0 15px rgba(252,61,33,0.4);
        }
        .ring-3 {
          inset: 32px;
          border-bottom-color: #0b3d91;
          animation: spin 1.8s linear infinite;
        }
        .ring-center {
          position: absolute;
          inset: 50px;
          background: radial-gradient(circle, #0b3d91, #0a0a0f);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .loading-title {
          color: #00d4ff;
          font-size: clamp(1.5rem, 4vw, 2.5rem);
          font-weight: 900;
          letter-spacing: 0.2em;
          text-shadow: 0 0 20px rgba(0,212,255,0.8);
          margin-bottom: 0.5rem;
          text-align: center;
        }
        .loading-creator {
          color: rgba(0, 212, 255, 0.5);
          font-size: 0.75rem;
          letter-spacing: 0.2em;
          margin-bottom: 2rem;
        }
        .loading-countdown {
          font-size: 4rem;
          font-weight: 900;
          color: #fc3d21;
          text-shadow: 0 0 30px rgba(252,61,33,0.8);
          line-height: 1;
          margin-bottom: 1rem;
          min-width: 3ch;
          text-align: center;
        }
        .loading-phase {
          color: rgba(0,212,255,0.7);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          height: 1.5rem;
          overflow: hidden;
          text-align: center;
          margin-bottom: 2rem;
        }
        .loading-bar-wrap {
          width: min(400px, 80vw);
          height: 4px;
          background: rgba(0,212,255,0.1);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(0,212,255,0.2);
        }
        .loading-bar {
          height: 100%;
          background: linear-gradient(90deg, #0b3d91, #00d4ff, #fc3d21);
          border-radius: 2px;
          animation: loadingProgress 3.2s ease-in-out forwards;
          box-shadow: 0 0 10px rgba(0,212,255,0.6);
        }
        @keyframes loadingProgress {
          0% { width: 0%; }
          30% { width: 40%; }
          60% { width: 70%; }
          80% { width: 85%; }
          100% { width: 100%; }
        }
        .loading-grid-lines {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .hud-corner-tl, .hud-corner-tr, .hud-corner-bl, .hud-corner-br {
          position: absolute;
          width: 40px;
          height: 40px;
          border-color: rgba(0,212,255,0.4);
          border-style: solid;
        }
        .hud-corner-tl { top: 20px; left: 20px; border-width: 2px 0 0 2px; }
        .hud-corner-tr { top: 20px; right: 20px; border-width: 2px 2px 0 0; }
        .hud-corner-bl { bottom: 20px; left: 20px; border-width: 0 0 2px 2px; }
        .hud-corner-br { bottom: 20px; right: 20px; border-width: 0 2px 2px 0; }
      `}</style>

      <div className="loading-stars">
        {Array.from({ length: 80 }).map((_, i) => (
          <div key={i} className="loading-star" style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${Math.random() * 2 + 1}s`,
          }} />
        ))}
      </div>

      <div className="loading-grid-lines" />
      <div className="hud-corner-tl" /><div className="hud-corner-tr" />
      <div className="hud-corner-bl" /><div className="hud-corner-br" />

      <div className="loading-rings">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
        <div className="ring-center">🚀</div>
      </div>

      <div className="loading-title">COSMOS ENCYCLOPEDIA</div>
      <div className="loading-creator">A Creation by Ansh Maurya</div>
      <div className="loading-countdown">{String(count).padStart(2, '0')}</div>
      <div className="loading-phase">{phases[phase]}</div>

      <div className="loading-bar-wrap">
        <div className="loading-bar" />
      </div>
    </div>
  );
}
