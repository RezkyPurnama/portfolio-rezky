import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Beranda");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // 🌙 Cek tema yang tersimpan di localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 🌙 Update class HTML & simpan preferensi
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 🔹 Scroll event → aktifkan highlight & efek navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Beranda", "about", "projects", "Kontak"];
      const scrollPos = window.scrollY + 200;
      setScrolled(window.scrollY > 50);

      for (let section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Fungsi scroll ke section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ease-in-out ${scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-lg py-2"
          : "bg-transparent py-4"
        } animate-slideDown`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center">
        {/* 🌈 Logo */}
        <div
          className="text-xl md:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-emerald-500 to-teal-400 text-transparent bg-clip-text cursor-pointer hover:opacity-90 transition-opacity duration-300"
          onClick={() => scrollToSection("Beranda")}
        >
          Rezky Purnama Sarta
        </div>

        {/* 🖥 Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { id: "Beranda", label: "Beranda" },
            { id: "about", label: "Tentang Saya" },
            { id: "projects", label: "Projects" },
            { id: "Kontak", label: "Kontak" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-sm font-medium transition-all duration-300 group ${activeSection === item.id
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-emerald-500"
                }`}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-500 transition-all duration-300 ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
              ></span>
            </button>
          ))}

          {/* 🌙 Tombol Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* 📱 Tombol Menu Mobile */}
        <button
          className={`md:hidden relative w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? "rotate-90" : ""
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
          ) : (
            <Menu className="text-gray-700 dark:text-gray-300 w-6 h-6" />
          )}
        </button>
      </div>

      {/* 📲 Menu Mobile Dropdown */}
      <div
        className={`md:hidden bg-white/95 dark:bg-gray-900/95 shadow-lg border-t border-gray-200 dark:border-gray-700 transition-all duration-500 overflow-hidden ${isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col items-center space-y-3 py-4">
          {[
            { id: "Beranda", label: "Beranda" },
            { id: "about", label: "Tentang Saya" },
            { id: "projects", label: "Projects" },
            { id: "Kontak", label: "Kontak" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-center py-2 text-base font-medium transition-colors duration-300 ${activeSection === item.id
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-emerald-500"
                }`}
            >
              {item.label}
            </button>
          ))}

          {/* 🌙 Tombol Dark Mode (mobile) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* ✨ Animasi SlideDown */}
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
      `}</style>
    </nav>
  );
}
