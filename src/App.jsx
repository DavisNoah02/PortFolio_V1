import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "./App.css";
import { Hero } from "./components/sections/Hero";
import { Spotlight } from "./components/Spotlight";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Skills } from "./components/sections/skills";
import { Education } from "./components/sections/education";
import { About } from "./components/sections/about";
import { WelcomeModal } from "./components/WelcomeModal";
import { Socials } from "./components/socials";
import { Services } from "./components/sections/services";
import { Projects } from "./components/sections/projects";
import { Certifications } from "./components/sections/certifications";
import { Contact } from "./components/sections/contact";
import { Footer } from "./components/footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { ScrollProgress } from "./components/ScrollProgress";

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
            <div
              className="fixed right-4 bottom-8 z-50 "
              style={{ width: 'fit-content', maxWidth: 500 }}
            >
              <div
                style={{
                  background: 'rgba(250, 250, 250, 0.65)',
                  color: '#6b3a00',
                  border: '2px solid #2196f3',
                  borderRadius: '18px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)',
                 
                  padding: '1rem 1rem 1rem 1rem',
                  position: 'relative',
                  minWidth: 240,
                  maxWidth: 500,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  
                }}
                className="cookie-box"
              >
                {/* Close button */}
                <button
                  onClick={() => setShowCookie(false)}
                  style={{
                    position: 'absolute',
                    top: 12,
                    right: 16,
                    background: 'none',
                    border: 'none',
                    fontSize: 22,
                    color: '#6b3a00',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                  aria-label="Close cookie consent"
                >
                  ×
                </button>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 1, color: '#6b3a00', textAlign: 'center' }}>
                  I started my own Web Development Agency!
                </div>
                <div style={{ fontSize: '0.8rem', color: '#6b3a00', marginBottom: 1 , textAlign: 'left' }}>
                  If you're looking for an affordable, stunning website tailored to your needs,{' '}
                  <a
                    href="https://noa-dave.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: 'blue',  textDecoration: 'underline', fontWeight: 500 }}
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
