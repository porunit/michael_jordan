import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './InteractiveText.css';

const InteractiveText = () => {
  const navigate = useNavigate();
  const linkRef = useRef(null);

  // Функция для перенаправления пользователя
  const navigateToImages = () => {
    linkRef.current.classList.add('fade-out');
    setTimeout(() => {
      navigate('/images');
    }, 1000); // Задержка для завершения анимации перед переходом
  };

  // Анимация текста при монтировании компонента
  useEffect(() => {
    const text = linkRef.current.innerText.split("");
    linkRef.current.innerText = "";

    text.forEach((value, index) => {
      const outer = document.createElement("span");
      outer.className = "outer";

      const inner = document.createElement("span");
      inner.className = "inner";
      inner.style.animationDelay = `${rand(-5000, 0)}ms`;

      const letter = document.createElement("span");
      letter.className = "letter";
      letter.innerText = value;
      letter.style.animationDelay = `${index * 1000}ms`;

      inner.appendChild(letter);
      outer.appendChild(inner);
      linkRef.current.appendChild(outer);
    });
  }, []);

  // Генерация случайного времени задержки
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="text-container">
      <div className="line">
        <p className="word">A</p>
        <p className="word">Person</p>
      </div>
      <div className="line">
        <p className="word">Love</p>
        <p className="word">&</p>
      </div>
      <div className="line">
        <p className="word">Bebronuh</p>
        <p className="word">↓</p>
      </div>
      <div className="line">
        <a ref={linkRef} onClick={navigateToImages} className="word fancy">
          Posmotret →
        </a>
      </div>
    </div>
  );
};

export default InteractiveText;