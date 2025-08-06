import { useEffect, useState } from "react";
import "./styles/LoadingScreen.css";

export const LoadingScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const polygonAnimation = document.querySelector(".hexagon-glow animate");

    if (!polygonAnimation) {
      // Fallback if animation element not found
      const fallbackTimer = setTimeout(() => {
        setShowLetter(true);
        setFadeOut(true);
        setTimeout(onComplete, 400);
      }, 1500);
      return () => clearTimeout(fallbackTimer);
    }

    // Wait for polygon drawing to finish
    const handleEnd = () => {
      // Show "N" after hexagon is drawn
      setShowLetter(true);

      // Wait a bit before fading out
      const fadeTimer = setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 400); // match CSS fade-out
      }, 600); // delay before fade-out
      return () => clearTimeout(fadeTimer);
    };

    polygonAnimation.addEventListener("endEvent", handleEnd);

    return () => {
      polygonAnimation.removeEventListener("endEvent", handleEnd);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="hex-container">
        <svg viewBox="0 0 100 100" className="hex-svg">
          <defs>
            <linearGradient
              id="neonGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
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
              begin="0.3s" 
              fill="freeze"
            />
          </polygon>
        </svg>

        {showLetter && (
          <div className="letter-overlay">
            <span className="hex-letter">N</span>
          </div>
        )}
      </div>
    </div>
  );
};
