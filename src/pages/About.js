import React from 'react';
import { FaGraduationCap, FaUserAlt, FaGamepad, FaRobot, FaGlobe, FaHeart } from 'react-icons/fa';

const About = () => {
  const sections = [
    {
      title: "Genel Bilgiler",
      icon: <FaUserAlt className="text-4xl text-cyan-400 mb-4" />,
      content: "Ad Soyad: Talat Demir\nMemleket: İzmir\nE-posta: talatalat35@gmail.com\nTel: +90 555 555 55 55\nİngilizce Seviyesi: B2"
    },
    {
      title: "Lise Eğitimi",
      icon: <FaGraduationCap className="text-4xl text-cyan-400 mb-4" />,
      content: "Karşıyaka Anadolu Lisesi\n2018 - 2022\nGenel Ortalama: 92/100\nİzmir, Türkiye"
    },
    {
      title: "Üniversite Eğitimi",
      icon: <FaGraduationCap className="text-4xl text-cyan-400 mb-4" />,
      content: "Balıkesir Üniversitesi\nBilgisayar Mühendisliği\n2023 - Devam Ediyor\nGenel Ortalama: 3.41/4.00"
    },
    {
      title: "Yapay Zeka",
      icon: <FaRobot className="text-4xl text-cyan-400 mb-4" />,
      content: "Python ve çeşitli kütüphaneleri kullanarak yapay zeka alanında kendimi geliştiriyorum. Özellikle ses teknolojileri üzerine çalışıyor, Coqui.ai TTS modeliyle ses klonlama projeleri geliştiriyorum."
    },
    {
      title: "Web Geliştirme",
      icon: <FaGlobe className="text-4xl text-cyan-400 mb-4" />,
      content: "İnternet programlama alanında kendimi geliştiriyorum. HTML, JavaScript, CSS, React, Node.js ve Tailwind kullanarak modern web projeleri geliştirmeyi hedefliyorum. Bu portfolio sitesi de web geliştirme yolculuğumun bir parçası."
    },
    {
      title: "Oyun Geliştirme",
      icon: <FaGamepad className="text-4xl text-cyan-400 mb-4" />,
      content: "Unity ve C# kullanarak basit 2D oyunlar geliştirmeye başladım. Bu alanda henüz yeniyim ancak kendimi geliştirmeye ve yeni projeler üretmeye açığım."
    }
  ];

  const hobbiesSection = {
    title: "Hobilerim",
    icon: <FaHeart className="text-4xl text-cyan-400 mb-4" />,
    content: "• Basketbol oynamak\n• Spor yapmak\n• Kitap okumak\n• Yeni şeyler denemek\n• Yeni yerler gezmek\n• Dizi/film izlemek"
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:py-12 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-8 sm:mb-12 page-title">
          Hakkımda
        </h1>

        {/* Kısaca Ben Bölümü */}
        <div className="glass-container p-4 sm:p-6 rounded-lg mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4 sm:mb-6 text-center">
            Kısaca Ben
          </h2>
          <div className="text-gray-300 space-y-3 sm:space-y-4 max-w-3xl mx-auto text-sm sm:text-base">
            <p>
              Hey! 👋 Ben Talat, İzmir'in rüzgarlı sokaklarından Balıkesir'in kampüs hayatına uzanan bir maceraperestim! 
              Bilgisayar Mühendisliği öğrencisi olarak, kodların büyülü dünyasında kendi yolumu çiziyorum.
            </p>
            <p>
              Yapay zeka ile sohbet ederken, Unity'de oyunlar tasarlarken ya da web projeleri geliştirirken bulabilirsiniz beni. 
              Teknoloji benim için sadece bir araç değil, tutkuyla bağlı olduğum bir yaşam biçimi! 
              Her gün yeni bir şey öğrenmeye ve kendimi geliştirmeye bayılıyorum. 🚀
            </p>
          </div>
        </div>

        {/* Ana Kartlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.map((section, index) => (
            <div key={index} className="glass-container p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-3 sm:mb-4">
                {section.icon}
                <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-300 text-center text-xs sm:text-sm whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Hobiler Kartı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="lg:col-start-2">
            <div className="glass-container p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
              <div className="text-center mb-3 sm:mb-4">
                {hobbiesSection.icon}
                <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">
                  {hobbiesSection.title}
                </h2>
              </div>
              <div className="text-gray-300 text-center text-xs sm:text-sm whitespace-pre-line">
                {hobbiesSection.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 