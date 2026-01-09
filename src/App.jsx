import { useState, useEffect, lazy, Suspense, useMemo } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRef } from "react";

import "./App.css";
import { Spotlight } from "./components/Spotlight";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { WelcomeModal } from "./components/WelcomeModal";
import { Socials } from "./components/socials";
import { Footer } from "./components/footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollProgress } from "./components/ScrollProgress";
import { Spinner } from "./components/Spinner";

const Hero = lazy(() => import("./components/sections/Hero").then(module => { return { default: module.Hero }; }));
const About = lazy(() => import("./components/sections/about").then(module => { return { default: module.About }; }));
const Skills = lazy(() => import("./components/sections/skills").then(module => { return { default: module.Skills }; }));
const Services = lazy(() => import("./components/sections/services").then(module => { return { default: module.Services }; }));
const Projects = lazy(() => import("./components/sections/projects").then(module => { return { default: module.Projects }; }));
const Certifications = lazy(() => import("./components/sections/certifications").then(module => { return { default: module.Certifications }; }));
const Education = lazy(() => import("./components/sections/education").then(module => { return { default: module.Education }; }));
const Contact = lazy(() => import("./components/sections/contact").then(module => { return { default: module.Contact }; }));

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const sectionIds = useMemo(() => [
    "hero",
    "about",
    "skills",
    "services",
    "projects",
    "certifications",
    "education",
    "contact",
  ], []);

  //  Welcome modal logic (first visit only)
  useEffect(() => {
    try {
      const hasVisited = localStorage.getItem("hasVisited");
      if (!hasVisited) {
        localStorage.setItem("hasVisited", "true");
        setTimeout(() => setShowWelcome(true), 5000);
        setTimeout(() => setShowWelcome(false), 18000);
      }
    } catch {
      // If localStorage fails, show modal anyway
      setShowWelcome(true);
    }
  }, []);

  // Prevent scroll during welcome modal
  useEffect(() => {
    document.body.style.overflow = showWelcome ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [showWelcome]);

  // Scroll to hash if present
  useEffect(() => {
    if (isLoaded && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoaded, sectionIds]);

  
  const observerRef = useRef(null);

  // Intersection Observer to update hash on scroll
  useEffect(() => {
    if (!isLoaded) return;
    // Only run on desktop
    if (window.innerWidth < 768) return;
    let observer;
    let rafId;
    function setupObserver() {
      const handleHashUpdate = (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topSection = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          const id = topSection.target.id;
          if (id && window.location.hash !== `#${id}`) {
            history.replaceState(null, "", `#${id}`);
          }
        }
      };
      observer = new window.IntersectionObserver(handleHashUpdate, {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.4,
      });
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
      observerRef.current = observer;
    }
    // Wait for next animation frame to ensure all sections are in DOM
    rafId = requestAnimationFrame(setupObserver);
    return () => {
      if (observer) observer.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isLoaded, sectionIds]);

  return (
    <div className="text-gray-100 relative overflow-x-hidden">
      <ScrollProgress />

      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <Spotlight />

          {/* Main Content */}
          <div
            className={`transition-all duration-500 ${
              showWelcome
                ? "blur-sm opacity-30 pointer-events-none select-none"
                : "opacity-100"
            }`}
          >
            <Analytics />
            <SpeedInsights />
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Suspense fallback={<Spinner />}>
              <Hero />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Certifications />
              <Education />
              <Contact />
              <WhatsAppButton />
              <Footer />
              <Socials />
            </Suspense>
          </div>

          {/* Welcome Modal */}
          {showWelcome && (
            <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-60 p-4">
              <WelcomeModal
                open={showWelcome}
                onClose={() => setShowWelcome(false)}
              />
            </div>
          )}

        </>
      )}
    </div>
  );
}

export default App;
