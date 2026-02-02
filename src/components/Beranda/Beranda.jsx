import React from "react";


export default function Beranda() {
  return (
    <section
      id="Beranda"
      className="min-h-screen flex items-center justify-center py-20 px-6 transition-colors duration-700 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* 🟩 Bagian Deskripsi */}
        <div className="space-y-6 text-gray-700 dark:text-gray-300 animate-fade-in">
          <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            <span className="text-emerald-600 dark:text-emerald-400">
              Halo Semua 👋, Saya
            </span>
          </h4>

          <h1 className="text-5xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Rezky Purnama Sarta
          </h1>

          <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">
            Fresh Graduate D3{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Manajemen Informatika
            </span>{" "}
            – Politeknik Negeri Padang
          </h3>

          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Saya adalah pengembang web yang bersemangat dalam membangun aplikasi
            modern dan responsif menggunakan teknologi seperti{" "}
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
              Laravel
            </span>{" "}
            dan{" "}
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">
              React.
            </span>{" "}
            Fokus saya adalah menciptakan solusi digital yang efisien dan mudah
            digunakan.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              Hubungi Saya
            </button>
            <a
              href="/public/CV-Rezky-Purnama-Sarta.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105"
            >
              Lihat CV
            </a>
          </div>
        </div>

        {/* 🟢 Bagian Foto */}
        <div className="relative flex justify-center items-center animate-fade-in-delay">
          {/* Efek Lingkaran */}
          <div className="absolute bg-emerald-400 dark:bg-emerald-500 w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>

          {/* Foto */}
          <img
            src="/public/foto-saya.jpeg"
            alt="Rezky Purnama Sarta"
            className="w-64 md:w-80 object-cover drop-shadow-2xl rounded-2xl border-4 border-white dark:border-gray-700 shadow-green-300 transform scale-105 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* ✨ Animasi halus */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out both;
        }
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
      `}</style>
    </section>
  );
}
