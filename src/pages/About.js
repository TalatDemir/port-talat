import React from 'react';
import { FaGraduationCap, FaLaptopCode, FaUserAlt } from 'react-icons/fa';

const About = () => {
  const sections = [
    {
      title: "Kişisel Bilgiler",
      icon: <FaUserAlt className="text-4xl text-cyan-400 mb-4" />,
      content: [
        "Yaş: 21",
        "Konum: Balıkesir, Türkiye",
        "İlgi Alanları: Yapay Zeka, Oyun Geliştirme, Web Teknolojileri",
        "",
        "Hobiler:",
        "• Basketbol oynamak",
        "• PC oyunları oynamak",
        "• Film ve dizi izlemek",
        "• Kitap okumak",
        "• Yeni şeyler öğrenmek",
        "• Yeni yerler gezmek"
      ]
    },
    {
      title: "Eğitim",
      icon: <FaGraduationCap className="text-4xl text-cyan-400 mb-4" />,
      content: [
        "Balıkesir Üniversitesi",
        "Bilgisayar Mühendisliği",
        "2023 - Devam Ediyor",
        "GPA: 3.41/5.00",
        "",
        "Karşıyaka Anadolu Lisesi, İzmir",
        "2019 - 2023",
        "",
        "İngilizce: B2 Seviyesi"
      ]
    },
    {
      title: "Profesyonel Hedefler",
      icon: <FaLaptopCode className="text-4xl text-cyan-400 mb-4" />,
      content: [
        "Uluslararası bir insan ve mühendis olmak",
        "Yapay zeka alanında uzmanlaşma",
        "Yenilikçi projeler geliştirme",
        "Sürekli öğrenme ve gelişim"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center mb-12">
          Hakkımda
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="glass-container p-4 rounded-lg">
              <div className="text-center mb-4">
                {section.icon}
                <h2 className="text-xl font-bold text-cyan-400 mb-3">
                  {section.title}
                </h2>
              </div>

              <div className="space-y-2">
                {section.content.map((item, itemIndex) => (
                  <p
                    key={itemIndex}
                    className="text-gray-300 text-center text-sm"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass-container p-6 rounded-lg">
          <h2 className="text-xl font-bold text-cyan-400 mb-6 text-center">
            Kısaca Ben
          </h2>
          <div className="text-gray-300 space-y-4 max-w-3xl mx-auto">
            <p>
              Merhaba! Ben Talat, Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim. 
              Teknoloji dünyasında sürekli yeni şeyler keşfetmeyi seven, esprili ve enerjik bir yazılımcıyım! 🚀
            </p>
            <p>
              Yapay zeka ve oyun geliştirme benim tutkum! Unity ile oyunlar yaparken bir yandan da 
              Python ile ses klonlama gibi yapay zeka projeleri geliştiriyorum. Web dünyasında da 
              React ile modern uygulamalar yapmayı seviyorum. 🎮🤖
            </p>
            <p>
              Basketbol oynamayı, yeni yerler keşfetmeyi ve teknoloji dünyasındaki yenilikleri 
              takip etmeyi çok seviyorum. Her yeni projeyi bir macera olarak görüyor ve 
              coding yaparken eğlenmeyi ihmal etmiyorum! 🏀✈️
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 