import React from "react";
import LogoKampus from "../../assets/pnp.png";

export default function Pendidikan() {
    return (
        <section
            id="Pendidikan"
            className="relative py-20 px-4 sm:px-6
            bg-gradient-to-br from-white via-emerald-50 to-white
            dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
            transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h1
                    className="text-2xl sm:text-4xl font-extrabold text-center mb-16
                    text-emerald-600 dark:text-emerald-400 uppercase tracking-widest"
                >
                    Pendidikan
                </h1>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto pl-6 sm:pl-10">
                    {/* Vertical line */}
                    <div className="absolute left-3 sm:left-5 top-0 h-full w-[2px]
                        bg-emerald-300 dark:bg-emerald-600" />

                    {/* Dot */}
                    <span
                        className="absolute left-0 sm:left-2 top-8 w-6 h-6 sm:w-9 sm:h-9
                        rounded-full bg-emerald-600 dark:bg-emerald-400
                        border-4 border-white dark:border-gray-900"
                    />

                    {/* Card */}
                    <div
                        className="ml-6 sm:ml-10 bg-white dark:bg-gray-900
                        rounded-2xl p-6 sm:p-8
                        shadow-lg hover:shadow-2xl
                        transition-all duration-300
                        hover:-translate-y-1"
                    >
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <img
                                    src={LogoKampus}
                                    alt="Politeknik Negeri Padang"
                                    className="w-14 h-14 sm:w-16 sm:h-16
                                    object-contain rounded-lg
                                    bg-white p-1 shadow"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                                    <div>
                                        <h2 className="text-lg sm:text-2xl font-bold
                                            text-gray-900 dark:text-white">
                                            Politeknik Negeri Padang
                                        </h2>
                                        <p
                                            className="mt-1 text-sm sm:text-base
                                            text-emerald-600 dark:text-emerald-400 font-medium"
                                        >
                                            D3 Manajemen Informatika
                                        </p>
                                    </div>

                                    <span
                                        className="self-start text-xs sm:text-sm font-semibold
                                        px-4 py-1 rounded-full
                                        bg-emerald-100 dark:bg-emerald-900
                                        text-emerald-700 dark:text-emerald-300"
                                    >
                                        2022 – 2025
                                    </span>
                                </div>

                                {/* Description */}
                                <p
                                    className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed
                                    text-gray-700 dark:text-gray-300"
                                >
                                    Program vokasi yang berfokus pada pengembangan dan pengelolaan
                                    sistem informasi berbasis web. Berpengalaman dalam membangun
                                    aplikasi inventory, sistem layanan pelanggan, serta REST API
                                    menggunakan Laravel, React, dan Lumen dengan pendekatan
                                    efisiensi dan kebutuhan bisnis.
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6">
                                    {[
                                        "GPA 3.50 / 4.00",
                                        "Applied Web Development",
                                        "REST API & Backend",
                                    ].map((tag, i) => (
                                        <span
                                            key={i}
                                            className="
                text-xs sm:text-sm font-medium
                px-3 py-1.5 rounded-full
                bg-emerald-50 text-emerald-700
                dark:bg-emerald-900/40 dark:text-emerald-300
                border border-emerald-200 dark:border-emerald-700/50
                transition-colors duration-300
                hover:bg-emerald-100 dark:hover:bg-emerald-900/70
            "
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
