import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";
import Beranda from "./components/Beranda/Beranda";
import Kontak from "./components/Kontak/Kontak";
import Footer from "./components/Footer/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import BackToTop from "./components/BacktoTop/BackToTop";
import Experience from "./components/Experience/Experience";
import Pendidikan from "./components/Pendidikan/Pendidikan"

function App() {
  return (
    // 🌙 Tambahkan dark:bg-gray-900 biar background berubah
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Navigation />
      <main className="text-gray-800 dark:text-gray-200 transition-colors duration-500">
        <Beranda />
        <About />
        <Pendidikan />
        <Experience />
        <Projects />
        <Kontak />
        <Footer />
        <BackToTop />

      </main>
    </div>
  );
}

export default App;
