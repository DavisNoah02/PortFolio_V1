import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Skills} from "./components/sections/skills";
import { Education } from "./components/sections/education";
import ParticlesBackground from "./components/ParticlesBackground";
// import { loadFull } from "tsparticles";
// import Particles from "react-tsparticles";
import { About } from "./components/sections/about";
import { Services } from "./components/sections/services";
import { Projects } from "./components/sections/projects";
import "./index.css";
import { Contact } from "./components/sections/contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const renderParticleJsInHomePage = location.pathname === "/";

  return (
    
    <div className="min-h-screen bg-gray-900 text-gray-100">
       
      <ParticlesBackground />
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="transition-opacity duration-700 opacity-100">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <About />
          <Skills/>
          <Services/>
          <Projects />
          <Education/>
          <Contact />

        </div>
      )}
    </div>
  );
}

export default App;