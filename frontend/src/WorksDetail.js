import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useCart } from "./CartContext";
import "./WorksDetail.css";
import { FaArrowLeft } from "react-icons/fa";

function WorksDetail() {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/work/${id}`);
        if (response.ok) {
          const data = await response.json();
          setWork(data);
        } else {
          console.error("Failed to fetch work details", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching work details:", error);
      }
    };

    fetchWork();
  }, [id]);

  if (!work) return <div>Loading...</div>;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="work-detail">
      <FaArrowLeft
        className="back-arrow"
        onClick={() => navigate(-1)}
        style={{
          fontSize: "36px",
          color: "#bc2929",
          cursor: "pointer",
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      />

      <div className="work-detail-content">
        <img
          className="work-image"
          src={work.imageUrl}
          alt={work.name}
          onClick={openModal} //  image opens the modal
        />
        <div className="work-info">
          <h1>{work.name}</h1>
          <p>
            <strong>Size:</strong> {work.size}
          </p>
          <p>
            <strong>Year:</strong> {work.year}
          </p>
          <p>
            <strong>Material:</strong> {work.material}
          </p>
          <p>
            <strong>Description:</strong> {work.description}
          </p>
          <p>
            <strong>Price:</strong> {work.price}
          </p>
          <p>
            <strong>Available:</strong> {work.available}
          </p>
          <button onClick={() => addToCart(work)}>Add to Cart</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <FaArrowLeft className="back-arrow" onClick={closeModal} />
          <div className="modal-content">
            <img className="modal-image" src={work.imageUrl} alt={work.name} />
          </div>
        </div>
      )}
    </div>
  );
}

export default WorksDetail;
