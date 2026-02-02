import { ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "Sistem Informasi Inventory & Layanan Pelanggan Q Petcare Padang",
    description:
      "Aplikasi web berbasis Laravel yang dirancang untuk mengelola inventori, layanan hewan peliharaan, dan transaksi penjualan di Q Petcare Padang. Sistem ini dilengkapi dengan fitur pembookingan real-time, integrasi ongkir RajaOngkir, serta pembayaran online via Midtrans untuk meningkatkan efisiensi operasional dan pengalaman pelanggan.",
    demoLink: "https://demo-petshop-production.up.railway.app/",
    githubLink: "#",
    image: "/src/assets/petcare.png",
    tags: ["Laravel", "MySQL", "Midtrans API", "RajaOngkir"],
  },

  {
    title: "Task Management App",
    description:
      "Aplikasi manajemen tugas kolaboratif dengan update real-time, drag-and-drop, dan sistem tim yang interaktif.",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/taskapp.png",
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "Portfolio Website",
    description:
      "Website portfolio modern dan responsif dengan animasi halus, dark mode, serta performa yang dioptimalkan.",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/portfolio.png",
    tags: ["React", "Tailwind CSS", "Vite"],
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard cuaca real-time dengan fitur pencarian lokasi, visualisasi data prakiraan, dan desain elegan.",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/weather.png",
    tags: ["React", "API Integration", "Charts"],
  },
  {
    title: "Social Media App",
    description:
      "Platform media sosial dengan profil pengguna, postingan, komentar, dan sistem pesan real-time.",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/social.png",
    tags: ["React", "WebSocket", "PostgreSQL"],
  },
  {
    title: "Blog Platform",
    description:
      "Sistem manajemen konten untuk blogging dengan dukungan markdown, SEO-friendly, dan autentikasi pengguna.",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/blog.png",
    tags: ["Next.js", "React", "CMS"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* 🔹 Judul Section */}
        <h1 className="text-emerald-600 dark:text-emerald-400 font-extrabold text-4xl md:text-5xl uppercase mb-16 text-center tracking-wider">
          Project Saya 💻
        </h1>

        {/* 🔹 Grid Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeInUp">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-emerald-400 hover:-translate-y-2 overflow-hidden"
            >
              {/* 🖼️ Gambar Project */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay saat hover */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
                {/* Efek gradasi bawah */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* 🔹 Isi Card */}
              <div className="p-7 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* 🔸 Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 🔹 Tombol */}
                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>

              {/* 🔹 Efek Cahaya di Hover */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400 opacity-10 rounded-full blur-3xl group-hover:opacity-30 transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ✨ Animasi Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
