import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form verilerini konsola yazdır (test için)
    console.log('Form verileri:', formData);
    // Formu temizle
    setFormData({ name: '', email: '', message: '' });
    // Kullanıcıya geri bildirim ver
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağım.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400">İletişim</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {/* Form Card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-cyan-400">Bana Ulaşın</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">Ad Soyad</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                placeholder="Adınız ve Soyadınız"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                placeholder="ornek@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Mesaj</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                placeholder="Mesajınızı buraya yazın..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors duration-300"
            >
              Gönder
            </button>
          </form>
        </div>

        {/* Contact Info Card */}
        <div className="space-y-6">
          {/* Social Media Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">Sosyal Medya</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/TalatDemir"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-gray-300 hover:text-cyan-400 group"
              >
                <FaGithub className="text-2xl group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/talat-demir-93462029a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-gray-300 hover:text-cyan-400 group"
              >
                <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/talat.demirr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 text-gray-300 hover:text-cyan-400 group"
              >
                <FaInstagram className="text-2xl group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">İletişim Bilgileri</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <a href="mailto:talatalat35@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  talatalat35@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 