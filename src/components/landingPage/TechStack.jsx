import React from "react";
import "./landingCss/Projects.css";
import {
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
} from "@/assets/imgs/HomePage";

const BrandItem = ({ imgUrl, link, word, charTotal, wordIndex }) => (
  <div className="col-md-4 col-6 brand box-bg">
    <div className="item mb-30 wow fadeIn" data-wow-delay=".6s">
      <div className="img">
        <img src={imgUrl} alt="" />
      </div>
      <a
        href={link}
        className="link words chars splitting"
        data-splitting=""
        style={{ "--word-total": 1, "--char-total": charTotal }}
      >
        <span
          className="word"
          data-word={word}
          style={{ "--word-index": wordIndex }}
        >
          {word.split("").map((char, index) => (
            <span
              key={index}
              className="char"
              data-char={char}
              style={{ "--char-index": index }}
            >
              {char}
            </span>
          ))}
        </span>
      </a>
    </div>
  </div>
);

const generateBrandItems = () => {
  const brandData = [
    { index: 1, imgUrl: Logo1, brandName: "www.git.com" },
    { index: 2, imgUrl: Logo2, brandName: "www.typescript.com" },
    { index: 3, imgUrl: Logo3, brandName: "www.javascript.com" },
    { index: 4, imgUrl: Logo4, brandName: "www.React js.com" },
    { index: 5, imgUrl: Logo5, brandName: "www.nodejs.com" },
    { index: 6, imgUrl: Logo6, brandName: "www.Python.com" },
    { index: 7, imgUrl: Logo7, brandName: "www.ApiIntegration.com" },
    { index: 8, imgUrl: Logo8, brandName: "www.Nextjs.com" },
    { index: 9, imgUrl: Logo9, brandName: "www.Firebase.com" },
    { index: 10, imgUrl: Logo10, brandName: "www.C++.com" },
    { index: 11, imgUrl: Logo11, brandName: "www.C Language.com" },
    { index: 12, imgUrl: Logo12, brandName: "www.SqlDatabase.com" },
    { index: 13, imgUrl: Logo13, brandName: "www.Testing.com" },
  ];

  return brandData.map(({ index, imgUrl, brandName }) => (
    <BrandItem
      key={index}
      imgUrl={imgUrl}
      link="#0"
      word={brandName}
      charTotal={brandName.length}
      wordIndex={0}
    />
  ));
};

const TechStack = () => (
  <div className="clients section-padding pb-100 position-re">
    <div className="heading-tech-stack">
      <h4>TECH STACK</h4>
    </div>
    <div className="container">
      <div className="row justify-content-center mb-80">
        <div className="col-lg-6 text-center">
          <div className="text">
            <h3>
              We create <span>experiences</span> and turn ideas into reality.
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="row md-marg">{generateBrandItems()}</div>
        </div>
      </div>
    </div>
  </div>
);

export default TechStack;
