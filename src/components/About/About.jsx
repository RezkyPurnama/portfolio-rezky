import React from "react";
import FotoXampp from "../../assets/xampp.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* 🔹 Judul Section */}
        <h1 className="text-3xl sm:text-4xl text-emerald-600 dark:text-emerald-400 font-extrabold uppercase mb-10 sm:mb-16 text-center tracking-wider">
          Tentang Saya
        </h1>

        {/* 🔹 Grid Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start text-gray-700 dark:text-gray-300 leading-relaxed">

          {/* 🟢 Kolom Kiri */}
          <div className="space-y-6 animate-fadeInLeft">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Web Developer & Lulusan Manajemen Informatika
            </h3>

            <p className="text-sm sm:text-base leading-loose">
              Saya adalah seorang <strong>Web Developer</strong> dengan latar belakang pendidikan
              D3 Manajemen Informatika dari{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                Politeknik Negeri Padang
              </span>
              . Saya memiliki semangat tinggi dalam mengembangkan solusi berbasis web
              yang efisien, modern, dan mudah digunakan.
            </p>

            <p className="text-sm sm:text-base leading-loose">
              Fokus saya adalah pada{" "}
              <strong>pengembangan sistem informasi</strong> yang terukur dan stabil,
              menggunakan teknologi modern seperti{" "}
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                Laravel
              </span>{" "}
              dan{" "}
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                React
              </span>
              . Saya juga tertarik pada otomasi proses, integrasi API, serta peningkatan
              pengalaman pengguna.
            </p>

            <p className="text-sm sm:text-base leading-loose">
              Saya berkomitmen menulis kode yang bersih, mudah dipelihara,
              dan mengikuti prinsip <em>Clean Code</em> serta metodologi pengembangan
              perangkat lunak modern.
            </p>
          </div>

          {/* 🟢 Kolom Kanan */}
          <div className="space-y-8 animate-fadeInRight">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6">
                Keahlian & Pengalaman
              </h3>

              <p className="mb-5 sm:mb-6 text-sm sm:text-base leading-loose">
                Saya memiliki keahlian di berbagai bidang pengembangan web, mulai dari
                perancangan antarmuka hingga pengelolaan data di sisi server. Berikut
                beberapa bidang utama yang saya tekuni:
              </p>

              {/* 🔹 Kartu Keahlian */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">

                {/* Frontend */}
                <div className="bg-white/70 dark:bg-gray-800/50 p-5 sm:p-6 rounded-2xl shadow transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-lg text-center">
                  <i className="bi bi-display text-3xl text-emerald-600 dark:text-emerald-400 mb-3"></i>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Frontend
                  </h4>
                  <p className="text-sm">
                    Membuat tampilan interaktif, responsif, dan ramah pengguna dengan
                    HTML, CSS, JavaScript, dan React.
                  </p>
                </div>

                {/* Backend */}
                <div className="bg-white/70 dark:bg-gray-800/50 p-5 sm:p-6 rounded-2xl shadow transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-lg text-center">
                  <i className="bi bi-server text-3xl text-emerald-600 dark:text-emerald-400 mb-3"></i>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Backend
                  </h4>
                  <p className="text-sm">
                    Berpengalaman dengan pengembangan sistem berbasis <strong>Laravel</strong>,
                    REST API, dan pengelolaan database.
                  </p>
                </div>

                {/* Soft Skill */}
                <div className="bg-white/70 dark:bg-gray-800/50 p-5 sm:p-6 rounded-2xl shadow transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-lg text-center">
                  <i className="bi bi-lightbulb text-3xl text-emerald-600 dark:text-emerald-400 mb-3"></i>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    Soft Skills
                  </h4>
                  <p className="text-sm">
                    Terbiasa bekerja dalam tim, berpikir analitis, dan memiliki kemampuan
                    komunikasi yang baik.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* 🟢 Tech Stack */}
        <div className="mt-16 sm:mt-20 text-center space-y-16">

          {/* Bahasa & Framework */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Bahasa & Framework ⚙️
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
              Bahasa pemrograman dan framework utama yang saya gunakan dalam pengembangan aplikasi:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 animate-fadeInUp">
              {[
                { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
                { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
                { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
                { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
                { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                { name: "Laravel", img: "https://www.vectorlogo.zone/logos/laravel/laravel-icon.svg" },
                { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                { name: "TailwindCSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
                { name: "Odoo", img: "https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/50 p-4 sm:p-5 rounded-2xl shadow-md transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-xl group"
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-3 sm:group-hover:scale-125 transition-transform duration-300"
                  />
                  <span className="text-sm font-semibold">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Tools, Platform & Database 🧰
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
              Tools, layanan, dan sistem basis data yang saya gunakan untuk mendukung proses pengembangan:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 animate-fadeInUp">
              {[
                { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
                { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
                { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
                { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
                { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
                { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
                { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
                { name: "XAMPP", img: FotoXampp },
              ].map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center bg-white/80 dark:bg-gray-800/50 p-4 sm:p-5 rounded-2xl shadow-md transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-xl"
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain mb-3"
                  />
                  <span className="text-sm font-semibold">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 🔸 Animasi */}
      <style>{`
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeInLeft { animation: fadeInLeft 1s ease-out both; }
        .animate-fadeInRight { animation: fadeInRight 1s ease-out both; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out both; }
      `}</style>
    </section>
  );
}
