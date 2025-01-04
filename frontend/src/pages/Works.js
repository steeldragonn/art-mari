import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Works.css";

function Works() {
  const [worksData, setWorksData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const ITEMS_PER_PAGE = 15;

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/works");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setWorksData(data);
      } catch (error) {
        setError("Failed to fetch works data");
        console.error("Error fetching works data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorks();
  }, []);

  const handleClick = (id) => {
    navigate(`/work/${id}`);
  };

  const handlePageChange = (direction) => {
    if (
      direction === "next" &&
      currentPage * ITEMS_PER_PAGE < worksData.length
    ) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  if (loading) return <div>Loading works...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="works-wrapper">
      <div className="works-header">
        <h2 className="works-title">Works</h2>
        <div className="pagination-controls">
          <button
            className="arrow-button"
            onClick={() => handlePageChange("prev")}
            disabled={currentPage === 1}
          >
            ←
          </button>
          <button
            className="arrow-button"
            onClick={() => handlePageChange("next")}
            disabled={currentPage * ITEMS_PER_PAGE >= worksData.length}
          >
            →
          </button>
        </div>
      </div>
      <div className="works-grid">
        {worksData.slice(startIndex, endIndex).map((work) => (
          <div
            key={work._id}
            className="work-item"
            onClick={() => handleClick(work._id)}
          >
            <img src={work.imageUrl} alt={work.name} className="work-image" />
            <div className="work-info">
              <p className="work-title">{work.name}</p>
              <p className="work-year">{work.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
