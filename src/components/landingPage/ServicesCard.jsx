import React from "react";
import "./landingCss/ServicesCard.css";
import Lottie from "lottie-react";
const ServicesCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="container-card bg-green-box">
          <div className="icon-img-60 mb-40">
            <img loading="lazy" src={props.item} alt="" />
          </div>
          <Lottie
            animationData={props.Lottieimg}
            style={{
              maxHeight: "120px",
              opacity: "0.3",
              position: "relative",
              bottom: "7rem",
            }}
          />
          <p className="card-title">{props.title}</p>
          <hr />
          <p className="card-description">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
