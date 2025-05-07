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
      width: `${scroll}%`,
      height: "4px",
      background: "linear-gradient(90deg, #00f2fe, #4facfe)",
      zIndex: 100,
      transition: "width 0.2s"
    }} />
  );
}