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

  const Description = (name) => {
    return `Explore the timeless beauty of the ${name.toLowerCase()} collection. Each piece is a story waiting to be discovered.`;
  };

  if (!collection) return <div>Loading...</div>;

  return (
    <div className="collection-detail">
      {/* Left-side collection info */}
      <div className="collection-info">
        <h1 className="collection-name">{collection.name}</h1>
        <p className="collection-description">{Description(collection.name)}</p>
        <button
          className="back-button"
          onClick={() => navigate("/collections")}
        >
          &larr; Back to Collections
        </button>
      </div>

      {/* Works in horizontal layout */}
      <div className="works-container">
        {collection.works.map((work) => (
          <div
            key={work._id}
            className="work-item"
            onClick={() => navigate(`/work/${work._id}`)}
          >
            <img src={work.imageUrl} alt={work.name} className="work-image" />
            <div className="work-details"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollectionsDetail;
