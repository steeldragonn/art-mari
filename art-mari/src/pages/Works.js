import React, { useEffect } from "react";
import "../styles/Works.css";

function Works() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pics1 = document.querySelector(".pics-container");
      const pics2 = document.querySelector(".pics-container2");
      const pics3 = document.querySelector(".pics-container3");

      // Move first container down
      pics1.style.transform = `translateY(${scrollY * 0.5}px)`;

      // Move second container up (opposite direction)
      pics2.style.transform = `translateY(-${scrollY * 0.5}px)`;

      // Move third container down (same as the first)
      pics3.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="works-container">
      <div className="pics-container">
        <img src="/works/сонце, що встає.jpg" alt="pic1" />
        <img src="/works/в хвилях.jpg" alt="pic2" />
        <img src="/works/гра флори.jpg" alt="pic4" />
        <img src="/works/на березі.jpg" alt="pic3" />
        <img src="/works/сонце, що падає.jpg.jpg" alt="pic5" />
        <img src="/works/вогонь троянд.jpg" alt="pic6" />
      </div>
      <div className="pics-container2">
        <img src="/works/Помаранчевий охоронець.jpg" alt="pic7" />
        <img src="/works/зелений куток.jpg" alt="pic8" />
        <img src="/works/відпливаємо.jpg" alt="pic9" />
        <img src="/works/відродження.jpg" alt="pic12" />
        <img src="/works/троянди серця.jpg" alt="pic11" />
        <img src="/works/рух часу.jpg" alt="pic10" />
      </div>
      <div className="pics-container3">
        <img src="/works/Торунь і день.jpg" alt="pic16" />
        <img src="/works/Торунь.jpg" alt="pic13" />
        <img src="/works/Торунь і вечір.jpg" alt="pic14" />
        <img src="/works/Торунь і сяйво свята.jpg" alt="pic15" />
        <img src="" alt="pic17" />
        <img src="" alt="pic18" />
      </div>
    </div>
  );
}

export default Works;
