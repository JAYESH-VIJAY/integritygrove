import React from "react";
import {
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
} from "@/assets/imgs/HomePage";

const Projects = () => {
  const portfolioItems = [
    {
      id: 1,
      imgSrc: Project1, 
      category: "Branding",
      title: "GeekFolio Architecture",
      year: "2023",
      detailsLink: "project-details1.html",
    },
    {
      id: 2,
      imgSrc: Project2,
      category: "Branding",
      title: "Luxury Modern Chair",
      year: "2023",
      detailsLink: "project-details1.html",
    },
    {
      id: 3, // Corrected the id
      imgSrc: Project3,
      category: "Branding",
      title: "Partiner BPO",
      year: "2023",
      detailsLink: "project-details1.html",
    },
    {
      id: 4, // Corrected the id
      imgSrc: Project4,
      category: "Branding",
      title: "From our gallery",
      year: "2023",
      detailsLink: "project-details1.html",
    },
    {
      id: 5, // Corrected the id
      imgSrc: Project5,
      category: "Branding",
      title: "Astra Brand Identity",
      year: "2023",
      detailsLink: "project-details1.html",
    },
    // Add more items as needed
  ];

  return (
    <section className="portfolio clasic section-padding" data-scroll-index="3">
      <div className="container">
        <div className="item">
          <h1>Projects</h1>
        </div>
        <div className="sec-lg-head mb-50">{/* ... (unchanged) ... */}</div>
        <div className="row">
          {portfolioItems.map((item) => (
            <div key={item.id} className="col-lg-6">
              <div className="item mt-30">
                <div className="o-hidden">
                  <div
                    className="img imago wow animated"
                    style={{ visibility: "visible" }}
                  >
                    <img src={item.imgSrc} alt="" className="radius-10" />
                    <a href={item.detailsLink} className="tag">
                      <span>{item.category}</span>
                    </a>
                  </div>
                </div>
                <div
                  className="cont mt-30 d-flex wow fadeIn"
                  data-wow-delay=".4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeIn",
                  }}
                >
                  <div>
                    <h6 className="line-height-1">
                      <a href={item.detailsLink}>{item.title}</a>
                    </h6>
                  </div>
                  <div className="ml-auto">
                    <p className="fz-14">© {item.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
