import { useState, useEffect } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Skills } from "./components/sections/skills";
import { Education } from "./components/sections/education";
// import {ParticlesBackground} from "./components/ParticlesBackground";
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";
import { About } from "./components/sections/about";
import { WelcomeModal } from "./components/WelcomeModal";
import { Socials } from "./components/socials";
import { Services } from "./components/sections/services";
import { Projects } from "./components/sections/projects";
import { Certifications } from "./components/sections/certifications";
import "./index.css";
import { Contact } from "./components/sections/contact";
import { Footer } from "./components/footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

// ...existing imports...

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false); // Initially don't show

  // Handle loading and delayed welcome modal
  useEffect(() => {
    if (isLoaded) {
      // Show welcome modal shortly after loading (500ms delay)
      const welcomeTimeout = setTimeout(() => {
        setShowWelcome(true);
      }, 500);

      // Auto-close the welcome modal after 5 seconds
      const closeTimeout = setTimeout(() => {
        setShowWelcome(false);
      }, 20500); // Show for 25 seconds total

      return () => {
        clearTimeout(welcomeTimeout);
        clearTimeout(closeTimeout);
      };
    }
  }, [isLoaded]);

  // Scroll to hash on load after loading screen
  useEffect(() => {
    if (isLoaded && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isLoaded]);

  // Prevent background scroll and interaction when modal is open
  useEffect(() => {
    if (showWelcome) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showWelcome]);

  return (
    <div className="min-h-screen text-gray-100">
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          {/* When modal is open, apply blur and prevent pointer events */}
          <div className={`transition-opacity duration-500 ${showWelcome ? 'opacity-30 blur-sm pointer-events-none select-none' : 'opacity-100'}`}>
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
          
          {/* Modal overlay blocks all interaction */}
          {showWelcome && (
            <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50">
              <WelcomeModal open={showWelcome} onClose={() => setShowWelcome(false)} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;