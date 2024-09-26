import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import "./WorksDetail.css";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon

function WorksDetail() {
  const { id } = useParams();
  const [work, setWork] = useState(null);
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/works/${id}`);
        if (response.ok) {
          const data = await response.json();
          setWork(data);
        } else {
          console.error("Failed to fetch work details");
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
      <div className="work-detail-content">
        <img
          className="work-image"
          src={work.imageUrl}
          alt={work.name}
          onClick={openModal} // Clicking image opens the modal
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
          <button onClick={() => addToCart(work)}>Add to Cart</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          {/* Arrow to go back to the detail page */}
          <FaArrowLeft
            style={{ fontSize: "48px", color: "rgb(188, 41, 41)" }}
            className="back-arrow"
            onClick={closeModal}
          />

          {/* Modal content */}
          <div className="modal-content">
            <img className="modal-image" src={work.imageUrl} alt={work.name} />
          </div>
        </div>
      )}
    </div>
  );
}

export default WorksDetail;
