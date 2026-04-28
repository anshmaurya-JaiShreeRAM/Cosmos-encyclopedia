import { useEffect, useRef } from 'react';

export default function EarthScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      const size = Math.min(canvas.parentElement?.offsetWidth ?? 400, 420);
      canvas.width = size;
      canvas.height = size;
    };
    resize();

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const cx = W / 2;
      const cy = H / 2;
      const R = W * 0.35;

      ctx.clearRect(0, 0, W, H);

      // Glow behind Earth
      const glow = ctx.createRadialGradient(cx, cy, R * 0.5, cx, cy, R * 1.6);
      glow.addColorStop(0, 'rgba(11, 61, 145, 0.15)');
      glow.addColorStop(0.5, 'rgba(0, 212, 255, 0.06)');
      glow.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.6, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Earth atmosphere glow
      const atmo = ctx.createRadialGradient(cx, cy, R * 0.9, cx, cy, R * 1.15);
      atmo.addColorStop(0, 'rgba(0, 212, 255, 0.0)');
      atmo.addColorStop(0.5, 'rgba(0, 150, 255, 0.12)');
      atmo.addColorStop(1, 'rgba(0, 212, 255, 0.0)');
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.15, 0, Math.PI * 2);
      ctx.fillStyle = atmo;
      ctx.fill();

      // Clip to Earth circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      // Ocean base
      const ocean = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, 0, cx, cy, R);
      ocean.addColorStop(0, '#1a5fa8');
      ocean.addColorStop(0.6, '#0d3d7a');
      ocean.addColorStop(1, '#081f3d');
      ctx.fillStyle = ocean;
      ctx.fillRect(0, 0, W, H);

      // Land masses (simplified continents)
      const shift = (t * 0.3) % (Math.PI * 2);
      ctx.fillStyle = '#2d6e3e';

      // Americas
      const drawContinent = (points: number[][], shiftAmt: number) => {
        ctx.beginPath();
        points.forEach(([px, py], i) => {
          const nx2 = cx + (Math.cos(shiftAmt) * (px - cx));
          if (i === 0) ctx.moveTo(nx2, cy + (py - cy));
          else ctx.lineTo(nx2, cy + (py - cy));
        });
        ctx.closePath();
        ctx.fill();
      };

      const s = R / 100;
      // Simplified continent blobs that rotate
      const continents = [
        // Americas
        [[cx - 30*s, cy - 20*s], [cx - 10*s, cy - 35*s], [cx + 5*s, cy - 15*s],
         [cx + 5*s, cy + 20*s], [cx - 10*s, cy + 30*s], [cx - 25*s, cy + 15*s]],
        // Europe/Africa
        [[cx + 20*s, cy - 30*s], [cx + 40*s, cy - 20*s], [cx + 45*s, cy + 10*s],
         [cx + 30*s, cy + 40*s], [cx + 15*s, cy + 20*s], [cx + 10*s, cy - 10*s]],
        // Asia
        [[cx + 40*s, cy - 40*s], [cx + 80*s, cy - 30*s], [cx + 85*s, cy + 0*s],
         [cx + 60*s, cy + 15*s], [cx + 45*s, cy + 0*s]],
        // Australia
        [[cx + 55*s, cy + 20*s], [cx + 70*s, cy + 15*s], [cx + 72*s, cy + 35*s],
         [cx + 60*s, cy + 38*s]],
      ];

      continents.forEach(c => drawContinent(c, shift));

      // Ice caps
      const iceCap = ctx.createLinearGradient(cx, cy - R, cx, cy - R * 0.7);
      iceCap.addColorStop(0, 'rgba(255,255,255,0.9)');
      iceCap.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = iceCap;
      ctx.beginPath();
      ctx.arc(cx, cy - R * 0.85, R * 0.35, 0, Math.PI * 2);
      ctx.fill();

      // Cloud layer (semi-transparent white patches)
      ctx.fillStyle = 'rgba(255,255,255,0.12)';
      const cloudPhase = t * 0.15;
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + cloudPhase;
        const cr = R * (0.3 + Math.sin(i * 1.5) * 0.25);
        const ccx = cx + Math.cos(angle) * cr;
        const ccy = cy + Math.sin(angle) * cr * 0.5;
        ctx.beginPath();
        ctx.ellipse(ccx, ccy, R * 0.35, R * 0.08, angle, 0, Math.PI * 2);
        ctx.fill();
      }

      // Lighting (sun from top-right)
      const light = ctx.createRadialGradient(cx + R * 0.4, cy - R * 0.4, 0, cx, cy, R);
      light.addColorStop(0, 'rgba(255,255,200,0.0)');
      light.addColorStop(0.6, 'rgba(0,0,0,0.0)');
      light.addColorStop(1, 'rgba(0,0,0,0.55)');
      ctx.fillStyle = light;
      ctx.fillRect(0, 0, W, H);

      ctx.restore();

      // Orbit ring for moon
      ctx.beginPath();
      ctx.ellipse(cx, cy, R * 1.55, R * 0.4, -0.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 212, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Moon
      const moonAngle = t * 0.4;
      const moonX = cx + Math.cos(moonAngle) * R * 1.55;
      const moonY = cy + Math.sin(moonAngle) * R * 0.4;
      const moonR = R * 0.12;

      // Moon glow
      const moonGlow = ctx.createRadialGradient(moonX, moonY, 0, moonX, moonY, moonR * 2.5);
      moonGlow.addColorStop(0, 'rgba(200,200,180,0.15)');
      moonGlow.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = moonGlow;
      ctx.fill();

      // Moon body
      const moonGrad = ctx.createRadialGradient(moonX - moonR * 0.3, moonY - moonR * 0.3, 0, moonX, moonY, moonR);
      moonGrad.addColorStop(0, '#d0d0c0');
      moonGrad.addColorStop(0.7, '#909080');
      moonGrad.addColorStop(1, '#505048');
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
      ctx.fillStyle = moonGrad;
      ctx.fill();

      // Moon craters
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.beginPath();
      ctx.arc(moonX + moonR * 0.2, moonY - moonR * 0.1, moonR * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(moonX - moonR * 0.25, moonY + moonR * 0.2, moonR * 0.15, 0, Math.PI * 2);
      ctx.fill();

      // ISS dot
      const issAngle = t * 1.2 + Math.PI * 0.7;
      const issX = cx + Math.cos(issAngle) * R * 1.18;
      const issY = cy + Math.sin(issAngle) * R * 0.3;
      ctx.beginPath();
      ctx.arc(issX, issY, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#00d4ff';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(issX, issY, 7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0,212,255,0.2)';
      ctx.fill();

      t += 0.012;
      animId = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}
    />
  );
}
