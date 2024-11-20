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
        const response = await axios.get(
          "http://localhost:5001/api/collections"
        );
        setCollectionsData(response.data);
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
      <h1 className="collections-header">Collections</h1>
      <div className="collections-grid">
        {collectionsData.map((collection) => (
          <div
            key={collection._id}
            className="collection-card"
            onClick={() => handleCollectionClick(collection._id)}
          >
            <img
              src={collection.imageUrl}
              alt={collection.name}
              className="collection-image"
            />
            <h3 className="collection-name">{collection.name}</h3>
            <p className="collection-price">From £{collection.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
