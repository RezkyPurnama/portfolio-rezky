import React from "react";

export default function Pengalaman() {
    const pengalaman = [
        {
            company: "PT Citra Niaga Teknologi",
            logo: "https://cnt.id/wp-content/uploads/2023/12/logo-full.png",
            location: "Bandung, Indonesia",
            period: "Feb 2025 – May 2025",
            roles: [
                {
                    title: "Web Developer Intern",
                    highlight: "Backend & API Development",
                    projects: [
                        "API ZAINS untuk Filantra – REST API berbasis Lumen dengan CRUD, Google SSO, serta optimasi performa dan keamanan.",
                        "API Humanitarian – API Lumen & PostgreSQL untuk modul Disrep, Sitrep, dan User dengan kontrol akses.",
                        "Dokumentasi API menggunakan Swagger dan Postman."
                    ],
                    tech: ["Lumen", "PostgreSQL", "JWT", "Google SSO", "Swagger", "Postman"]
                },
                {
                    title: "Odoo Developer Intern",
                    highlight: "ERP Customization",
                    projects: [
                        "Custom Module Config Odoo 16 (Provinsi–Kelurahan).",
                        "Backend Python, XML, PostgreSQL.",
                        "Fitur verifikasi Sales Order untuk meningkatkan akurasi proses."
                    ],
                    tech: ["Odoo 16", "Python", "PostgreSQL", "XML"]
                }
            ]
        }
    ];

    return (
        <section
            id="Pengalaman"
            className="min-h-screen py-16 sm:py-24 px-4 sm:px-6
      bg-gradient-to-br from-white to-emerald-50
      dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-14 sm:mb-20
        text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    Pengalaman
                </h1>

                {/* Timeline */}
                <div className="relative border-l border-emerald-300 sm:border-l-2
        dark:border-emerald-600 ml-2 sm:ml-4">
                    {pengalaman.map((exp, index) => (
                        <div key={index} className="relative mb-14 sm:mb-20 ml-5 sm:ml-8">
                            {/* Timeline Dot */}
                            <span
                                className="absolute -left-[12px] sm:-left-[18px] top-8
                w-6 h-6 sm:w-9 sm:h-9 rounded-full
                bg-emerald-600 dark:bg-emerald-400
                border-4 border-white dark:border-gray-900"
                            />

                            {/* Card */}
                            <div
                                className="bg-white dark:bg-gray-900
                rounded-xl sm:rounded-2xl
                p-5 sm:p-8
                shadow-sm hover:shadow-2xl
                transition-all duration-300"
                            >
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-12 h-12 sm:w-16 sm:h-16
                      object-contain rounded-md
                      bg-white p-2 shadow-sm"
                                        />
                                        <div>
                                            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                                                {exp.company}
                                            </h2>
                                            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                                {exp.location}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className="self-start text-xs sm:text-sm font-medium
                    px-3 py-1 rounded-full
                    bg-emerald-100 dark:bg-emerald-900
                    text-emerald-700 dark:text-emerald-300"
                                    >
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Roles */}
                                <div className="space-y-8 sm:space-y-10">
                                    {exp.roles.map((role, i) => (
                                        <div
                                            key={i}
                                            className="pl-4 sm:pl-5 border-l-2 sm:border-l-4 border-emerald-500"
                                        >
                                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                                <h3 className="text-base sm:text-xl font-semibold text-gray-900 dark:text-white">
                                                    {role.title}
                                                </h3>
                                                <span
                                                    className="text-[11px] sm:text-xs px-2 sm:px-3 py-1 rounded-full
                          bg-emerald-50 dark:bg-emerald-900
                          text-emerald-600 dark:text-emerald-300"
                                                >
                                                    {role.highlight}
                                                </span>
                                            </div>

                                            <ul className="list-disc list-inside space-y-2
                      text-sm text-gray-700 dark:text-gray-300">
                                                {role.projects.map((p, idx) => (
                                                    <li key={idx}>{p}</li>
                                                ))}
                                            </ul>

                                            {/* Tech */}
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {role.tech.map((t, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="text-[11px] sm:text-sm px-3 py-1 rounded-full
                            bg-emerald-100 dark:bg-emerald-900
                            text-emerald-700 dark:text-emerald-300"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
