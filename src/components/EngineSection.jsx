import React, { useEffect, useRef, useState } from 'react';
import './EngineSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EngineSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const frameCount = 60;
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = useRef([]);

  // Correct path for 1.jpeg to 60.jpeg
  const currentFrame = index => `/images/engine/${index + 1}.jpeg`;

  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;

    const loadImage = index => {
      const img = new Image();
      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        images.current[index] = img;
        if (loadedCount === frameCount) setImagesLoaded(true);
      };
      img.onerror = () => {
        if (!isMounted) return;
        console.error(`Failed to load: ${currentFrame(index)}`);
        loadedCount++;
        if (loadedCount === frameCount) setImagesLoaded(true);
      };
      img.src = currentFrame(index);
    };

    for (let i = 0; i < frameCount; i++) {
      loadImage(i);
    }

    return () => { isMounted = false };
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animation;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(0);
    };

    const render = frameIndex => {
      const img = images.current[Math.floor(frameIndex)];
      if (!img) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    animation = gsap.to({frame: 0}, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=2000',
        scrub: 1,
        pin: true,
        onUpdate: self => render(self.progress * (frameCount - 1))
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      animation?.scrollTrigger?.kill();
      animation?.kill();
    };
  }, [imagesLoaded]);

  return (
    <div className="engine-section" ref={containerRef}>
      {!imagesLoaded && <div className="loading-message">Loading engine...</div>}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default EngineSection;