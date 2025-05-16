import React from 'react';
import { FaGraduationCap, FaUserAlt, FaHeart, FaBullseye, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const sections = [
    {
      title: "Genel Bilgiler",
      icon: <FaUserAlt className="text-4xl text-cyan-400 mb-4" />,
      content: "Ad Soyad: Talat Demir\nMemleket: İzmir\nE-posta: talatalat35@gmail.com\nTel: +90 537 491 67 55\nİngilizce Seviyesi: B2"
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
      title: "Hedeflerim",
      icon: <FaBullseye className="text-4xl text-cyan-400 mb-4" />,
      content: "Yazılım dünyasında kendimi sürekli geliştirerek, yapay zeka ve web teknolojileri alanında uzmanlaşmak istiyorum. Kısa vadede staj ve proje deneyimleri kazanmak, uzun vadede ise yenilikçi çözümler üreten bir yazılım mühendisi olmayı hedefliyorum. Özellikle ses teknolojileri ve kullanıcı deneyimi odaklı projeler geliştirmek istiyorum."
    },
    {
      title: "Vizyonum",
      icon: <FaLightbulb className="text-4xl text-cyan-400 mb-4" />,
      content: "Teknolojinin insanların hayatını kolaylaştırdığı, erişilebilir ve kapsayıcı bir dijital dünya oluşturmak için çalışmak istiyorum. Yapay zeka ve web teknolojilerini birleştirerek, kullanıcı dostu ve yenilikçi çözümler geliştirmeyi amaçlıyorum. Sürekli öğrenmeye açık bir yaklaşımla, teknoloji dünyasındaki gelişmeleri takip ederek kendimi ve projelerimi güncel tutmayı hedefliyorum."
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

        {/* Ana Kartlar - İlk 3 kart (Genel Bilgiler, Lise Eğitimi, Üniversite Eğitimi) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.slice(0, 3).map((section, index) => (
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

        {/* Hedeflerim, Vizyonum ve Hobilerim Kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
          {/* Hedeflerim Kartı */}
          <div className="glass-container p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-3 sm:mb-4">
              {sections[3].icon}
              <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">
                {sections[3].title}
              </h2>
            </div>
            <div className="text-gray-300 text-center text-xs sm:text-sm whitespace-pre-line">
              {sections[3].content}
            </div>
          </div>

          {/* Vizyonum Kartı */}
          <div className="glass-container p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-3 sm:mb-4">
              {sections[4].icon}
              <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">
                {sections[4].title}
              </h2>
            </div>
            <div className="text-gray-300 text-center text-xs sm:text-sm whitespace-pre-line">
              {sections[4].content}
            </div>
          </div>

          {/* Hobilerim Kartı */}
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
  );
};

export default About;