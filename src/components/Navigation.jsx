import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      {" "}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex justify-between items-center h-16">
          {" "}
          <div className="text-2xl font-bold text-gray-800">
            Rezky Purnama Sarta 
          </div>{" "}
          {/* Menu desktop */}{" "}
          <div className="hidden md:flex space-x-8">
            {" "}
            <button
              onClick={() => scrollToSection("Beranda")}
              className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium"
            >
              {" "}
              Beranda{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium"
            >
              {" "}
              Tentang Saya{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium"
            >
              {" "}
              Projects{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("Kontak")}
              className="text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium"
            >
              {" "}
              Kontak{" "}
            </button>{" "}
          </div>{" "}
          {/* Tombol menu mobile */}{" "}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {" "}
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {/* Menu versi mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          {" "}
          <div className="px-4 py-4 space-y-3">
            {" "}
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium py-2"
            >
              {" "}
              About{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium py-2"
            >
              {" "}
              Projects{" "}
            </button>{" "}
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-green-500 transition-colors duration-300 font-medium py-2"
            >
              {" "}
              Contact{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </nav>
  );
}
