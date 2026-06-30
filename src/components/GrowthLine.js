import React, { useEffect, useRef, useState } from 'react';
import './GrowthLine.css';

// The signature element: a vine that grows down a fixed rail on the left
// edge as the person scrolls the page, with leaf nodes marking how far
// they've travelled — a literal "growth" metaphor for a plant shop.
const GrowthLine = () => {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const scrollTop = doc.scrollTop || document.body.scrollTop;
        const height = (doc.scrollHeight || document.body.scrollHeight) - doc.clientHeight;
        const pct = height > 0 ? Math.min(1, Math.max(0, scrollTop / height)) : 0;
        setProgress(pct);
        ticking.current = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const leafPositions = [0.18, 0.4, 0.62, 0.84];

  return (
    <div className="growth-line" aria-hidden="true">
      <div className="growth-line__rail">
        <div className="growth-line__stem" style={{ height: `${progress * 100}%` }} />
        {leafPositions.map((pos, i) => (
          <span
            key={i}
            className={`growth-line__leaf ${progress >= pos ? 'is-sprouted' : ''}`}
            style={{ top: `${pos * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default GrowthLine;
