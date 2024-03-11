
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/about";
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Certification/>
      <Contact/>
    </div>
  );
}
export default App;
