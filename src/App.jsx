import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { About} from "./components/sections/about";
import { Skills} from "./components/sections/skills";
import { Projects } from "./components/sections/projects";
import "./index.css";
// import { Contact } from "./components/sections/contact";

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
          <About />
          <Skills/>
          <Projects />
          {/* <Contact /> */}
        </div>
      )}
    </div>
  );
}

export default App;