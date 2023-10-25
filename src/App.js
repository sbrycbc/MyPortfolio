import Navbar from "./components/Navbar";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About";
import Skills from "./components/Skills";
import Work from "../src/components/work/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
