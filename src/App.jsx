
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useState, useEffect } from "react";
import "./App.css";

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
import { ScrollProgress } from "./components/ScrollProgress"; // <-- Add this line

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  // Show welcome modal after loading
  useEffect(() => {
    if (isLoaded) {
      const welcomeTimeout = setTimeout(() => setShowWelcome(true), 500); // 0.5s delay
      const closeTimeout = setTimeout(() => setShowWelcome(false), 15500); // show for 15s

      return () => {
        clearTimeout(welcomeTimeout);
        clearTimeout(closeTimeout);
      };
    }
  }, [isLoaded]);

  // Scroll to hash if present after load
  useEffect(() => {
    if (isLoaded && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [isLoaded]);

  // Disable background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = showWelcome ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [showWelcome]);

  return (
    <div className="min-h-screen text-gray-100  relative">
      <ScrollProgress /> 
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          {/* Spotlight cursor effect */}
          <Spotlight />

          {/* Main content, blurred when welcome modal is shown */}
          <div
            className={`transition-all duration-500 ${
              showWelcome
                ? "blur-sm opacity-30 pointer-events-none select-none"
                : "opacity-100"
            }`}
          >
            <Analytics />
            <SpeedInsights/>
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
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

          {/* Modal overlays everything */}
          {showWelcome && (
            <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-60">
              <WelcomeModal open={showWelcome} onClose={() => setShowWelcome(false)} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;