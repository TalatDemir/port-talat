import React, { useEffect, useRef } from 'react';

const BinaryBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const width = window.innerWidth;
    const columns = Math.floor(width / 25); // Daha geniş sütunlar

    const createBinaryString = () => {
      let str = '';
      for (let i = 0; i < 50; i++) {
        // Daha fazla 1 olasılığı ekle
        str += Math.random() > 0.3 ? '1' : '0';
        str += '<br>';
      }
      return str;
    };

    const createColumns = () => {
      container.innerHTML = '';
      
      for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 25}px`; // Sütunlar arası mesafeyi artır
        column.style.animationDelay = `${Math.random() * 5}s`; // Daha uzun gecikme
        column.style.animationDuration = `${10 + Math.random() * 10}s`; // Rastgele hız
        column.innerHTML = createBinaryString();
        container.appendChild(column);
      }
    };

    // İlk sütunları oluştur
    createColumns();

    // Her 10 saniyede bir bazı sütunları güncelle
    const updateInterval = setInterval(() => {
      const randomColumns = container.querySelectorAll('.matrix-column');
      randomColumns.forEach(column => {
        if (Math.random() > 0.7) { // %30 olasılıkla güncelle
          column.innerHTML = createBinaryString();
        }
      });
    }, 10000);

    // Pencere boyutu değiştiğinde sütunları yeniden oluştur
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newColumns = Math.floor(newWidth / 25);
      createColumns();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(updateInterval);
    };
  }, []);

  return <div ref={containerRef} className="matrix-background" />;
};

export default BinaryBackground; 