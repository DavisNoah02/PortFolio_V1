import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, direction = "down", delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("opacity-100", "translate-y-0", "translate-x-0");
          node.classList.remove("opacity-0");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (node) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // direction styles
  let translateClass = "translate-y-8"; // default is up
  if (direction === "down") translateClass = "-translate-y-8";
  if (direction === "left") translateClass = "translate-x-8";
  if (direction === "right") translateClass = "-translate-x-8";

  const style = {
    transitionDelay: `${delay}s`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`opacity-0 ${translateClass} transition-all duration-700 ease-out`}
    >
      {children}
    </div>
  );
};
