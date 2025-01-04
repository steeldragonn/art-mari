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

  const openModal = () => {
    document.body.classList.add("no-navbar");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("no-navbar");
    setIsModalOpen(false);
  };

  return (
    <div className="work-detail">
      <FaArrowLeft className="back-arrow" onClick={() => navigate(-1)} />

      <div className="work-detail-layout">
        <div className="work-photo-column">
          <img
            className="work-image"
            src={work.imageUrl}
            alt={work.name}
            onClick={openModal}
          />
        </div>

        <div className="work-info-column">
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
            <strong>Price:</strong> {work.price} USD
          </p>
          <button className="add-to-cart-btn" onClick={() => addToCart(work)}>
            Add to Cart
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <img className="modal-image" src={work.imageUrl} alt={work.name} />
        </div>
      )}
    </div>
  );
}

export default WorksDetail;
