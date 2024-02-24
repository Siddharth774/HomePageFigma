import React from "react";
import laptopImg from "../assets/laptop.png";
import "./CardBottom.scss";
const CardBottom = () => {
  return (
    <section className="card-bottom">
      <div>
        <div className="b-img pt-5 mt-10 mb-20">
          <img src={laptopImg} alt={laptopImg} />
        </div>
        <div>
          <div className="b-tag">
            <span>20% off</span>
            <span>Limited Time</span>
          </div>
          <div className="bottom-title">
            <h3>Webbuilder 1</h3>
            <p>Computer Modern clasic with wix support</p>
          </div>
          <div className="b-price">
            <span>$39.96</span>
            <span>$49.96</span>
            <span>(20% off)</span>
          </div>
          <div className="b-view">
            <button>View Deal</button>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default CardBottom;
