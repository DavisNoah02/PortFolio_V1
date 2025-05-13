import { useEffect, useState } from "react";

export const Spotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", update);
    return () => window.removeEventListener("mousemove", update);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
      style={{
        background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.15), transparent 45%)`,
        transition: "background 0.08s ease-out",
        mixBlendMode: "screen", // Optional: makes it glow more naturally
      }}
    />
  );
};
