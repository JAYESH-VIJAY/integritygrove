import "./OurClient.css"
import brandImage1 from "../../../assets/imgs/HomePage/brands/1.png"
import brandImage2 from "../../../assets/imgs/HomePage/brands/2.png"
import brandImage3 from "../../../assets/imgs/HomePage/brands/3.png"
import brandImage4 from "../../../assets/imgs/HomePage/brands/4.png"
import brandImage5 from "../../../assets/imgs/HomePage/brands/5.png"

const OurClient = () => {
    return (

        <div className="clients-carso2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="swiper5" data-carousel="swiper" data-items={5} data-loop="true" data-space={40}>
                            <div id="content-carousel-container-unq-clients" className="swiper-container" data-swiper="container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <a href="#0">
                                                    <img src={brandImage1} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <a href="#0">
                                                    <img src={brandImage2} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <a href="#0">
                                                    <img src={brandImage3} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <a href="#0">
                                                    <img src={brandImage4} alt="" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="item">
                                            <div className="img icon-img-100">
                                                <a href="#0">
                                                    <img src={brandImage5} alt="" />
                                                </a>
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

    )
}

export default OurClient
