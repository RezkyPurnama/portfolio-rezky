import { Menu, X, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Beranda");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // 🌙 Load theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // 🌙 Toggle theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // 🔹 Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Beranda", "about", "projects", "Kontak"];
      const scrollPos = window.scrollY + 200;
      setScrolled(window.scrollY > 40);

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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const menuItems = [
    { id: "Beranda", label: "Beranda" },
    { id: "about", label: "Tentang Saya" },
    { id: "projects", label: "Projects" },
    { id: "Kontak", label: "Kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 ${scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md py-2.5"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center">
        {/* 🌈 Logo */}
        <div
          onClick={() => scrollToSection("Beranda")}
          className="
            cursor-pointer font-extrabold tracking-wide
            text-lg sm:text-xl md:text-2xl
            bg-gradient-to-r from-emerald-500 to-teal-400
            text-transparent bg-clip-text
            hover:opacity-90 transition
          "
        >
          Rezky Purnama Sarta
        </div>

        {/* 🖥 Desktop Menu */}
        <div className="hidden md:flex items-center space-x-7">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-medium transition-all duration-300
                text-sm lg:text-base
                ${activeSection === item.id
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-emerald-500"
                }
              `}
            >
              {item.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-emerald-500 transition-all duration-300
                  ${activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }
                `}
              />
            </button>
          ))}

          {/* 🌙 Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              w-9 h-9 rounded-full flex items-center justify-center
              bg-gray-100 dark:bg-gray-800
              text-gray-700 dark:text-yellow-400
              hover:bg-gray-200 dark:hover:bg-gray-700
              transition
            "
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* 📱 Mobile Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-8 h-8 flex items-center justify-center"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-emerald-600" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </div>

      {/* 📲 Mobile Menu */}
      <div
        className={`md:hidden fixed top-[64px] right-4 w-56 rounded-xl
          bg-white dark:bg-gray-900 border dark:border-gray-700 shadow-lg
          transition-all duration-300
          ${isMenuOpen ? "opacity-100 scale-100 py-3" : "opacity-0 scale-95 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-2 px-3">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`py-2 rounded-lg text-base font-medium transition
                ${activeSection === item.id
                  ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-600"
                  : "text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-800"
                }
              `}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 mx-auto mt-2 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
