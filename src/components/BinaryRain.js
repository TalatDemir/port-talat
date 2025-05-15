import React, { useEffect, useRef } from 'react';

const BinaryRain = ({ density = 1 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Binary characters
    const binary = '10';
    const fontSize = 14;
    // Yoğunluğu density parametresine göre ayarla
    const baseColumns = Math.floor(canvas.width / fontSize);
    const columns = Math.floor(baseColumns * density);
    const columnPositions = Array(columns).fill(0).map((_, i) => {
      return {
        x: (i * (canvas.width / columns)),
        y: Math.random() * canvas.height
      };
    });
    
    // Center point (profile photo position)
    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.35; // Adjust based on photo position

    const draw = () => {
      // Semi-transparent black background for fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0d9488'; // Teal color matching the theme
      ctx.font = `${fontSize}px monospace`;

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
        ctx.fillStyle = `rgba(13, 148, 136, ${opacity})`;

        // Draw the character
        const char = binary.charAt(Math.floor(Math.random() * binary.length));
        ctx.fillText(char, x, y);

        columnPositions[i].y = y >= canvas.height ? 
          0 : 
          y + fontSize * (Math.random() * 0.5 + 0.5);
      });
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ opacity: 0.7 * density }}
    />
  );
};

export default BinaryRain; 