import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CollectionsDetail.css";

function CollectionsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await fetch(
          `http://localhost:5001/api/collections/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          setCollection(data);
        } else {
          console.error("Failed to fetch collection data");
        }
      } catch (error) {
        console.error("Error fetching collection data:", error);
      }
    };

    fetchCollection();
  }, [id]);

  if (!collection) return <div>Loading...</div>;

  return (
    <div className="collection-detail">
      <button className="back-button" onClick={() => navigate("/collections")}>
        &larr; Back to Collections
      </button>

      <div className="collection-info">
        <h2>{collection.name}</h2>
        <p>{collection.description}</p>
      </div>

      {/* Works container for staggered layout */}
      <div className="works-container">
        {collection.works.map((work, index) => (
          <div
            key={work._id}
            className={`work-item ${index % 2 === 0 ? "even" : "odd"}`}
          >
            <img
              src={work.imageUrl}
              alt={work.name}
              onClick={() => navigate(`/work/${work._id}`)}
              className="work-image"
            />
            <div
              className={`work-info ${
                index % 2 === 0 ? "info-below" : "info-above"
              }`}
            >
              <p>
                <strong>{work.name}</strong>
              </p>
              <p>{work.year}</p>
              <p>{work.material}</p>
            </div>
            <div
              className={`line ${
                index % 2 === 0 ? "line-below" : "line-above"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionsDetail;
