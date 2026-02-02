import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative mt-24 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-gray-900 dark:to-gray-800 text-white transition-colors duration-500 overflow-hidden">
            {/* 🔹 Efek Cahaya / Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_70%)] opacity-80 pointer-events-none"></div>

            {/* 🔹 Konten Utama Footer */}
            <div className="max-w-6xl mx-auto px-6 py-16 relative z-10 grid md:grid-cols-3 gap-12 text-center md:text-left">
                {/* Kolom 1 - Brand */}
                <div>
                    <h3 className="text-2xl font-extrabold tracking-wide mb-3">
                        Rezky Purnama Sarta
                    </h3>
                    <p className="text-sm text-emerald-50/90 dark:text-gray-300 leading-relaxed">
                        Web Developer berfokus pada pengembangan sistem berbasis{" "}
                        <span className="font-semibold text-teal-200 dark:text-emerald-400">
                            Laravel & React
                        </span>
                        . Berkomitmen menciptakan solusi digital yang efisien, modern, dan bermanfaat. 🚀
                    </p>
                </div>

                {/* Kolom 2 - Kontak */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-emerald-100 dark:text-emerald-400">
                        Hubungi Saya
                    </h4>
                    <ul className="space-y-3 text-emerald-50 dark:text-gray-300 text-sm">
                        <li className="flex justify-center md:justify-start items-center gap-2 hover:text-emerald-300 transition-all duration-300">
                            <Mail size={18} /> rezkypurnama35@gmail.com
                        </li>
                        <li className="flex justify-center md:justify-start items-center gap-2 hover:text-emerald-300 transition-all duration-300">
                            <a href="tel:+6285375620900" className="flex items-center gap-2">
                                📞 +62 877-6727-8357
                            </a>
                        </li>
                        <li className="flex justify-center md:justify-start items-center gap-2 hover:text-emerald-300 transition-all duration-300">
                            📍 Padang, Sumatera Barat, Indonesia
                        </li>
                    </ul>
                </div>

                {/* Kolom 3 - Sosial Media */}
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-emerald-100 dark:text-emerald-400">
                        Temukan Saya
                    </h4>
                    <div className="flex justify-center md:justify-start gap-6">
                        {[
                            {
                                href: "mailto:rezkypurnama35@gmail.com",
                                icon: <Mail size={22} />,
                                label: "Email",
                            },
                            {
                                href: "https://github.com/rezkypurnama",
                                icon: <Github size={22} />,
                                label: "GitHub",
                            },
                            {
                                href: "https://www.linkedin.com/in/rezky-purnama-sarta-8a4595382/",
                                icon: <Linkedin size={22} />,
                                label: "LinkedIn",
                            },
                            {
                                href: "https://www.instagram.com/_rezkypurnama/",
                                icon: <Instagram size={22} />,
                                label: "Instagram",
                            },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative hover:text-emerald-200 transition-all duration-300"
                                aria-label={social.label}
                            >
                                <div className="p-2 bg-white/10 rounded-full group-hover:bg-emerald-500/20 transition-all duration-300 shadow-md hover:scale-110">
                                    {social.icon}
                                </div>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 text-emerald-50 dark:text-gray-300 transition-all duration-300">
                                    {social.label}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 🔹 Garis Pemisah */}
            <div className="border-t border-emerald-400/30 dark:border-gray-700"></div>

            {/* 🔹 Copyright */}
            <div className="py-5 text-center text-sm text-emerald-50 dark:text-gray-400 tracking-wide">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-teal-200 dark:text-emerald-400">
                    Rezky Purnama Sarta
                </span>
                . All rights reserved. <br className="sm:hidden" />
                
            </div>
        </footer>
    );
}
