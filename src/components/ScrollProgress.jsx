import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(height ? (scrolled / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
      zIndex: 100,
      pointerEvents: "none"
    }}>
      <div
        style={{
          width: `${scroll}%`,
          height: "50%",
          borderRadius: "0 8px 8px 0",
          background: "linear-gradient(90deg, #00f2fe 0%, #4facfe 50%, #43e97b 100%)",
          boxShadow: "0 2px 8px 0 rgba(79,172,254,0.2)",
          transition: "width 0.2s cubic-bezier(.4,2,.6,1)",
          willChange: "width"
        }}
      />
    </div>
  );
}