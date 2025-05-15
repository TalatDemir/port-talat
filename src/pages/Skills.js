import React from 'react';
import { FaCode, FaDatabase, FaTools, FaReact, FaUnity, FaPython, FaJava, FaGithub, FaCube, FaDesktop } from 'react-icons/fa';
import { SiCsharp, SiJavascript, SiVisualstudio, SiJetbrains, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: "Python",
      icon: <FaPython className="text-5xl text-cyan-400" />,
      proficiency: 60,
      description: "Yapay zeka ve ses klonlama projeleri"
    },
    {
      name: "C#",
      icon: <SiCsharp className="text-5xl text-cyan-400" />,
      proficiency: 50,
      description: "Unity oyun geliştirme"
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-5xl text-cyan-400" />,
      proficiency: 50,
      description: "Frontend geliştirme ve interaktif web uygulamaları"
    },
    {
      name: "Java",
      icon: <FaJava className="text-5xl text-cyan-400" />,
      proficiency: 50,
      description: "Nesne yönelimli programlama ve uygulama geliştirme"
    },
    {
      name: "React",
      icon: <FaReact className="text-5xl text-cyan-400" />,
      proficiency: 50,
      description: "Modern ve responsive web uygulamaları"
    },
    {
      name: "Unity",
      icon: <FaUnity className="text-5xl text-cyan-400" />,
      proficiency: 40,
      description: "2D ve 3D oyun geliştirme"
    },
    {
      name: "Node.js",
      icon: <FaDatabase className="text-5xl text-cyan-400" />,
      proficiency: 30,
      description: "Backend servisleri ve API geliştirme"
    },
    {
      name: "SQL",
      icon: <FaDatabase className="text-5xl text-cyan-400" />,
      proficiency: 30,
      description: "Veritabanı yönetimi ve sorgulama"
    },
    {
      name: "Visual Studio",
      icon: <SiVisualstudio className="text-5xl text-cyan-400" />,
      proficiency: 50,
      description: "Profesyonel IDE kullanımı"
    },
    {
      name: "JetBrains IDEs",
      icon: <SiJetbrains className="text-5xl text-cyan-400" />,
      proficiency: 70,
      description: "PyCharm, WebStorm, ve diğer IDE'ler"
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-5xl text-cyan-400" />,
      proficiency: 60,
      description: "Versiyon kontrolü ve proje yönetimi"
    },
    {
      name: "Qt Designer",
      icon: <FaDesktop className="text-5xl text-cyan-400" />,
      proficiency: 70,
      description: "Masaüstü uygulama arayüz tasarımı"
    },
    {
      name: "Fusion 360",
      icon: <FaCube className="text-5xl text-cyan-400" />,
      proficiency: 30,
      description: "3D modelleme ve tasarım"
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-cyan-400" />,
      proficiency: 30,
      description: "Modern ve responsive web tasarımı"
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="glass-container p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <div className="mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-cyan-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
                <span className="text-cyan-400 font-medium mb-3">
                  {skill.proficiency}%
                </span>
                <p className="text-gray-300 text-center text-sm">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 