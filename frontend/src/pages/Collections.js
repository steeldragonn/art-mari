import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Collections.css";
import axios from "axios";
function Collections() {
  const [collectionsData, setCollectionsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/collections", {
          method: "GET",
        });
        console.log("resonse:", response);
        if (response.ok) {
          const data = await response.json();
          setCollectionsData(data);
        } else {
          console.error("Failed to fetch collections data");
        }
      } catch (error) {
        console.error("Error fetching collections data:", error);
      }
    };

    fetchCollections();
  }, []);

  const handleCollectionClick = (id) => {
    navigate(`/collections/${id}`);
  };

  return (
    <div className="collections-container">
      {collectionsData.map((collection) => (
        <div
          key={collection._id}
          className="collection"
          onClick={() => handleCollectionClick(collection._id)}
        >
          <img
            src={collection.imageUrl}
            alt={collection.name}
            className="collection-image"
          />
          <h3>{collection.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Collections;
