import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

const ImageTrack = () => {
  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [prevPercentage, setPrevPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80",
    "https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleOnDown = (e) => {
    setMouseDownAt(e.clientX);
  };

  const handleOnUp = () => {
    setMouseDownAt(0);
    setPrevPercentage(percentage);
  };

  const handleOnMove = (e) => {
    if (mouseDownAt === 0) return;
    
    const mouseDelta = e.clientX - mouseDownAt;
    const maxDelta = window.innerWidth / 4;
    const newPercentage = (mouseDelta / maxDelta) * 100;
    const nextPercentage = Math.max(Math.min(prevPercentage + newPercentage, 100), -100);
    
    setPercentage(nextPercentage);
  };

  return (
    <div className={`image-track-container ${loaded ? 'loaded' : ''}`}>
      <div
        id="image-track"
        style={{
          transform: `translateX(${percentage}%)`,
          transition: 'transform 1200ms ease',
          top: '50%',
          position: 'absolute',
          transform: `translate(-50%, -50%) translateX(${percentage}%)`,
        }}
        onMouseDown={handleOnDown}
        onMouseUp={handleOnUp}
        onMouseMove={handleOnMove}
        onTouchStart={(e) => handleOnDown(e.touches[0])}
        onTouchEnd={handleOnUp}
        onTouchMove={handleOnMove}
      >
        {images.map((src, index) => (
          <img
            key={index}
            className="image"
            src={src}
            draggable="false"
            style={{
              width: '40vmin',
              height: '56vmin',
              objectFit: 'cover',
              objectPosition: `${50 - percentage / 2}% center`,
              transition: 'object-position 1200ms ease, opacity 1s ease',
              opacity: loaded ? 1 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageTrack;
