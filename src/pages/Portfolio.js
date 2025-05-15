import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: "Popping Balloons",
      description: "Unity ve C# öğrenme sürecimde geliştirdiğim ilk oyun projesi. Temel oyun geliştirme kavramlarını öğrenmek ve pratik yapmak amacıyla oluşturuldu. Basit ama eğlenceli bir balon patlatma oyunu.",
      technologies: ["Unity", "C#", "Game Development"],
      github: "https://github.com/TalatDemir",
      image: "/poppingbaloons.png"
    },
    {
      title: "Voice Cloning",
      description: "Python ve XTTS teknolojisi (xtts_2 modeli) kullanılarak geliştirilen ses klonlama projesi. Kullanıcıların seslerini analiz ederek benzer ses üretimi yapabilen yapay zeka modeli.",
      technologies: ["Python", "XTTS", "AI", "Deep Learning"],
      github: "https://github.com/TalatDemir",
      image: "/yapay_zeka.jpg"
    },
    {
      title: "Vehicle Rental System",
      description: "Qt5 ve Python kullanılarak geliştirilen araç kiralama sistemi. Kullanıcılar araç rezervasyonu yapabilir, araç bilgilerini görüntüleyebilir ve kiralama işlemlerini yönetebilir.",
      technologies: ["Python", "Qt5", "SQLite", "GUI Development"],
      github: "https://github.com/TalatDemir",
      image: "/Qt5project.png"
    },
    {
      title: "Portfolio Website",
      description: "React ve Tailwind CSS kullanılarak geliştirdiğim kişisel portfolyo websitem. Binary temalı animasyonlar ve smooth sayfa geçişleri içeren modern ve responsive bir tasarıma sahip.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/TalatDemir",
      image: "/port-talat.png"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12 page-title">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 