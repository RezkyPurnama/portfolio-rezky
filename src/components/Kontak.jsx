import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React and modern backend technologies.",
        demoLink: "#",
        githubLink: "#",
        tags: ["React", "Node.js", "MongoDB"],
    },
    {
        title: "Task Management App",
        description:
            "Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
        demoLink: "#",
        githubLink: "#",
        tags: ["React", "TypeScript", "Firebase"],
    },
    {
        title: "Portfolio Website",
        description:
            "Modern and responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
        demoLink: "#",
        githubLink: "#",
        tags: ["React", "Tailwind CSS", "Vite"],
    },
    {
        title: "Weather Dashboard",
        description:
            "Real-time weather dashboard with location search, forecast data visualization, and beautiful UI design.",
        demoLink: "#",
        githubLink: "#",
        tags: ["React", "API Integration", "Charts"],
    },
    {
        title: "Social Media App",
        description:
            "A social networking platform with user profiles, posts, likes, comments, and real-time messaging functionality.",
        demoLink: "#",
        githubLink: "#",
        tags: ["React", "WebSocket", "PostgreSQL"],
    },
    {
        title: "Blog Platform",
        description:
            "Content management system for blogging with markdown support, SEO optimization, and user authentication.",
        demoLink: "#",
        githubLink: "#",
        tags: ["React", "Next.js", "CMS"],
    },
];

export default function Projects() {
    return (
        <section
            id="Kontak"
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        >
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-800 mb-4">My Project</h2>
                    <div className="w-20 h-1 bg-green-500 rounded-full mx-auto mb-4"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and
                        passion for web development.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                        >
                            {/* Gambar Header */}
                            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 border-4 border-white rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500"></div>
                                </div>
                            </div>

                            {/* Deskripsi Project */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Tombol Demo dan Code */}
                                <div className="flex gap-3 pt-4 border-t border-gray-100">
                                    <a
                                        href={project.demoLink}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 font-medium"
                                    >
                                        <ExternalLink size={18} />
                                        Demo
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-green-500 text-green-600 rounded-lg hover:bg-green-50 transition-colors duration-300 font-medium"
                                    >
                                        <Github size={18} />
                                        Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
