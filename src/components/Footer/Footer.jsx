import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative mt-20 sm:mt-24 bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-gray-900 dark:to-gray-800 text-white transition-colors duration-500 overflow-hidden">

            {/* 🔹 Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_70%)] opacity-80 pointer-events-none"></div>

            {/* 🔹 Konten Utama */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center md:text-left">

                {/* 🔸 Brand */}
                <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-wide">
                        Rezky Purnama Sarta
                    </h3>
                    <p className="text-sm text-emerald-50/90 dark:text-gray-300 leading-loose">
                        Web Developer berfokus pada pengembangan sistem berbasis{" "}
                        <span className="font-semibold text-teal-200 dark:text-emerald-400">
                            Laravel & React
                        </span>
                        . Berkomitmen menciptakan solusi digital yang efisien, modern, dan bermanfaat.
                    </p>
                </div>

                {/* 🔸 Kontak */}
                <div className="space-y-4">
                    <h4 className="text-base sm:text-lg font-semibold text-emerald-100 dark:text-emerald-400">
                        Hubungi Saya
                    </h4>

                    <ul className="space-y-3 text-sm text-emerald-50 dark:text-gray-300">
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <Mail size={16} />
                            <span className="break-all">rezkypurnama35@gmail.com</span>
                        </li>

                        <li className="flex items-center justify-center md:justify-start gap-2">
                            📞 <a href="tel:+6287767278357">+62 877-6727-8357</a>
                        </li>

                        <li className="flex items-center justify-center md:justify-start gap-2">
                            📍 Padang, Sumatera Barat
                        </li>
                    </ul>
                </div>

                {/* 🔸 Sosial Media */}
                <div className="space-y-4">
                    <h4 className="text-base sm:text-lg font-semibold text-emerald-100 dark:text-emerald-400">
                        Temukan Saya
                    </h4>

                    <div className="flex justify-center md:justify-start gap-5">
                        {[
                            { href: "https://mail.google.com/mail/?view=cm&fs=1&to=rezkypurnama35@gmail.com&su=Kerja%20Sama%20%E2%80%93%20Web%20Developer&body=Halo%20Rezky%2C%0A%0APerkenalkan%2C%20saya%20ingin%20menghubungi%20Anda%20terkait%20peluang%20kerja%20sama.%0A%0ATerima%20kasih.%0A,", icon: <Mail size={20} />, label: "Email"},
                            { href: "https://github.com/rezkypurnama", icon: <Github size={20} />, label: "GitHub" },
                            { href: "https://www.linkedin.com/in/rezky-purnama-sarta-8a4595382/", icon: <Linkedin size={20} />, label: "LinkedIn" },
                            { href: "https://www.instagram.com/_rezkypurnama/", icon: <Instagram size={20} />, label: "Instagram" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="group"
                            >
                                <div className="p-3 bg-white/10 rounded-full transition-all duration-300 sm:hover:scale-110 sm:hover:bg-emerald-500/20">
                                    {social.icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 🔹 Divider */}
            <div className="border-t border-emerald-400/30 dark:border-gray-700"></div>

            {/* 🔹 Copyright */}
            <div className="py-4 text-center text-xs sm:text-sm text-emerald-50 dark:text-gray-400 tracking-wide px-4">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-teal-200 dark:text-emerald-400">
                    Rezky Purnama Sarta
                </span>
                . All rights reserved.
            </div>
        </footer>
    );
}
