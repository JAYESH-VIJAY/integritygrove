import React from 'react';
import { TestomoImage1, aboutImg1,aboutImg2, teammember } from '../assets/imgs/HomePage/index';
const AboutPage = () => {
    return (

        <div>

           {/* ....................header................................. */}

            <header className="page-header section-padding pb-0" style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                <div className="container mt-80" bis_skin_checked={1} style={{ translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)' }}>
                    <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-8" bis_skin_checked={1}>
                            <div className="caption" bis_skin_checked={1}>
                                <h6 className="sub-title">Who We Are ?</h6>
                                <h1 className="fz-55">We're a digital agency based in Valencia.</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-5 offset-lg-4" bis_skin_checked={1}>
                            <div className="text mt-30" bis_skin_checked={1}>
                                <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-marq xlrg section-padding pb-0" bis_skin_checked={1}>
                    <div className="slide-har st1" bis_skin_checked={1}>
                        <div className="box" bis_skin_checked={1}>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                        </div>
                        <div className="box" bis_skin_checked={1}>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                            <div className="item" bis_skin_checked={1}>
                                <h4>About Us</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

           {/* ***************** About Section******************************* */}

            <section className="pg-about section-padding sub-bg">
                <div className="container" bis_skin_checked={1}>
                    <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-4" bis_skin_checked={1}>
                            <div className="bg-img radius-10 md-mb50" data-background={aboutImg1} bis_skin_checked={1} style={{ backgroundImage: `url(${aboutImg1 })` }} />
                        </div>
                        <div className="col-lg-8" bis_skin_checked={1}>
                            <div className="bg-img radius-10" data-background={aboutImg2} bis_skin_checked={1} style={{ backgroundImage: `url(${aboutImg2})` }} />
                        </div>
                        <div className="col-lg-4" bis_skin_checked={1}>
                            <div className="sec-head mt-80" bis_skin_checked={1}>
                                <h6 className="sub-title">Our Story.</h6>
                            </div>
                        </div>
                        <div className="col-lg-8" bis_skin_checked={1}>
                            <div className="cont mt-80" bis_skin_checked={1}>
                                <h4>GeekFolio are digital marketing experts and can partner with you to implement tactical campaigns which engage and connect audiences whilst driving ROI for your brand. We are SEO and SEM professionals and have implemented successful search campaigns for clients which drive super-charge improvements in organic rankings, increase visits and grow revenue. </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              {/* **************Service Section*********************************** */}

            <section className="serv-box section-padding">
                <div className="container" bis_skin_checked={1}>
                    <div className="sec-lg-head mb-80" bis_skin_checked={1}>
                        <div className="row" bis_skin_checked={1}>
                            <div className="col-lg-8" bis_skin_checked={1}>
                                <div className="position-re" bis_skin_checked={1}>
                                    <h6 className="dot-titl-non mb-10">Featured Services</h6>
                                    <h2 className="fz-60 fw-700">Our Services</h2>
                                </div>
                            </div>
                            <div className="col-lg-4 d-flex align-items-center" bis_skin_checked={1}>
                                <div className="text" bis_skin_checked={1}>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-4" bis_skin_checked={1}>
                            <div className="serv-item md-mb50 radius-10" bis_skin_checked={1}>
                                <div className="icon-img-60 mb-40" bis_skin_checked={1}>
                                    <img src="assets/imgs/serv-icons/0.png" alt="" />
                                </div>
                                <h5 className="mb-30 pb-30 bord-thin-bottom">Brand Strategy &amp; <br /> Art Direction</h5>
                                <p>Creating a higher spacing and how people move through a unique.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" bis_skin_checked={1}>
                            <div className="serv-item md-mb50 radius-10" bis_skin_checked={1}>
                                <div className="icon-img-60 mb-40" bis_skin_checked={1}>
                                    <img src="assets/imgs/serv-icons/1.png" alt="" />
                                </div>
                                <h5 className="mb-30 pb-30 bord-thin-bottom">UX/UI Design &amp; <br /> Website/App Design</h5>
                                <p>Creating a higher spacing and how people move through a unique.</p>
                            </div>
                        </div>
                        <div className="col-lg-4" bis_skin_checked={1}>
                            <div className="serv-item radius-10" bis_skin_checked={1}>
                                <div className="icon-img-60 mb-40" bis_skin_checked={1}>
                                    <img src="assets/imgs/serv-icons/2.png" alt="" />
                                </div>
                                <h5 className="mb-30 pb-30 bord-thin-bottom">Typography &amp; <br /> Video Production</h5>
                                <p>Creating a higher spacing and how people move through a unique.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ==================== Start about ==================== */}

            <section className="intro-corp section-padding pt-0">
                <div className="container" bis_skin_checked={1}>
                    <div className="row justify-content-around" bis_skin_checked={1}>
                        <div className="col-lg-5 valign md-mb50" bis_skin_checked={1}>
                            <div className="imgs mb-80" bis_skin_checked={1}>
                                <div className="img1" bis_skin_checked={1}>
                                    <img src={aboutImg1} alt="" className="radius-10" />
                                </div>
                                <div className="img2" bis_skin_checked={1}>
                                    <img src={aboutImg2} alt="" className="radius-10" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 valign" bis_skin_checked={1}>
                            <div className="cont" bis_skin_checked={1}>
                                <div className="text" bis_skin_checked={1}>
                                    <h2 className="d-slideup wow animated" style={{ visibility: 'visible' }}>
                                        <span className="sideup-text">
                                            <span className="up-text">Watch the creative</span>
                                        </span>
                                        <span className="sideup-text">
                                            <span className="up-text">process behind our</span>
                                        </span>
                                        <span className="sideup-text">
                                            <span className="up-text"><span>digital marketing</span>.</span>
                                        </span>
                                    </h2>
                                </div>
                                <div className="accordion bord mt-40" bis_skin_checked={1}>
                                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s" bis_skin_checked={1} style={{ visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                                        <div className="title" bis_skin_checked={1}>
                                            <h6 className="fz-18">The Power of Influencer Marketing</h6>
                                            <span className="ico" />
                                        </div>
                                        <div className="accordion-info" bis_skin_checked={1}>
                                            <p className="fz-14">Taken possession of my entire soul, like these sweet mornings
                                                of spring which
                                                i enjoy with my whole.</p>
                                        </div>
                                    </div>
                                    <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s" bis_skin_checked={1} style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                                        <div className="title" bis_skin_checked={1}>
                                            <h6 className="fz-18">Unique and Influential Design</h6>
                                            <span className="ico" />
                                        </div>
                                        <div className="accordion-info" bis_skin_checked={1}>
                                            <p className="fz-14">Taken possession of my entire soul, like these sweet mornings
                                                of spring which
                                                i enjoy with my whole.</p>
                                        </div>
                                    </div>
                                    <div className="item wow fadeInUp" data-wow-delay=".5s" bis_skin_checked={1} style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                                        <div className="title" bis_skin_checked={1}>
                                            <h6 className="fz-18">We Build and Activate Brands</h6>
                                            <span className="ico" />
                                        </div>
                                        <div className="accordion-info" bis_skin_checked={1}>
                                            <p className="fz-14">Taken possession of my entire soul, like these sweet mornings
                                                of spring which
                                                i enjoy with my whole.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         
            {/* ==================== Start Testimonials ==================== */}

            <section className="testim-vrt sub-bg">
                <div className="container" bis_skin_checked={1}>
                    <div className="row" bis_skin_checked={1}>
                        <div className="col-lg-5 valign" bis_skin_checked={1}>
                            <div className="cont" bis_skin_checked={1}>
                                <div bis_skin_checked={1}>
                                    <h6 className="sub-title mb-15">Since From 2008</h6>
                                    <h3>Keep pushing forward. We've got your back.</h3>
                                    <div className="text mt-10 pb-30 bord-thin-bottom" bis_skin_checked={1}>
                                        <p>Things go wrong have questions. We’ve understand. So we have people</p>
                                    </div>
                                    <div className="stauts d-flex mt-20" bis_skin_checked={1}>
                                        <div className="item d-flex align-items-center mt-30" bis_skin_checked={1}>
                                            <h2 className="mr-20">12k</h2>
                                            <p className="fz-14">Happy Users <br /> Around World</p>
                                        </div>
                                        <div className="item d-flex align-items-center ml-auto mt-30" bis_skin_checked={1}>
                                            <h2 className="mr-20">150k</h2>
                                            <p className="fz-14">Projects <br /> Already Done</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1" bis_skin_checked={1}>
                            <div bis_skin_checked={1}>
                                <div className="main-marqv" bis_skin_checked={1}>
                                    <div className="slide-vertical st1" bis_skin_checked={1}>
                                        <div className="box" bis_skin_checked={1}>
                                            <div className="item radius-30 mt-30" bis_skin_checked={1}>
                                                <div className="cont mb-40" bis_skin_checked={1}>
                                                    <div className="rate-stars mb-30 fz-12" bis_skin_checked={1}>
                                                        <span className="rate main-color">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </span>
                                                    </div>
                                                    <p className="fw-400">I have been hiring people in this
                                                        space for a number of years
                                                        and I have never seen this level of
                                                        professionalism. It really feels like you are
                                                        working with a team that can get the job
                                                        done.</p>
                                                </div>
                                                <div className="d-flex align-items-center" bis_skin_checked={1}>
                                                    <div bis_skin_checked={1}>
                                                        <div className="img circle-80" bis_skin_checked={1}>
                                                            <img src= {TestomoImage1} alt="" className="circle-img" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-30" bis_skin_checked={1}>
                                                        <div className="info" bis_skin_checked={1}>
                                                            <h6>Leonard Heiser</h6>
                                                            <span className="main-color sub-title">Ceo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item radius-30 mt-30" bis_skin_checked={1}>
                                                <div className="cont mb-40" bis_skin_checked={1}>
                                                    <div className="rate-stars mb-30 fz-12" bis_skin_checked={1}>
                                                        <span className="rate main-color">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </span>
                                                    </div>
                                                    <p className="fw-400">I have been hiring people in this
                                                        space for a number of years
                                                        and I have never seen this level of
                                                        professionalism. It really feels like you are
                                                        working with a team that can get the job
                                                        done.</p>
                                                </div>
                                                <div className="d-flex align-items-center" bis_skin_checked={1}>
                                                    <div bis_skin_checked={1}>
                                                        <div className="img circle-80" bis_skin_checked={1}>
                                                            <img src={TestomoImage1} alt="" className="circle-img" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-30" bis_skin_checked={1}>
                                                        <div className="info" bis_skin_checked={1}>
                                                            <h6>Leonard Heiser</h6>
                                                            <span className="main-color sub-title">Ceo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item radius-30 mt-30" bis_skin_checked={1}>
                                                <div className="cont mb-40" bis_skin_checked={1}>
                                                    <div className="rate-stars mb-30 fz-12" bis_skin_checked={1}>
                                                        <span className="rate main-color">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </span>
                                                    </div>
                                                    <p className="fw-400">I have been hiring people in this
                                                        space for a number of years
                                                        and I have never seen this level of
                                                        professionalism. It really feels like you are
                                                        working with a team that can get the job
                                                        done.</p>
                                                </div>
                                                <div className="d-flex align-items-center" bis_skin_checked={1}>
                                                    <div bis_skin_checked={1}>
                                                        <div className="img circle-80" bis_skin_checked={1}>
                                                            <img src={TestomoImage1} alt="" className="circle-img" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-30" bis_skin_checked={1}>
                                                        <div className="info" bis_skin_checked={1}>
                                                            <h6>Leonard Heiser</h6>
                                                            <span className="main-color sub-title">Ceo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box" bis_skin_checked={1}>
                                            <div className="item radius-30 mt-30" bis_skin_checked={1}>
                                                <div className="cont mb-40" bis_skin_checked={1}>
                                                    <div className="rate-stars mb-30 fz-12" bis_skin_checked={1}>
                                                        <span className="rate main-color">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </span>
                                                    </div>
                                                    <p className="fw-400">I have been hiring people in this
                                                        space for a number of years
                                                        and I have never seen this level of
                                                        professionalism. It really feels like you are
                                                        working with a team that can get the job
                                                        done.</p>
                                                </div>
                                                <div className="d-flex align-items-center" bis_skin_checked={1}>
                                                    <div bis_skin_checked={1}>
                                                        <div className="img circle-80" bis_skin_checked={1}>
                                                            <img src={TestomoImage1} alt="" className="circle-img" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-30" bis_skin_checked={1}>
                                                        <div className="info" bis_skin_checked={1}>
                                                            <h6>Leonard Heiser</h6>
                                                            <span className="main-color sub-title">Ceo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item radius-30 mt-30" bis_skin_checked={1}>
                                                <div className="cont mb-40" bis_skin_checked={1}>
                                                    <div className="rate-stars mb-30 fz-12" bis_skin_checked={1}>
                                                        <span className="rate main-color">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </span>
                                                    </div>
                                                    <p className="fw-400">I have been hiring people in this
                                                        space for a number of years
                                                        and I have never seen this level of
                                                        professionalism. It really feels like you are
                                                        working with a team that can get the job
                                                        done.</p>
                                                </div>
                                                <div className="d-flex align-items-center" bis_skin_checked={1}>
                                                    <div bis_skin_checked={1}>
                                                        <div className="img circle-80" bis_skin_checked={1}>
                                                            <img src={TestomoImage1} alt="" className="circle-img" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-30" bis_skin_checked={1}>
                                                        <div className="info" bis_skin_checked={1}>
                                                            <h6>Leonard Heiser</h6>
                                                            <span className="main-color sub-title">Ceo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item radius-30 mt-30" bis_skin_checked={1}>
                                                <div className="cont mb-40" bis_skin_checked={1}>
                                                    <div className="rate-stars mb-30 fz-12" bis_skin_checked={1}>
                                                        <span className="rate main-color">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                        </span>
                                                    </div>
                                                    <p className="fw-400">I have been hiring people in this
                                                        space for a number of years
                                                        and I have never seen this level of
                                                        professionalism. It really feels like you are
                                                        working with a team that can get the job
                                                        done.</p>
                                                </div>
                                                <div className="d-flex align-items-center" bis_skin_checked={1}>
                                                    <div bis_skin_checked={1}>
                                                        <div className="img circle-80" bis_skin_checked={1}>
                                                            <img src={TestomoImage1} alt="" className="circle-img" />
                                                        </div>
                                                    </div>
                                                    <div className="ml-30" bis_skin_checked={1}>
                                                        <div className="info" bis_skin_checked={1}>
                                                            <h6>Leonard Heiser</h6>
                                                            <span className="main-color sub-title">Ceo</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== Start team ==================== */}
            <section className="team-crev section-padding pb-0 bord-thin-bottom">
                <div className="container-fluid rest" bis_skin_checked={1}>
                    <div className="row" bis_skin_checked={1}>
                        <div className="col-12" bis_skin_checked={1} style={{ position: 'relative' }}>
                            <div className="sec-head-lg text-center text-u mb-80" id="sticky_item" bis_skin_checked={1} style={{}}>
                                <h2>Team</h2>
                            </div>
                            <div className="swiper4" data-carousel="swiper" data-items={4} data-loop="true" data-space={60} data-center="true" data-speed={1000} bis_skin_checked={1}>
                                <div id="content-carousel-container-unq-team" className="swiper-container swiper-container-initialized swiper-container-horizontal" data-swiper="container" bis_skin_checked={1}>
                                    <div className="swiper-wrapper" bis_skin_checked={1} style={{ transitionDuration: '0ms', transform: 'translate3d(-987.5px, 0px, 0px)' }}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={1} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                        <div className="item" bis_skin_checked={1}>
                                            <div className="img" bis_skin_checked={1}>
                                                <img src={teammember} alt="" />
                                            </div>
                                            <div className="info" bis_skin_checked={1}>
                                                <div className="main-marq team-position" bis_skin_checked={1}>
                                                    <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                        <div className="box" bis_skin_checked={1}>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                        </div>
                                                        <div className="box" bis_skin_checked={1}>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>Co-Founder</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-marq team-name" bis_skin_checked={1}>
                                                    <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                        <div className="box" bis_skin_checked={1}>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                        </div>
                                                        <div className="box" bis_skin_checked={1}>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                            <div className="item" bis_skin_checked={1}>
                                                                <h4>adrian parody</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev" data-swiper-slide-index={4} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-active" data-swiper-slide-index={0} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next" data-swiper-slide-index={1} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-swiper-slide-index={2} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide" data-swiper-slide-index={3} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-duplicate-prev" data-swiper-slide-index={4} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={0} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index={1} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={2} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={3} bis_skin_checked={1} style={{ width: '335px', marginRight: '60px' }}>
                                            <div className="item" bis_skin_checked={1}>
                                                <div className="img" bis_skin_checked={1}>
                                                    <img src={teammember} alt="" />
                                                </div>
                                                <div className="info" bis_skin_checked={1}>
                                                    <div className="main-marq team-position" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>Co-Founder</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="main-marq team-name" bis_skin_checked={1}>
                                                        <div className="slide-har st1 non-strok" bis_skin_checked={1}>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                            <div className="box" bis_skin_checked={1}>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                                <div className="item" bis_skin_checked={1}>
                                                                    <h4>adrian parody</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>


    );
}

export default AboutPage;
