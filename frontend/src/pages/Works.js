// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Works.css";
// import "../index.css";

// function Works() {
//   const [worksData, setWorksData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchWorks = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/api/works");
//         if (!response.ok) throw new Error("Network response was not ok");
//         const data = await response.json();
//         setWorksData(data);
//       } catch (error) {
//         setError("Failed to fetch works data");
//         console.error("Error fetching works data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchWorks();
//   }, []);

//   const handleClick = (id) => {
//     navigate(`/work/${id}`);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const picsContainers = document.querySelectorAll(
//         ".pics-container, .pics-container2, .pics-container3"
//       );
//       picsContainers.forEach((container) => {
//         container.style.transform = `translateY(${scrollY * 0.5}px)`;
//       });
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   if (loading) return <div>Loading works...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="works-wrapper">
//       <div className="works-container">
//         <div className="pics-container">
//           {worksData.slice(0, 8).map((work) => (
//             <img
//               key={work._id}
//               src={work.imageUrl}
//               alt={work.name}
//               onClick={() => handleClick(work._id)}
//               style={{ cursor: "pointer" }}
//             />
//           ))}
//         </div>
//         <div className="pics-container2">
//           {worksData.slice(8, 17).map((work) => (
//             <img
//               key={work._id}
//               src={work.imageUrl}
//               alt={work.name}
//               onClick={() => handleClick(work._id)}
//               style={{ cursor: "pointer" }}
//             />
//           ))}
//         </div>
//         <div className="pics-container3">
//           {worksData.slice(17).map((work) => (
//             <img
//               key={work._id}
//               src={work.imageUrl}
//               alt={work.name}
//               onClick={() => handleClick(work._id)}
//               style={{ cursor: "pointer" }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Works;
