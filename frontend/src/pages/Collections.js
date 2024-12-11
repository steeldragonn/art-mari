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
      {/* Top Section: Header and Text */}
      <div className="top-section">
        <h1 className="collections-header">Collections</h1>
        <div className="collections-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      {/* Gap Between Text and Images */}
      <div className="gap"></div>

      {/* Image Section */}
      <div className="image-section">
        {collectionsData.map((collection) => (
          <div
            key={collection._id}
            className="image-container"
            onClick={() => handleCollectionClick(collection._id)} // Handle click
          >
            <img
              src={collection.imageUrl}
              alt={collection.name}
              className="image"
            />
            <div className="image-text-overlay">
              <h2>{collection.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
