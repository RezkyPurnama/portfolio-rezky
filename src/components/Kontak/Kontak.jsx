import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from "lucide-react";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Kontak() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
          "service_crw7nel",   // 🔹 Ganti dengan Service ID dari EmailJS
          "template_uucofzh",  // 🔹 Ganti dengan Template ID dari EmailJS
          form.current,
          "uT_DMX9JyqS5sODqu" 
      )
      .then(
        () => {
          setStatus("✅ Pesan berhasil dikirim! Terima kasih telah menghubungi saya.");
          setLoading(false);
          form.current.reset();
          setTimeout(() => setStatus(""), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("❌ Gagal mengirim pesan. Silakan coba lagi nanti.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="kontak"
      className="py-20 px-6 bg-gradient-to-br from-white to-emerald-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-700"
    >
      <div className="max-w-5xl mx-auto text-center animate-fadeInUp">
        {/* 🔹 Judul Section */}
        <h2 className="text-emerald-600 dark:text-emerald-400 font-extrabold text-3xl md:text-4xl mb-4">
          Hubungi Saya 💬
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-14 text-base leading-relaxed">
          Tertarik bekerja sama atau berdiskusi tentang proyek? Jangan ragu untuk menghubungi saya —
          saya senang berkenalan dengan rekan baru dan menjelajahi ide menarik bersama 🌿
        </p>

        {/* 🔹 Info Kontak */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Mail className="text-emerald-600 dark:text-emerald-400" size={28} />,
              title: "Email",
              detail: "rezkypurnamasarta@gmail.com",
            },
            {
              icon: <Phone className="text-emerald-600 dark:text-emerald-400" size={28} />,
              title: "Telepon",
              detail: "+62 853-7562-0900",
            },
            {
              icon: <MapPin className="text-emerald-600 dark:text-emerald-400" size={28} />,
              title: "Lokasi",
              detail: "Padang, Sumatera Barat, Indonesia",
            },
          ].map((info, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white/90 dark:bg-gray-800/60 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-emerald-50/70 dark:hover:bg-gray-700/70"
            >
              <div className="mb-3 p-3 rounded-full bg-emerald-100 dark:bg-emerald-800/30 shadow-inner">
                {info.icon}
              </div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">{info.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{info.detail}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Form Kontak */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-3xl mx-auto bg-white/90 dark:bg-gray-800/60 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-500"
        >
          <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
            Kirim Pesan ✉️
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="from_name"
              placeholder="Nama Anda"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-400 outline-none transition-all text-sm"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email Anda"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-400 outline-none transition-all text-sm"
              required
            />
          </div>

          <textarea
            rows="4"
            name="message"
            placeholder="Tulis pesan Anda..."
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/50 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-emerald-400 outline-none transition-all text-sm"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 px-8 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center mx-auto gap-2 text-sm disabled:opacity-70"
          >
            <Send size={16} />
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status && (
            <p
              className={`mt-4 text-sm font-medium ${
                status.includes("✅")
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-500 dark:text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>

        {/* 🔹 Sosial Media */}
        <div className="mt-14 flex justify-center gap-8">
          {[
            { href: "https://github.com/rezkypurnama", icon: <Github size={22} />, label: "GitHub" },
            { href: "https://linkedin.com/in/rezkypurnamasarta", icon: <Linkedin size={22} />, label: "LinkedIn" },
            { href: "https://instagram.com/rezkypurnama", icon: <Instagram size={22} />, label: "Instagram" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group flex flex-col items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-all duration-300"
            >
              <div className="p-2.5 bg-emerald-100/40 dark:bg-gray-700/60 rounded-full group-hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110 shadow-sm">
                {social.icon}
              </div>
              <span className="text-[11px] mt-1 opacity-80">{social.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ✨ Animasi Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.9s ease-out both;
        }
      `}</style>
    </section>
  );
}
