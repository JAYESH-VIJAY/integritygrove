import "./ScrollX.css"
import slideImage1 from "../../../assets/imgs/HomePage/portfolio/4/01.jpg"
import slideImage2 from "../../../assets/imgs/HomePage/portfolio/4/02.jpg"
import slideImage3 from "../../../assets/imgs/HomePage/portfolio/4/03.jpg"
import slideImage4 from "../../../assets/imgs/HomePage/portfolio/4/04.jpg"
import slideImage5 from "../../../assets/imgs/HomePage/portfolio/4/05.jpg"
const ScrollX = () => {

    return (
        <section className="works thecontainer">
            <div className="panel mt-30">
                <div className="item">
                    <div className="img">
                        <img src={slideImage1} alt="" />
                    </div>
                    <div className="cont d-flex align-items-end">
                        <div>
                            <span>Web Design</span>
                            <h5>Color Integration</h5>
                        </div>
                        <div className="ml-auto">
                            <h6>2023</h6>
                        </div>
                    </div>
                    <a href="#0" className="link-overlay" />
                </div>
            </div>
            <div className="panel mt-30">
                <div className="item">
                    <div className="img">
                        <img src={slideImage2} alt="" />
                    </div>
                    <div className="cont d-flex align-items-end">
                        <div>
                            <span>Web Design</span>
                            <h5>Mobile Software</h5>
                        </div>
                        <div className="ml-auto">
                            <h6>2023</h6>
                        </div>
                    </div>
                    <a href="#0" className="link-overlay" />
                </div>
            </div>
            <div className="panel mt-30">
                <div className="item">
                    <div className="img">
                        <img src={slideImage3} alt="" />
                    </div>
                    <div className="cont d-flex align-items-end">
                        <div>
                            <span>Web Design</span>
                            <h5>New Gadgets</h5>
                        </div>
                        <div className="ml-auto">
                            <h6>2023</h6>
                        </div>
                    </div>
                    <a href="#0" className="link-overlay" />
                </div>
            </div>
            <div className="panel mt-30">
                <div className="item">
                    <div className="img">
                        <img src={slideImage4} alt="" />
                    </div>
                    <div className="cont d-flex align-items-end">
                        <div>
                            <span>Web Design</span>
                            <h5>Digital Platform</h5>
                        </div>
                        <div className="ml-auto">
                            <h6>2023</h6>
                        </div>
                    </div>
                    <a href="#0" className="link-overlay" />
                </div>
            </div>
            <div className="panel mt-30">
                <div className="item">
                    <div className="img">
                        <img src={slideImage5} alt="" />
                    </div>
                    <div className="cont d-flex align-items-end">
                        <div>
                            <span>Web Design</span>
                            <h5>Branding Process</h5>
                        </div>
                        <div className="ml-auto">
                            <h6>2023</h6>
                        </div>
                    </div>
                    <a href="#0" className="link-overlay" />
                </div>
            </div>
            <div className="panel mt-30">
                <div className="item">
                    <div className="img">
                        <img src="https://ui-themez.smartinnovates.net/items/geekfolio/dark/assets/imgs/portfolio/4/06.jpg" alt="" />
                    </div>
                    <div className="cont d-flex align-items-end">
                        <div>
                            <span>Web Design</span>
                            <h5>Branding Process</h5>
                        </div>
                        <div className="ml-auto">
                            <h6>2023</h6>
                        </div>
                    </div>
                    <a href="#0" className="link-overlay" />
                </div>
            </div>
        </section>

    );
}

export default ScrollX;
