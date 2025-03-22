import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Skills} from "./components/sections/skills";
import { Education } from "./components/sections/education";
import { Services } from "./components/sections/services";
import { Home } from "./components/sections/home";
import { Projects } from "./components/sections/projects";
import "./index.css";
import { Contact } from "./components/sections/contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="transition-opacity duration-700 opacity-100">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <Skills/>
          <Services/>
          <Education/>
          <Projects />
          <Contact />

        </div>
      )}
    </div>
  );
}

export default App;