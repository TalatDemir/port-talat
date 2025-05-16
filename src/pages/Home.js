import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import { FaGithub, FaLinkedin, FaInstagram, FaFileDownload } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const descriptions = useMemo(() => [
    "İstekli 💪",
    "Mücadeleci 🎯",
    "Yeni şeyler öğrenmekten zevk duyan 📚",
    "Pozitif 😊",
    "Sorun Çözebilen 🔧",
    "Uluslararası insan 🌍",
    "Yeni Nesil Mühendis 💻"
  ], []);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (displayText.length < descriptions[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(descriptions[currentTextIndex].substring(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 30);
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTextIndex, descriptions]);

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/TalatDemir',
      icon: <FaGithub className="text-3xl" />,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/talat-demir-93462029a/',
      icon: <FaLinkedin className="text-3xl" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/talat.demirr/',
      icon: <FaInstagram className="text-3xl" />,
      color: 'hover:text-pink-400'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="text-center z-10 pl-8">
        <div className="profile-frame mb-8">
          <div className="profile-border">
            <div className="profile-photo">
              <img
                src="/profile-photo.jpg"
                alt="Talat Demir"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400 hover:scale-105 transition-transform duration-300">
          Talat Demir
        </h1>

        <p className="text-xl text-gray-400 mb-8 hover:text-cyan-400 transition-colors duration-300">
          Yazılım Geliştirici & Bilgisayar Mühendisi
        </p>

        <div className="min-h-[3rem] flex items-center justify-center">
          <div className="typing-text-container">
            <p className="text-xl md:text-2xl text-cyan-400 font-mono">
              <span className="font-semibold">{displayText}</span>
              <span className="typing-cursor">|</span>
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex space-x-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-cyan-400 text-black font-bold rounded-full hover:bg-cyan-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
              >
                Hire me
              </button>

              <a
                href="/TalatDemir_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gray-700 text-white font-bold rounded-full hover:bg-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-gray-400/50 flex items-center space-x-2"
              >
                <FaFileDownload />
                <span>CV</span>
              </a>
            </div>

            <div className="flex justify-center items-center space-x-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-media-link text-white/80 transition-all duration-300 ${link.color} transform hover:scale-110 hover:-translate-y-1`}
                  title={link.name}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;