import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./WorksDetail.css";

function WorksDetail() {
  const { id } = useParams(); // get the work ID from URL parameters
  const [work, setWork] = useState(null); //  to hold work details

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
  }, [id]); // fetch work details when ID changes

  if (!work) return <div>Loading...</div>; //  loading message while fetching

  return (
    <div className="work-detail">
      <img src={work.imageUrl} alt={work.name} />
      <h1>{work.name}</h1>

      <p>Size: {work.size}</p>
      <p>Year: {work.year}</p>
      <p>Material: {work.material}</p>
      <p>Description: {work.description}</p>
      <p>Price: {work.price}</p>
    </div>
  );
}

export default WorksDetail;