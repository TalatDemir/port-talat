import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: "Popping Balloons",
      description: "Unity ve C# kullanılarak geliştirilen eğlenceli bir balon patlatma oyunu. Oyuncular, farklı renklerdeki balonları patlatarak puan kazanır ve çeşitli zorluk seviyeleriyle karşılaşır.",
      technologies: ["Unity", "C#", "Game Development"],
      github: "https://github.com/TalatDemir/Popping-Balloons",
      demo: "https://demo-link-1.com",
      image: "/projects/popping-balloons.jpg"
    },
    {
      title: "Voice Cloning",
      description: "Python ve XTTS teknolojisi kullanılarak geliştirilen ses klonlama projesi. Kullanıcıların seslerini analiz ederek benzer ses üretimi yapabilen yapay zeka modeli.",
      technologies: ["Python", "XTTS", "AI", "Deep Learning"],
      github: "https://github.com/TalatDemir/Voice-Cloning",
      demo: "https://demo-link-2.com",
      image: "/projects/voice-cloning.jpg"
    },
    {
      title: "Vehicle Rental System",
      description: "Qt5 ve Python kullanılarak geliştirilen araç kiralama sistemi. Kullanıcılar araç rezervasyonu yapabilir, araç bilgilerini görüntüleyebilir ve kiralama işlemlerini yönetebilir.",
      technologies: ["Python", "Qt5", "SQLite", "GUI Development"],
      github: "https://github.com/TalatDemir/Vehicle-Rental-System",
      demo: "https://demo-link-3.com",
      image: "/projects/vehicle-rental.jpg"
    },
    {
      title: "Portfolio Website",
      description: "React ve Tailwind CSS kullanılarak geliştirilen modern ve responsive portfolyo websitesi. Binary temalı animasyonlar ve smooth sayfa geçişleri içerir.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/TalatDemir/Portfolio",
      demo: "https://demo-link-4.com",
      image: "/projects/portfolio.jpg"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12">
          Projelerim
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-container p-6 rounded-lg group">
              <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 