import { ExternalLink, Github } from "lucide-react";
import React from "react";
import ProjectPetcare from "../../assets/petcare.png";
import ProjectCatatanAPP from "../../assets/Catatan-App.png";

const projects = [
  {
    title: "Sistem Informasi Inventory dan Layanan Pelanggan di Q Petcare Padang menggunakan Laravel",
    description:
      "Project Tugas Akhir berupa aplikasi web berbasis Laravel untuk mengelola inventori, layanan hewan peliharaan, dan transaksi penjualan di Q Petcare Padang. Sistem ini mendukung booking layanan secara real-time, integrasi ongkir RajaOngkir, serta pembayaran online melalui Midtrans guna meningkatkan efisiensi operasional dan kenyamanan pelanggan.",
    demoLink: "https://demo-petshop-production.up.railway.app/",
    githubLink: "#",
    image: ProjectPetcare,
    tags: ["Laravel", "MySQL", "Midtrans API", "RajaOngkir"],

  },
  {
    title: "Sistem Informasi Inventaris",
    description:
      "Proyek PBL semester 3 berupa sistem informasi inventaris berbasis web untuk pengelolaan data barang, pelacakan stok, dan monitoring aset kampus. Sistem dibangun menggunakan PHP native, MySQL, dan Bootstrap, dengan fokus pada pengolahan data backend yang terstruktur dan antarmuka yang responsif.",
    demoLink: "#",
    githubLink: "https://github.com/RezkyPurnama/project_inventory",
    image: "/src/assets/projects/inventaris.png",
    tags: ["PHP", "MySQL", "Bootstrap"],
  },


  {
    title: "Notes App",
    description:
      "Aplikasi catatan sederhana berbasis web yang memungkinkan pengguna membuat, mencari, dan mengelola catatan dengan antarmuka yang bersih dan responsif. Dilengkapi dengan fitur batas karakter judul, pencarian catatan secara real-time, serta pengelolaan catatan aktif dan arsip untuk meningkatkan produktivitas.",
    demoLink: "https://catatan-app-fawn.vercel.app/",
    githubLink: "#",
    image: ProjectCatatanAPP,
    tags: ["React", "TypeScript", "Firebase"],
  },
  {
    title: "GlowTech: E-Commerce Kosmetik & Skincare",
    description:
      "Aplikasi penjualan kosmetik dan skincare berbasis Laravel untuk memperluas jangkauan penjualan online. Dalam proyek kelompok ini, saya berkontribusi sebagai developer, mengerjakan fitur manajemen produk, keranjang belanja, dan integrasi pembayaran.",
    demoLink: "#",
    githubLink: "https://github.com/RezkyPurnama/Proyek_Utama",
    image: "/src/assets/projects/glowtech.png",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  },

  {
    title: "Online Shop Mobile App",
    description:
      "Proyek semester 4 berupa aplikasi toko daring berbasis Flutter, menampilkan fitur katalog produk, keranjang belanja, dan navigasi yang responsif untuk pengalaman pengguna mobile yang optimal.",
    demoLink: "#",
    githubLink: "https://github.com/RezkyPurnama/Onlineshop_flutter",
    image: "/src/assets/projects/online-shop.png",
    tags: ["Flutter", "Dart", "Firebase"],
  },
  {
    title: "Custome Modul Config Odoo 16",
    description:
      "Proyek magang di CNT IT Corporation untuk mengembangkan modul internal ERP Bariklana yang mengelola data wilayah (Provinsi, Kota/Kabupaten, Kecamatan, Kelurahan/Desa) secara digital dan terstruktur. Modul ini meningkatkan akurasi dan efisiensi pengolahan data internal perusahaan, dibangun menggunakan Python (backend), XML (antarmuka), dan PostgreSQL (database).",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/odoo-config.png",
    tags: ["Python", "Odoo", "PostgreSQL", "XML"],
  },
  {
    title: "Custome Modul Sales Order Odoo 16",
    description:
      "Proyek magang di CNT IT Corporation untuk mengembangkan modul internal ERP Bariklana dengan fitur verifikasi Sales Order. Modul memastikan pesanan divalidasi dengan akurat sebelum diproses, mencakup form view, tree view, dan kanban view untuk menampilkan detail pesanan, informasi pelanggan, serta status verifikasi. Dibangun menggunakan Python (backend), XML (antarmuka), dan PostgreSQL (database).",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/odoo-sales.png",
    tags: ["Python", "Odoo", "PostgreSQL", "XML"],
  },
  {
    title: "Pengembangan API Humanitarian - Rumah Zakat",
    description:
      "Proyek magang di CNT IT Corporation untuk mengembangkan API berbasis Lumen dengan PostgreSQL guna mendukung sistem Humanitarian Rumah Zakat, mencakup modul Disrep, Sitrep, dan User. API dilengkapi autentikasi JWT, kontrol akses user, endpoint CRUD, serta dokumentasi Swagger dan Postman collection untuk memudahkan pengujian dan integrasi sistem.",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/humanitarian-api.png",
    tags: ["PHP", "Lumen", "PostgreSQL", "JWT", "Swagger", "API"],
  },
  {
    title: "Pengembangan API Zains untuk Website Filantra",
    description:
      "Proyek magang di CNT IT Corporation untuk mengembangkan API berbasis Lumen bagi Filantra, fokus pada manajemen data efisien dan integrasi sistem. Termasuk pembuatan endpoint CRUD, autentikasi pengguna, optimasi kinerja API, serta desain, pengujian, dan dokumentasi arsitektur API untuk memastikan sistem aman, cepat, dan mudah diintegrasikan.",
    demoLink: "#",
    githubLink: "#",
    image: "/src/assets/projects/zains-api.png",
    tags: ["PHP", "Lumen", "MySQL", "JWT", "API", "Swagger"],
  },



];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* 🔹 Judul Section */}
        <h1 className="text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400 font-extrabold uppercase mb-10 sm:mb-16 text-center tracking-wider">
          Project Saya
        </h1>

        {/* 🔹 Grid Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-fadeInUp">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-white/90 dark:bg-gray-800/70 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-emerald-400 overflow-hidden"
            >
              {/* 🖼️ Gambar Project */}
              {/* <div className="relative h-48 sm:h-56 md:h-60 lg:h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div> */}

              {/* 🔹 Isi Card */}
              <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {/* Deskripsi scrollable */}
                  <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm sm:text-base leading-relaxed overflow-y-auto max-h-40">
                    {project.description}
                  </p>

                  {/* 🔸 Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[11px] sm:text-sm px-3 py-1 rounded-full
      bg-emerald-100 dark:bg-emerald-900
      text-emerald-700 dark:text-emerald-300
      font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

                {/* 🔹 Tombol */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-all duration-300 font-semibold shadow-md hover:shadow-lg text-sm sm:text-base"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-lg hover:bg-emerald-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-sm sm:text-base"
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
