import { useEffect, useState } from "react";
import "./styles/LoadingScreen.css";

export const LoadingScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const entryTime = 1200; // Time to play entry animation
    const exitTime = 600;   // Time to play exit animation

    const entryTimer = setTimeout(() => {
      setFadeOut(true); // Trigger exit animation
    }, entryTime);

    const exitTimer = setTimeout(() => {
      onComplete(); // Unmount
    }, entryTime + exitTime);

    return () => {
      clearTimeout(entryTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="hex-container">
        <svg viewBox="0 0 100 100" className="hex-svg">
          <defs>
            <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="mediumspringgreen" />
              <stop offset="100%" stopColor="lightseagreen" />
            </linearGradient>
          </defs>
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            fill="none"
            stroke="url(#neonGradient)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeDasharray="300"
            strokeDashoffset="300"
            className="hexagon-glow"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="300"
              to="0"
              dur="1s"
              fill="freeze"
            />
          </polygon>
        </svg>

        <div className="letter-overlay">
          <span className="hex-letter">N</span>
        </div>
      </div>
    </div>
  );
};
