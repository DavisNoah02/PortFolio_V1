import { useState, useEffect, lazy, Suspense } from "react";
import CookieConsent from "react-cookie-consent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

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
  const [showCookie, setShowCookie] = useState(false);

  //  Welcome modal logic (first visit only)
  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
      setTimeout(() => setShowWelcome(true), 5000); // Show modal after 5s
      setTimeout(() => setShowWelcome(false), 18000); // Auto-close after 15s
    }
  }, []);

  //  Cookie consent after 20s
  useEffect(() => {
    const cookieTimer = setTimeout(() => {
      setShowCookie(true);
    }, 20000); // 20 seconds
    return () => clearTimeout(cookieTimer);
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
  }, [isLoaded]);

  return (
    <div className="min-h-screen text-gray-100 relative">
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
            <Suspense fallback={<Spinner message="Loading sections..." />}>
              <Hero />
              <About />
              <Skills />
              <Services />
              <Projects />
              <Certifications />
              <Education />
              <Contact />
            </Suspense>
            <WhatsAppButton />
            <Footer />
            <Socials />
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

          {/* Cookie Consent (delayed 20s) */}
         {showCookie && (
            <div className="fixed right-4 bottom-18 z-50 max-w-[500px] w-fit">
              <div
                className="relative flex flex-col gap-2 min-w-[240px] max-w-[500px] p-4 rounded-[18px] border-2 border-blue-500 bg-white/70 text-[#6b3a00] shadow-lg backdrop-blur hover:bg-white/90 transition-all duration-300 cursor-pointer"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowCookie(false)}
                  className="absolute top-3 right-4 text-2xl font-bold text-[#6b3a00] hover:text-red-700 focus:outline-none"
                  aria-label="Close cookie consent"
                >
                  ×
                </button>

                <div className="font-bold text-base text-center">
                  I started my own Web Development Agency!
                </div>

                <div className="text-sm text-left">
                  If you're looking for an affordable, stunning website tailored to your needs,{' '}
                  <a
                    href="https://noa-dave.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline font-medium hover:text-blue-800"
                  >
                    visit my agency
                  </a>{' '}
                  and book a consultation call!
                </div>
              </div>
            </div>
          )}



        </>
      )}
    </div>
  );
}

export default App;
