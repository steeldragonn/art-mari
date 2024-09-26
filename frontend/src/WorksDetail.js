import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "./CartContext";
import "./WorksDetail.css";
import OrderList from "./pages/OrderList";

function WorksDetail() {
  const { id } = useParams(); // get the work ID from URL parameters
  const [work, setWork] = useState(null); // to hold work details
  const { addToCart } = useCart(); //  addToCart from CartContext

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

  return (
    <div className="work-detail">
      <div className="work-detail-content">
        <img className="work-image" src={work.imageUrl} alt={work.name} />
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
    </div>
  );
}

export default WorksDetail;
