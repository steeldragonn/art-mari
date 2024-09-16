import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Works.css";

function Works() {
  const [worksData, setWorksData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/works");
        if (response.ok) {
          const data = await response.json();
          setWorksData(data);
        } else {
          console.error("Failed to fetch works data");
        }
      } catch (error) {
        console.error("Error fetching works data:", error);
      }
    };

    fetchWorks();
  }, []);

  const handleClick = (id) => {
    navigate(`/work/${id}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pics1 = document.querySelector(".pics-container");
      const pics2 = document.querySelector(".pics-container2");
      const pics3 = document.querySelector(".pics-container3");

      if (pics1) pics1.style.transform = `translateY(${scrollY * 0.5}px)`;
      if (pics2) pics2.style.transform = `translateY(${scrollY * 0.5}px)`;
      if (pics3) pics3.style.transform = `translateY(${scrollY * 0.5}px)`;
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
          {worksData.slice(0, 8).map((work) => (
            <img
              key={work._id}
              src={work.imageUrl}
              alt={work.name}
              onClick={() => handleClick(work._id)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        <div className="pics-container2">
          {worksData.slice(8, 17).map((work) => (
            <img
              key={work._id}
              src={work.imageUrl}
              alt={work.name}
              onClick={() => handleClick(work._id)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
        <div className="pics-container3">
          {worksData.slice(17).map((work) => (
            <img
              key={work._id}
              src={work.imageUrl}
              alt={work.name}
              onClick={() => handleClick(work._id)}
              style={{ cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;
