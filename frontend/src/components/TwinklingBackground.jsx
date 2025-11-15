import { useEffect, useRef } from 'react';
import './TwinklingBackground.css';

const TwinklingBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let dots = [];
    
    // Set canvas size and regenerate dots
    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = Math.max(window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight);
      
      canvas.width = width;
      canvas.height = height;
      
      // Regenerate dots when resizing
      dots = [];
      const numberOfDots = 200;
      
      for (let i = 0; i < numberOfDots; i++) {
        dots.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.5,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          direction: Math.random() > 0.5 ? 1 : -1
        });
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach(dot => {
        // Update opacity for twinkling effect
        dot.opacity += dot.twinkleSpeed * dot.direction;
        
        // Reverse direction when reaching limits
        if (dot.opacity >= 1) {
          dot.opacity = 1;
          dot.direction = -1;
        } else if (dot.opacity <= 0.1) {
          dot.opacity = 0.1;
          dot.direction = 1;
        }
        
        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${dot.opacity})`;
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="twinkling-background" />;
};

export default TwinklingBackground;
