import React from 'react';
import { FaCode, FaRobot, FaGamepad, FaReact, FaNodeJs, FaPython, FaUnity } from 'react-icons/fa';
import { SiTensorflow, SiNumpy, SiPandas, SiJavascript, SiHtml5, SiCss3, SiCsharp } from 'react-icons/si';

const Services = () => {
  const services = [
    {
      title: "Web Geliştirme",
      icon: <FaCode className="text-5xl text-cyan-400 mb-4" />,
      description: "Bu alanda yeniyim. React ve Tailwind CSS kullanarak geliştirdiğim bu portfolyo sitesi benim başlangıç projelerimden biri. Kullanıcı deneyimini ön planda tutarak, modern ve responsive web siteleri tasarlamayı öğreniyorum.",
      technologies: [
        {
          name: "React",
          icon: <FaReact className="text-3xl text-cyan-400" />,
          description: "Modern ve interaktif kullanıcı arayüzleri"
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-3xl text-cyan-400" />,
          description: "Dinamik web uygulamaları"
        },
        {
          name: "HTML5",
          icon: <SiHtml5 className="text-3xl text-cyan-400" />,
          description: "Semantik web yapısı"
        },
        {
          name: "CSS3",
          icon: <SiCss3 className="text-3xl text-cyan-400" />,
          description: "Modern stil ve animasyonlar"
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-3xl text-cyan-400" />,
          description: "Backend servisleri ve API'lar"
        }
      ]
    },
    {
      title: "Yapay Zeka",
      icon: <FaRobot className="text-5xl text-cyan-400 mb-4" />,
      description: "Bu alanla uğraşmak bana zevk veriyor. Python ve XTTS teknolojisi kullanarak ses klonlama projeleri geliştiriyorum. Hazır frameworkler ve kütüphaneler kullanarak yapay zeka çalışmaları yapıyor, özellikle ses teknolojileri konusunda uzmanlaşmaya çalışıyorum.",
      technologies: [

        {
          name: "NumPy",
          icon: <SiNumpy className="text-3xl text-cyan-400" />,
          description: "Veri işleme ve analizi"
        },
        {
          name: "Pandas",
          icon: <SiPandas className="text-3xl text-cyan-400" />,
          description: "Veri manipülasyonu"
        },
        {
          name: "Python",
          icon: <FaPython className="text-3xl text-cyan-400" />,
          description: "Ses klonlama ve işleme"
        }
      ]
    },
    {
      title: "Oyun Geliştirme",
      icon: <FaGamepad className="text-5xl text-cyan-400 mb-4" />,
      description: "Unity ve C# kullanarak basit 2D oyunlar geliştiriyorum. İlk oyun projem olan 'Popping Balloons' ile temel oyun geliştirme kavramlarını öğrendim. Oyun mekanikleri tasarlama ve uygulama konusunda kendimi geliştirmeye devam ediyorum.",
      technologies: [
        {
          name: "Unity",
          icon: <FaUnity className="text-3xl text-cyan-400" />,
          description: "2D oyun geliştirme"
        },
        {
          name: "C#",
          icon: <SiCsharp className="text-3xl text-cyan-400" />,
          description: "Oyun mantığı ve mekanikleri"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12 page-title">
          Neler Yapabilirim
        </h1>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="glass-container p-6 rounded-lg ">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6" >
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-black/30 backdrop-blur-lg">
                  {service.icon}
                </div>

                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center md:text-left">
                    {service.title}
                  </h2>

                  <p className="text-gray-300 mb-6 text-center md:text-left">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {service.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex flex-col items-center p-4 bg-black/20 rounded-lg hover:bg-black/30 transition-all duration-300"
                      >
                        {tech.icon}
                        <h3 className="mt-2 font-medium text-cyan-400">{tech.name}</h3>
                        <p className="text-xs text-gray-400 text-center mt-1">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
