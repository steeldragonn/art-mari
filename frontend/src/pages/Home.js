import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <div className="image-text-section">
          <div className="image-placeholder"></div>
          <div className="image-placeholder"></div>
          <div className="text-section">
            <h2>MARYNA LAKTIONOVA</h2>
            <p>ARTIST, ENTHUSIAST, CREATOR</p>
          </div>
        </div>

        <h1 className="large-title">MARI</h1>

        <div className="columns">
          <div className="column">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              volutpat ligula at velit pretium, at consectetur metus tincidunt.
            </p>
          </div>
          <div className="column">
            <p>
              Fusce faucibus, risus a auctor aliquam, purus velit consectetur
              nisi, non consequat nisl nulla eu lacus.
            </p>
          </div>
          <div className="column image-placeholder"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
