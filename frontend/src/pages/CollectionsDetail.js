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

  console.log("collection,", collection);

  if (!collection) return <div>Loading...</div>;

  return (
    <div className="collection-detail">
      {/* Navigation back to all collections */}
      <button
        className="back-button"
        onClick={() => navigate("/collections")}
        style={{ marginBottom: "20px", cursor: "pointer", fontSize: "20px" }} // Adjust size as needed
      >
        &larr; Back to Collections
      </button>
      <h2>{collection.name}</h2>
      <div className="works-container">
        {collection.works.map((work) => (
          <img
            key={work._id}
            src={work.imageUrl}
            alt={work.name}
            onClick={() => navigate(`/work/${work._id}`)}
            className="work-image"
          />
        ))}
      </div>
    </div>
  );
}

export default CollectionsDetail;
