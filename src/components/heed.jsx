import React, { useEffect, useRef, useState } from 'react';
import './heed.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeedSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const frameCount = 96;
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const images = useRef([]);
  

  const scrollDistance = 6500;
  const baseDampingFactor = 0.3; 

  const currentFrame = index => `/images/frames/heed000${100 + index}.png`;

  useEffect(() => {
    let isMounted = true;
    const concurrentLoads = 4;
    let loadedCount = 0;

    const loadImageBatch = async (start, end) => {
      await Promise.all(
        Array.from({ length: end - start }).map((_, i) =>
          new Promise(resolve => {
            const img = new Image();
            img.onload = () => {
              if (!isMounted) return;
              loadedCount++;
              images.current[start + i] = img;
              resolve();
            };
            img.onerror = () => {
              if (!isMounted) return;
              loadedCount++;
              resolve();
            };
            img.src = currentFrame(start + i);
            img.loading = 'eager';
          })
        )
      );
    };

    const loadImages = async () => {
      for (let i = 0; i < frameCount; i += concurrentLoads) {
        if (!isMounted) break;
        await loadImageBatch(i, Math.min(i + concurrentLoads, frameCount));
      }
      if (isMounted && loadedCount === frameCount) {
        setImagesLoaded(true);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
      images.current = [];
    };
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animation;
    let currentFrameIndex = 0;
    let lastScrollTime = 0;
    let lastScrollPos = 0;
    let velocity = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(currentFrameIndex);
    };

    const renderFrame = (frameIndex) => {
      const img = images.current[frameIndex % frameCount];
      if (!img) return;

      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    animation = gsap.to({ progress: 0 }, {
      progress: 1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          const now = performance.now();
          
          if (lastScrollTime > 0) {
            const deltaTime = (now - lastScrollTime) / 1000;
            const deltaPos = self.scroll() - lastScrollPos;
            velocity = (velocity * 0.8) + ((deltaPos / deltaTime) * 0.2);
          }
          lastScrollTime = now;
          lastScrollPos = self.scroll();

          const dynamicDamping = Math.min(0.5, baseDampingFactor + Math.abs(velocity) / 2000);
          
          const targetFrame = Math.min(self.progress, 1) * frameCount;
          const frameDelta = targetFrame - currentFrameIndex;
          currentFrameIndex += frameDelta * dynamicDamping;

          if (Math.abs(frameDelta) < 0.5) {
            currentFrameIndex = targetFrame;
          }

          renderFrame(Math.round(currentFrameIndex));
        }
      }
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      animation?.scrollTrigger?.kill();
      animation?.kill();
    };
  }, [imagesLoaded, baseDampingFactor]); 

  return (
    <div className="heed-section" ref={containerRef}>
      {!imagesLoaded && (
        <div className="loading-message">
          <div className="spinner"></div>
          Loading animation...
        </div>
      )}
      <canvas ref={canvasRef} />
    </div>
  );
};

export default HeedSection;