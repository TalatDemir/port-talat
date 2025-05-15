import React, { useEffect, useRef } from 'react';

const BinaryRain = ({ density = 1 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to document height instead of window height
    const resizeCanvas = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      canvas.width = window.innerWidth;
      canvas.height = docHeight;
      
      // Set high DPI for sharper text
      const dpr = window.devicePixelRatio || 1;
      canvas.style.width = canvas.width + 'px';
      canvas.style.height = canvas.height + 'px';
      canvas.width *= dpr;
      canvas.height *= dpr;
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary characters
    const binary = '10';
    const fontSize = 10; // Daha küçük font boyutu
    // Yoğunluğu density parametresine göre ayarla
    const baseColumns = Math.floor(canvas.width / (fontSize * 0.7)); // Daha sık kolonlar
    const columns = Math.floor(baseColumns * density);
    const columnPositions = Array(columns).fill(0).map((_, i) => {
      return {
        x: (i * (canvas.width / columns)),
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 0.5 // Her kolon için farklı hız
      };
    });
    
    // Center point (profile photo position)
    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.35;

    const draw = () => {
      // Semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Courier New", monospace`; // Daha net font
      ctx.textBaseline = 'top'; // Daha düzgün hizalama

      columnPositions.forEach((pos, i) => {
        const x = pos.x;
        const y = pos.y;

        // Calculate distance from center
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Adjust opacity based on distance from center
        const maxDistance = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height);
        const opacity = (1 - (distance / maxDistance)) * density;
        
        // Ana renk ve glow efekti
        const char = binary.charAt(Math.floor(Math.random() * binary.length));
        
        // Glow efekti
        ctx.shadowBlur = 2;
        ctx.shadowColor = 'rgba(13, 148, 136, 0.5)';
        
        // Karakteri çiz
        ctx.fillStyle = `rgba(13, 148, 136, ${opacity})`;
        ctx.fillText(char, x, y);
        
        // Glow efektini sıfırla
        ctx.shadowBlur = 0;

        // Pozisyonu güncelle ve sayfanın altına gelince tekrar yukarı al
        columnPositions[i].y = y >= canvas.height ? 
          0 : 
          y + fontSize * pos.speed;
      });
    };

    const interval = setInterval(draw, 50);

    // Sayfa içeriği değiştiğinde canvas'ı güncelle
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(document.body);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
      resizeObserver.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ 
        opacity: 0.7 * density,
        minHeight: '100vh',
        height: '100%'
      }}
    />
  );
};

export default BinaryRain; 