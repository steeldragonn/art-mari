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
      {/* Top section: Collection image and details */}
      {/* <div className="top-section">
        <img
          src={collection.imageUrl}
          alt={collection.name}
          className="collection-image"
        /> */}
      {/* <div className="collection-info">
          <h1 className="collection-name">{collection.name}</h1>
          <p className="collection-description">
            Explore the timeless beauty of the {collection.name} collection.
          </p>
        </div> */}
      {/* </div> */}

      <div className="works-section">
        <div className="works-header">
          <h2 className="works-title">Works</h2>
          <div className="pagination-controls">
            <button className="arrow-button">←</button>
            <button className="arrow-button">→</button>
          </div>
        </div>

        {/* Grid of works */}
        <div className="works-grid">
          {collection.works.map((work) => (
            <div
              key={work._id}
              className="work-item"
              onClick={() => navigate(`/work/${work._id}`)}
            >
              <div className="work-info">
                <p className="work-title">{work.name}</p>
                <p className="work-year">{work.year}</p>
                <p className="work-description">{work.description}</p>
              </div>
              <img src={work.imageUrl} alt={work.name} className="work-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CollectionsDetail;
