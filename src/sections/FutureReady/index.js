import React, { useState, useRef, useEffect } from "react";
import "./futureready.css";
import xano from "../../images/xano.png";
import Card from "../../components/common/Card";
import { noCode, codePlatforms } from "./data";

const FutureReady = () => {
  const [activeTab, setActiveTab] = useState("nocode");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const noCodeRef = useRef(null);
  const codeRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target === noCodeRef.current) {
          setActiveTab("nocode");
        } else if (entry.target === codeRef.current) {
          setActiveTab("code");
        }
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(handleIntersection, options);

  useEffect(() => {
    if (noCodeRef.current) {
      observer.observe(noCodeRef.current);
    }
    if (codeRef.current) {
      observer.observe(codeRef.current);
    }
    return () => {
      if (noCodeRef.current) {
        observer.unobserve(noCodeRef.current);
      }
      if (codeRef.current) {
        observer.unobserve(codeRef.current);
      }
    };
  }, []);

  return (
    <div className="future-ready">
      <div className="container">
        <div className="future-ready-container">
          <h2 className="future-ready-title">Create Future-Ready Platforms!</h2>
          <img src={xano} className="xano-card" alt="Xano" />
          <p className="future-ready-content">
            We have partnered with Xano to give you the ultimate experience.
            Xano builder provides us with a scalable server, flexible database,
            and a no-code API that transforms, filters and integrates with data
            anywhere
          </p>

          <div className="future-ready-grid-tab-container">
            <a
              href="#nocode"
              className={`future-ready-grid-tab ${
                activeTab === "nocode" ? "active" : ""
              }`}
              onClick={() => handleTabClick("nocode")}
            >
              <p>Build Faster</p>
              <h2>No Code Platform</h2>
            </a>
            <a
              href="#code"
              className={`future-ready-grid-tab ${
                activeTab === "code" ? "active" : ""
              }`}
              onClick={() => handleTabClick("code")}
            >
              <p>Achieve Scale</p>
              <h2>Code Platforms</h2>
            </a>
          </div>
          <div
            className="future-ready-grid future-ready-grid-nocode"
            id="nocode"
            ref={noCodeRef}
          >
            <div className="future-ready-grid-lhs">
              <p>
                Developing with no code platforms enables us to deliver
                outstanding results on time.
              </p>
              <ul>
                <li>Scalable Server</li>
                <li>Flexible Database</li>
                <li>Easy to Transform</li>
                <li>Simple Integrations</li>
              </ul>
            </div>
            <div className="future-ready-grid-rhs">
              {noCode.map((data) => (
                <Card image={data.image} content={data.content} />
              ))}
            </div>
          </div>

          <div
            className="future-ready-grid future-ready-grid-nocode"
            id="code"
            ref={codeRef}
          >
            <div className="future-ready-grid-lhs">
              <p>
                Code platforms help achieve scale easily. Code platforms
                increase the speed of development and manage developments more
                efficiently.
              </p>
              <ul>
                <li>Scalable Server</li>
                <li>Flexible Database</li>
                <li>Easy to Transform</li>
                <li>Simple Integrations</li>
              </ul>
            </div>
            <div className="future-ready-grid-rhs">
              {codePlatforms.map((data) => (
                <Card
                  title={data.title}
                  content={data.content}
                  children={data.children}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureReady;