import { useMemo } from 'react';

export default function Background() {
  const stars = useMemo(() => Array.from({ length: 70 }, (_, index) => index), []);

  return (
    <div className="background" aria-hidden="true">
      <div className="background-gradient" />
      <div className="grid" />
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="scanline" />
      <div className="noise" />
      <div className="stars">
        {stars.map((star) => <span key={star} style={{ '--i': star }} />)}
      </div>
    </div>
  );
}
