import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => setVisible(window.scrollY > 300);
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ${visible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75 pointer-events-none"
                }`}
        >
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="
          p-4 md:p-5 
          rounded-full 
          bg-gradient-to-br from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600
          backdrop-blur-sm bg-opacity-70
          text-white 
          shadow-lg shadow-emerald-500/40
          hover:shadow-xl hover:shadow-emerald-500/60
          transform transition-transform duration-300 
          hover:scale-110
          focus:outline-none focus:ring-4 focus:ring-emerald-300
        "
            >
                <FaChevronUp className="animate-bounce-slow" size={24} />
            </button>
        </div>
    );
}
