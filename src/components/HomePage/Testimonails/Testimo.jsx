import Quoteimg from "../../../assets/imgs/HomePage/svg-assets/quote.png"
import Quoteimg1 from "../../../assets/imgs/HomePage/about/sq1.jpg"
import Quoteimg2 from "../../../assets/imgs/HomePage/testim/1.jpg"
import Quoteimg3 from "../../../assets/imgs/HomePage/testim/2.jpg"


const Testimo = () => {
    return (
        <section className="testim-crv2 section-padding sub-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-lg-head mb-80">
                            <div className="position-re text-center">
                                <h6 className="dot-titl-non mb-15 wow fadeIn">Testimonials</h6>
                                <h2 className="d-rotate wow">
                                    <span className="rotate-text">What People Says?</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 position-re wow fadeIn" data-wow-delay=".4s">
                        <div className="bord-qoute d-flex align-items-center justify-content-center">
                            <div className="qoute-icon main-bg">
                                <img src={Quoteimg} alt="" />
                            </div>
                        </div>
                        <div className="img-qoute">
                            <img src={Quoteimg1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 wow fadeIn" data-wow-delay=".4s">
                        <div className="testim-swiper" data-carousel="swiper" data-items={1} data-loop="true" data-space={30}>
                            <div id="content-carousel-container-unq-testim" className="swiper-container" data-swiper="container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="cont mb-40">
                                                <div className="rate-stars mb-20 fz-16">
                                                    <span className="rate main-color4">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </span>
                                                </div>
                                                <h5 className="fw-400">I have been hiring people in this space
                                                    for a number of years and I have never seen this level of
                                                    professionalism. It really feels like you are working with a
                                                    team that can get the job done.
                                                </h5>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className="img circle-60">
                                                        <img src={Quoteimg2} alt="" className="circle-img" />
                                                    </div>
                                                </div>
                                                <div className="ml-30">
                                                    <div className="info">
                                                        <h6 className="fz-16">Leonard Heiser</h6>
                                                        <span className="opacity-7 sub-title">Ceo</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="cont mb-40">
                                                <div className="rate-stars mb-20 fz-16">
                                                    <span className="rate main-color4">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </span>
                                                </div>
                                                <h5 className="fw-400">I have been hiring people in this space
                                                    for a number of years and I have never seen this level of
                                                    professionalism. It really feels like you are working with a
                                                    team that can get the job done.
                                                </h5>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className="img circle-60">
                                                        <img src={Quoteimg3} alt="" className="circle-img" />
                                                    </div>
                                                </div>
                                                <div className="ml-30">
                                                    <div className="info">
                                                        <h6 className="fz-16">Leonard Heiser</h6>
                                                        <span className="opacity-7 sub-title">Ceo</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="swiper-controls testim-controls arrow-out d-flex ml-auto">
                                <div className="swiper-button-prev">
                                    <span className="left">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="swiper-button-next ml-50">
                                    <span className="right">
                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="currentColor" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="numbers mt-80 pt-80 bord-thin-top wow fadeIn" data-wow-delay=".4s">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="item md-mb50">
                                <h2 className="fw-800 stroke">16</h2>
                                <h6>Years of Experience</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex justify-content-around">
                            <div className="item md-mb50">
                                <h2 className="fw-800">4<span className="fz-80 fw-600">k</span></h2>
                                <h6>Projects Complated</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex justify-content-around">
                            <div className="item sm-mb50">
                                <h2 className="fw-800 stroke">9<span className="fz-80 fw-600">k</span></h2>
                                <h6>Happy Customers</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-flex">
                            <div className="item ml-auto">
                                <h2 className="fw-800">12</h2>
                                <h6>Awards Winning</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimo;
