import React from 'react'
import projectimage from './1.jpg'

function LeftProjects() {
  return (
    <>
        {/* ==================== Start Portfolio ==================== */}
        <section className="portfolio section-padding pb-70">
          <div className="container-fluid">
          <div className="row" style={{marginBottom: "1rem"}}>
        <div className="col-lg-8" style={{paddingLeft:'36px',marginTop:"30px"}}>
          <div className="position-re">
            {/* <h6 className="dot-titl-non mb-15 wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>Featured Services</h6> */}
            <h2 className="d-rotate wow animated" style={{visibility: 'visible'}}>
              <span className="rotate-text">Web Development</span>
            </h2>
          </div>
        </div>
        {/* <div className="col-lg-4 d-flex align-items-center">
          <div className="text wow fadeIn" style={{visibility: 'visible', animationName: 'fadeIn'}}>
            <p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p>
          </div>
        </div> */}
      </div>
            <div className="gallery" style={{position: 'relative', height: '900px'}}>
              <div className="row grid md-marg">
                <div className="col-lg-3 col-md-6 items web info-overlay mb-50" style={{position: 'absolute', left: '0px', top: '0px'}}>
                  <div className="item-img o-hidden">
                    <a href="project-details1.html" className="imago wow animated" style={{visibility: 'visible'}}>
                      <div className="inner wow animated" style={{visibility: 'visible'}}>
                        <img src={projectimage} alt="image" />
                      </div>
                    </a>
                    <div className="info">
                      <span className="mb-15">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <h6 className="sub-title tag"><a href="project-details1.html">© 2023 <br /> Design ART</a></h6>
                      <h5><a href="project-details1.html">Character Design</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items app info-overlay mb-50" style={{position: 'absolute', left: '335px', top: '0px'}}>
                  <div className="item-img o-hidden">
                    <a href="project-details1.html" className="imago wow animated" style={{visibility: 'visible'}}>
                      <div className="inner wow animated" style={{visibility: 'visible'}}>
                        <img src={projectimage} alt="image" />
                      </div>
                    </a>
                    <div className="info">
                      <span className="mb-15">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <h6 className="sub-title tag"><a href="project-details1.html">© 2023 <br /> Design ART</a></h6>
                      <h5><a href="project-details1.html">Character Design</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items brand info-overlay mb-50" style={{position: 'absolute', left: '671px', top: '0px'}}>
                  <div className="item-img o-hidden">
                    <a href="project-details1.html" className="imago wow animated" style={{visibility: 'visible'}}>
                      <div className="inner wow animated" style={{visibility: 'visible'}}>
                        <img src={projectimage} alt="image" />
                      </div>
                    </a>
                    <div className="info">
                      <span className="mb-15">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <h6 className="sub-title tag"><a href="project-details1.html">© 2023 <br /> Design ART</a></h6>
                      <h5><a href="project-details1.html">Character Design</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items web info-overlay mb-50" style={{position: 'absolute', left: '1006px', top: '0px'}}>
                  <div className="item-img o-hidden">
                    <a href="project-details1.html" className="imago wow animated" style={{visibility: 'visible'}}>
                      <div className="inner wow animated" style={{visibility: 'visible'}}>
                        <img src={projectimage} alt="image" />
                      </div>
                    </a>
                    <div className="info">
                      <span className="mb-15">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <h6 className="sub-title tag"><a href="project-details1.html">© 2023 <br /> Design ART</a></h6>
                      <h5><a href="project-details1.html">Character Design</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items brand info-overlay mb-50" style={{position: 'absolute', left: '0px', top: '450px'}}>
                  <div className="item-img o-hidden">
                    <a href="project-details1.html" className="imago wow animated" style={{visibility: 'visible'}}>
                      <div className="inner wow animated" style={{visibility: 'visible'}}>
                        <img src={projectimage} alt="image" />
                      </div>
                    </a>
                    <div className="info">
                      <span className="mb-15">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <h6 className="sub-title tag"><a href="project-details1.html">© 2023 <br /> Design ART</a></h6>
                      <h5><a href="project-details1.html">Character Design</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items app info-overlay mb-50" style={{position: 'absolute', left: '335px', top: '450px'}}>
                  <div className="item-img o-hidden">
                    <a href="project-details1.html" className="imago wow animated" style={{visibility: 'visible'}}>
                      <div className="inner wow animated" style={{visibility: 'visible'}}>
                        <img src={projectimage} alt="image" />
                      </div>
                    </a>
                    <div className="info">
                      <span className="mb-15">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <h6 className="sub-title tag"><a href="project-details1.html">© 2023 <br /> Design ART</a></h6>
                      <h5><a href="project-details1.html">Character Design</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items web info-overlay mb-50" style={{position: 'absolute', left: '671px', top: '450px'}}>
                  <div className="item-img o-hidden">
                    <a href="project-details1.html" className="imago wow animated" style={{visibility: 'visible'}}>
                      <div className="inner wow animated" style={{visibility: 'visible'}}>
                        <img src={projectimage} alt="image" />
                      </div>
                    </a>
                    <div className="info">
                      <span className="mb-15">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <h6 className="sub-title tag"><a href="project-details1.html">© 2023 <br /> Design ART</a></h6>
                      <h5><a href="project-details1.html">Character Design</a></h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 items brand info-overlay mb-50" style={{position: 'absolute', left: '1006px', top: '450px'}}>
                  <div className="item-img o-hidden">
                    <a href="project-details1.html" className="imago wow animated" style={{visibility: 'visible'}}>
                      <div className="inner wow animated" style={{visibility: 'visible'}}>
                        <img src={projectimage} alt="image" />
                      </div>
                    </a>
                    <div className="info">
                      <span className="mb-15">
                        <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor" />
                        </svg>
                      </span>
                      <h6 className="sub-title tag"><a href="project-details1.html">© 2023 <br /> Design ART</a></h6>
                      <h5><a href="project-details1.html">Character Design</a></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ==================== End Portfolio ==================== */}

    </>
  )
}

export default LeftProjects
