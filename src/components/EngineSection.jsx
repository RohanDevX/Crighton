import React, { useEffect, useRef, useState } from 'react';
import './EngineSection.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EngineSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const frameCount = 60;
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = useRef([]);
  const rotations = 3;

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
      const effectiveFrame = frameIndex % frameCount;
      const img = images.current[Math.floor(effectiveFrame)];
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

    gsap.set([textRef1.current, textRef2.current, textRef3.current], {
      x: '100%',
      opacity: 1 
    });

    const scrollDistance = 4000;
    const scrubSensitivity = 0.7;

    animation = gsap.to({frame: 0}, {
      frame: frameCount * rotations,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${scrollDistance}`,
        scrub: scrubSensitivity,
        pin: true,
        onUpdate: self => {
          const easedProgress = Math.pow(self.progress, 0.8);
          const frame = easedProgress * (frameCount * rotations - 1);
          render(frame);
          
          const rotationProgress = frame / frameCount;
          
          if (rotationProgress >= 1) {
            const animProgress = (rotationProgress - 1) / 2;
            
            if (animProgress <= 0.5) {
              const progress = animProgress / 0.5;
              gsap.to([textRef1.current, textRef2.current, textRef3.current], {
                x: `${100 - progress * 100}%`,
                duration: 0.1
              });
            } 
            else {
              const progress = (animProgress - 0.5) / 0.5;
              gsap.to([textRef1.current, textRef2.current, textRef3.current], {
                x: `-${progress * 100}%`,
                duration: 0.1
              });
            }
          } else {
            gsap.to([textRef1.current, textRef2.current, textRef3.current], {
              x: '100%',
              duration: 0.1
            });
          }
        }
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      animation?.scrollTrigger?.kill();
      animation?.kill();
    };
  }, [imagesLoaded, rotations]);

  return (
    <div className="engine-section" ref={containerRef}>
      {!imagesLoaded && <div className="loading-message">Loading engine...</div>}
      <canvas ref={canvasRef} />
      <div ref={textRef1} className="engine-text text-1">225 HP FOR 129.5 KG</div>
      <div ref={textRef2} className="engine-text text-2">390 HP/L - 1.68 HP/KG</div>
      <div ref={textRef3} className="engine-text text-3">1.5 FT/LBS AT 9500 RPM</div>
    </div>
  );
};

export default EngineSection;