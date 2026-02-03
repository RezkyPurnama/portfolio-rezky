import React from "react";
import fotoSaya from "../../assets/foto-rezky.jpeg";
import cvSaya from "../../assets/CV-Rezky-Purnama-Sarta.pdf";

export default function Beranda() {
  return (
    <section
      id="Beranda"
      className="
    min-h-screen
    flex items-center justify-center

    pt-28            /* 📱 MOBILE SAJA */
    sm:pt-0          /* 🖥 RESET DESKTOP */

    py-14 sm:py-20
    px-4 sm:px-6

    bg-gradient-to-br from-white to-emerald-50
    dark:from-gray-900 dark:to-gray-800
  "
    >

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* 🟩 Deskripsi */}
        <div className="space-y-4 sm:space-y-5 text-gray-700 dark:text-gray-300 animate-fade-in text-center md:text-left">
     <h4
  className="
    text-base              /* 📱 mobile: lebih rapi */
    sm:text-xl              /* 🖥 desktop: TETAP */
    font-semibold
    leading-snug            /* 📱 rapetin jarak baris */
    text-gray-900 dark:text-white
  "
>
  <span className="text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1">
    Halo Semua <span className="text-base sm:text-xl">👋</span>, Saya
  </span>
</h4>


          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Rezky Purnama Sarta
          </h1>

          <h3 className="text-sm sm:text-lg font-medium text-gray-700 dark:text-gray-300">
            Fresh Graduate D3{" "}
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              Manajemen Informatika
            </span>
            <br className="block sm:hidden" />
            <span className="sm:ml-1">– Politeknik Negeri Padang</span>
          </h3>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Saya Web Developer yang antusias membangun aplikasi modern dan responsif, mengubah ide menjadi solusi digital yang fungsional dan menyenangkan bagi pengguna.
          </p>



          {/* 🔘 Tombol */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rezkypurnama35@gmail.com&su=Kerja%20Sama%20%E2%80%93%20Web%20Developer&body=Halo%20Rezky%2C%0A%0APerkenalkan%2C%20saya%20ingin%20menghubungi%20Anda%20terkait%20peluang%20kerja%20sama.%0A%0ATerima%20kasih.%0A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-6 py-3
              bg-emerald-600 hover:bg-emerald-700 text-white
              rounded-full font-semibold shadow-lg
              transition transform hover:scale-105 text-center"
            >
              Hubungi Saya
            </a>

            <a
              href={cvSaya}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-6 py-3
              border-2 border-emerald-600 dark:border-emerald-400
              text-emerald-700 dark:text-emerald-400
              hover:bg-emerald-600 hover:text-white
              dark:hover:bg-emerald-500
              rounded-full font-semibold shadow-md
              transition transform hover:scale-105 text-center"
            >
              Lihat CV
            </a>
          </div>
        </div>

        {/* 🟢 Foto */}
        <div className="relative flex justify-center items-center animate-fade-in-delay mt-8 md:mt-0">
          {/* Glow background */}
          <div
            className="absolute bg-emerald-400 dark:bg-emerald-500
    w-64 h-64
    sm:w-72 sm:h-72
    md:w-96 md:h-96
    rounded-full blur-2xl opacity-30 -z-10"
          ></div>

          {/* Foto */}
          <img
            src={fotoSaya}
            alt="Rezky Purnama Sarta"
            className="
      w-70 h-80            /* 📱 mobile */
      sm:w-72 sm:h-96     /* tablet */
      md:w-96 md:h-[32rem] /* 🖥 desktop */
      object-cover
      rounded-2xl
      border-4 border-white dark:border-gray-700
      shadow-2xl
      transition-transform duration-300 hover:scale-105
    "
          />
        </div>


      </div>

      {/* ✨ Animasi */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.9s ease-out both;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.9s ease-out 0.25s both;
        }
      `}</style>
    </section>
  );
}
