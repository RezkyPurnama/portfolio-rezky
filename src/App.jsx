import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Beranda from "./components/Beranda";
import Kontak from "./components/Kontak";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Beranda />
        <About />
        <Projects />
        <Kontak/>
        <Kontak/>
      </main>
    </div>
  );
}

export default App;
