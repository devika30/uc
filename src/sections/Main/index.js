import React from "react";
import Button from "../../components/common/Button";
import mobile from "../../images/1.svg";
import code from "../../images/2.svg";
import star from "../../images/3.svg";
import "./main.css";

const mainData = [
  { id: 0, title: "Top Mobile App Developers", image: mobile },
  { id: 1, title: "Expert in No code Web Development", image: code },
  { id: 2, title: "Top Design Agency", image: star },
];

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="container">
        <h1 className="main-section-title">
          <span className="main-section-title-muted">Transform your Ideas</span>{" "}
          into Stunning Products with Unico's Expert Team
        </h1>
        <p className="main-section-content">
          Build, Launch, and Scale your Products with Unmatched Efficiency
        </p>
        <Button label={"Get Started"} onClick={() => {}} type={"white"} />
        <div className="main-section-feature-container">
          {mainData.map((data) => (
            <div key={data.id} className="main-section-feature">
              <img src={data.image} alt={data.title} />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainSection;