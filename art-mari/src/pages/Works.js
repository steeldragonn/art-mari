import React, { useEffect } from "react";
import "./Works.css";

function Works() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pics1 = document.querySelector(".pics-container");
      const pics2 = document.querySelector(".pics-container2");
      const pics3 = document.querySelector(".pics-container3");

      // move first container down
      pics1.style.transform = `translateY(${scrollY * 0.5}px)`;

      // move second container up (opposite direction)
      pics2.style.transform = `translateY(${scrollY * 0.5}px)`;

      // move third container down (same as the first)
      pics3.style.transform = `translateY(${scrollY * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="works-wrapper">
      <div className="works-container">
        <div className="pics-container">
          <img src="/works/сонце, що падає.jpg" alt="pic10" />
          <img src="/works/в погоні за дитинством.jpg" alt="pic11" />
          <img src="/works/відпливаємо.jpg" alt="pic9" />
          <img src="/works/сонце, що встає.jpg" alt="pic10" />
          <img src="/works/Де горизонт зникає.jpg" alt="pic10" />
          <img src="/works/в хвилях.jpg" alt="pic10" />
          <img src="/works/ в морі.jpg" alt="pic12" />
          <img src="/works/на березі.jpg" alt="pic12" />
        </div>
        <div className="pics-container2">
          <img src="/works/феєрверк кольору.jpg" alt="pic6" />
          <img src="/works/муза.jpg" alt="pic5" />
          <img src="/works/гра флори.jpg" alt="pic2" />
          <img src="/works/дві частини цілого.jpg" alt="pic4" />
          <img src="/works/очі посеред темряви.jpg" alt="pic6" />
          <img src="/works/розмова.jpg" alt="pic6" />
          <img src="/works/звʼязок.jpg" alt="pic3" />
          <img src="/works/троянди серця.jpg" alt="pic6" />
          <img src="/works/вогонь троянд.jpg" alt="pic1" />
        </div>
        <div className="pics-container3">
          <img src="/works/зелений куток.jpg" alt="pic8" />
          <img src="/works/Золото Торуня.jpg" alt="pic13" />
          <img src="/works/Торунь і осінь.jpg" alt="pic17" />
          <img src="/works/Помаранчевий охоронець.jpg" alt="pic7" />
          <img src="/works/Торунь і вечір.jpg" alt="pic14" />
          <img src="/works/Торунь і сяйво свята.jpg" alt="pic15" />
          <img src="/works/Торунь і день.jpg" alt="pic16" />
          <img src="/works/Торунь.jpg" alt="pic13" />
          <img src="/works/Торунь і сонце.jpg" alt="pic18" />
        </div>
        {/* <div className="text-container">
          <h1>
            Works are inspired by the surroundings we see, feel, and touch every
            day of our lives
          </h1>
        </div> */}
      </div>
    </div>
  );
}

export default Works;
