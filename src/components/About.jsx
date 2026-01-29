import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-br from-white to-purple-50"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Bagian Deskripsi */}
        <div className="space-y-6 animate-fade-in text-gray-700">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
            <span className="text-purple-600">Halo Semua 👋, Saya</span>
          </h2>

          <h1 className="text-5xl font-extrabold text-gray-900">
            Rezky Purnama Sarta
          </h1>

          <h3 className="text-xl font-medium text-gray-700">
            Mahasiswa{" "}
            <span className="text-purple-600 font-semibold">
              Politeknik Negeri Padang
            </span>
          </h3>

          <p className="text-lg text-gray-600 leading-relaxed">
            Saya adalah pengembang web yang berfokus pada pengalaman pengguna
            dan desain modern. Saya senang membangun website yang fungsional,
            responsif, dan mudah digunakan dengan teknologi terbaru seperti
            React dan Laravel.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Saya memiliki minat besar di bidang pengembangan sistem informasi,
            integrasi API, dan otomasi berbasis web.
          </p>

          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold shadow-md transition">
            Hubungi Saya
          </button>
        </div>

        {/* Bagian Foto */}
        <div className="relative flex justify-center items-center">
          {/* Lingkaran ungu di belakang */}
          <div className="absolute bg-purple-600 w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full -z-10"></div>

          {/* Foto tanpa crop */}
          <img
            src="/src/assets/foto-saya.jpeg"
            alt="Rezky Purnama Sarta"
            className="w-64 md:w-80 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
