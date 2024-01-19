import React from "react";
import Service from "@/components/HomePage/Services/Service";
import Services from "@/components/landingPage/Services";

import "./PagesCss/service.css"
import TechStack from "@/components/landingPage/TechStack";

const ServicePage = () => {

  return (
    <>
      <header
        className="page-header section-padding pb-0 sub-bg"
        style={{ transform: "none", rotate: "none", scale: "none" }}
      >
        <div
          className="container mt-80"
          style={{
            transform: "none",
            rotate: "none",
            scale: "none",
            opacity: 1,
          }}
        >
          <div className="row">
            <div className="col-lg-8">
              <div className="caption">
                <h6 className="sub-title">What Can We Do ?</h6>
                <h1 className="fz-55">
                  We combine our passion for design and code.
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 offset-lg-4">
              <div className="text mt-30">
                <p>
                  We help our clients succeed by creating brand identities,
                  digital experiences, and print materials that communicate
                  clearly, achieve marketing goals, and look fantastic.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-marq xlrg section-padding pb-0">
          <div className="slide-har st1">
            <div className="box">
              {[...Array(5)].map((_, index) => (
                <div className="item" key={index}>
                  <h4>Services</h4>
                </div>
              ))}
            </div>
            <div className="box">
              {[...Array(5)].map((_, index) => (
                <div className="item" key={index}>
                  <h4>Services</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="Services">
        <Services />
      </div>


      {/* Skill part */}
     <div className="skills-part">
      <TechStack/>
     </div>
    </>
  );
};

export default ServicePage;
