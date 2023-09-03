import React, { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import "./services.css";

const Services = () => {
  const [userData, setUserData] = useState([]);
  const [scaledCardIndices, setScaledCardIndices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();
        const users = data.results;
        setUserData(users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCardHover = (index) =>
    setScaledCardIndices((prevIndices) =>
      prevIndices.includes(index) ? prevIndices : [...prevIndices, index]
    );

  return (
    <div className="container">
      <p className="services-header-text">Services</p>
      <div className="services-title-container">
        <p className="services-title">The</p>
        <p className="services-title-strike">Unique</p>
        <p className="services-title">Unico Approach</p>
      </div>
      <div className="services-data-container">
        <div className="services-grid-container">
          {userData.map((user, index) => (
            <div
              className={`service-card ${
                scaledCardIndices.includes(index) ? "scaled" : ""
              }`}
              key={index}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={() => handleCardHover(null)}
            >
              <img
                className="service-card-image"
                src={user.picture.large}
                alt={user.name.first}
              />
              <div>
                <h3 className="service-card-title">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                <p className="service-card-details">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Button label={"Know More"} onClick={() => {}} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;