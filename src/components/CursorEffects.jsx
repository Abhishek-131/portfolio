import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, .glass-card, .cert-card, [data-cursor-hover]';
const MAGNETIC_SELECTOR = 'a, button, [data-magnetic]';
const MAX_PARTICLES = 14;
const MAX_RIPPLES = 5;
const MAX_BUBBLES = 7;

export default function CursorEffects() {
  const followerRef = useRef(null);
  const glowRef = useRef(null);
  const spotlightRef = useRef(null);
  const targetRef = useRef({ x: -120, y: -120 });
  const currentRef = useRef({ x: -120, y: -120 });
  const lastEffectRef = useRef({ x: -120, y: -120, time: 0 });
  const magneticRef = useRef(null);
  const rafRef = useRef(null);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [particles, setParticles] = useState([]);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsFinePointer(finePointer);

    if (finePointer) {
      document.body.classList.add('cursor-effects-ready');
    }

    const setCursorVars = (x, y) => {
      followerRef.current?.style.setProperty('--cursor-x', `${x}px`);
      followerRef.current?.style.setProperty('--cursor-y', `${y}px`);
      glowRef.current?.style.setProperty('--cursor-x', `${x}px`);
      glowRef.current?.style.setProperty('--cursor-y', `${y}px`);
      spotlightRef.current?.style.setProperty('--cursor-x', `${x}px`);
      spotlightRef.current?.style.setProperty('--cursor-y', `${y}px`);
    };

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.15;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.15;
      setCursorVars(currentRef.current.x, currentRef.current.y);
      rafRef.current = window.requestAnimationFrame(animate);
    };

    const clearMagnetic = () => {
      if (magneticRef.current) {
        magneticRef.current.style.transform = '';
        magneticRef.current = null;
      }
    };

    const pushTimedItem = (setter, item, max, lifetime) => {
      setter((items) => [...items.slice(-(max - 1)), item]);
      window.setTimeout(() => {
        setter((items) => items.filter((existing) => existing.id !== item.id));
      }, lifetime);
    };

    const createEffects = (x, y) => {
      const now = performance.now();
      const last = lastEffectRef.current;
      const distance = Math.hypot(x - last.x, y - last.y);

      if (now - last.time < (reducedMotion ? 140 : 34) || distance < 12) return;

      pushTimedItem(
        setParticles,
        {
          id: `particle-${now}`,
          x,
          y,
          size: 4 + Math.random() * 5,
          driftX: (Math.random() - 0.5) * 64,
          driftY: (Math.random() - 0.5) * 64,
          hue: Math.random() > 0.5 ? 'cyan' : 'blue',
        },
        MAX_PARTICLES,
        1050,
      );

      if (!reducedMotion && distance > 24) {
        pushTimedItem(
          setBubbles,
          {
            id: `bubble-${now}`,
            x: x + (Math.random() - 0.5) * 34,
            y: y + (Math.random() - 0.5) * 34,
            size: 26 + Math.random() * 42,
            driftX: (Math.random() - 0.5) * 82,
            driftY: -34 - Math.random() * 48,
          },
          MAX_BUBBLES,
          1550,
        );
      }

      if (now - last.time > (reducedMotion ? 240 : 90) && distance > 30) {
        pushTimedItem(setRipples, { id: `ripple-${now}`, x, y }, MAX_RIPPLES, 980);
        lastEffectRef.current = { x, y, time: now };
      }
    };

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      targetRef.current = { x: clientX, y: clientY };
      createEffects(clientX, clientY);

      if (!finePointer) return;

      const interactive = event.target.closest(INTERACTIVE_SELECTOR);
      setIsHovering(Boolean(interactive));

      const magnetic = event.target.closest(MAGNETIC_SELECTOR);
      if (!magnetic) {
        clearMagnetic();
        return;
      }

      if (magneticRef.current && magneticRef.current !== magnetic) {
        clearMagnetic();
      }

      magneticRef.current = magnetic;
      const rect = magnetic.getBoundingClientRect();
      const offsetX = (clientX - (rect.left + rect.width / 2)) * 0.11;
      const offsetY = (clientY - (rect.top + rect.height / 2)) * 0.11;
      magnetic.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    };

    const handlePointerDown = (event) => {
      pushTimedItem(setRipples, { id: `tap-${performance.now()}`, x: event.clientX, y: event.clientY }, MAX_RIPPLES, 980);
    };

    const handlePointerLeave = () => {
      setIsHovering(false);
      clearMagnetic();
    };

    rafRef.current = window.requestAnimationFrame(animate);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      document.body.classList.remove('cursor-effects-ready');
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerleave', handlePointerLeave);
      clearMagnetic();
    };
  }, []);

  return (
    <>
      <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      {isFinePointer && (
        <div
          ref={followerRef}
          className={`cursor-follower ${isHovering ? 'cursor-follower-active' : ''}`}
          aria-hidden="true"
        />
      )}

      <div className="pointer-events-none fixed inset-0 z-[9998] overflow-hidden" aria-hidden="true">
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ opacity: 0.55, scale: 0.08 }}
              animate={{ opacity: 0, scale: 2.25 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.95, ease: 'easeOut' }}
              className="absolute h-28 w-28 rounded-full border border-cyan-300/45 shadow-[0_0_46px_rgba(59,130,246,0.48)]"
              style={{ left: ripple.x - 56, top: ripple.y - 56 }}
            />
          ))}

          {bubbles.map((bubble) => (
            <motion.span
              key={bubble.id}
              initial={{ opacity: 0.28, x: bubble.x, y: bubble.y, scale: 0.45 }}
              animate={{ opacity: 0, x: bubble.x + bubble.driftX, y: bubble.y + bubble.driftY, scale: 1.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.35, ease: 'easeOut' }}
              className="absolute rounded-full border border-cyan-200/35 bg-cyan-300/15 shadow-[0_0_34px_rgba(34,211,238,0.34)] backdrop-blur-sm"
              style={{ width: bubble.size, height: bubble.size }}
            />
          ))}

          {particles.map((particle) => (
            <motion.span
              key={particle.id}
              initial={{ opacity: 0.78, x: particle.x, y: particle.y, scale: 1 }}
              animate={{ opacity: 0, x: particle.x + particle.driftX, y: particle.y + particle.driftY, scale: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.82, ease: 'easeOut' }}
              className={`absolute rounded-full ${
                particle.hue === 'cyan'
                  ? 'bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.85)]'
                  : 'bg-blue-300 shadow-[0_0_16px_rgba(96,165,250,0.85)]'
              }`}
              style={{ width: particle.size, height: particle.size }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
