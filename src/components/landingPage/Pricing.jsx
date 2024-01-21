import Pricecard from "./PriceCard";
const Pricing = () => {
    return (
        <section className="pricing section-padding sub-bg">
            <div className="container">
                <div className="sec-lg-head mb-80">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="position-re">
                                <h6 className="dot-titl colorbg-3 mb-10">Featured Services</h6>
                                <h2 className="fz-60 fw-700">Our Plans</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex align-items-center">
                            <div className="text">
                                <p></p>                            </div>
                        </div>
                    </div>
                </div>
                <div className="row md-marg">
                    <div className="col-lg-4" >
                        <Pricecard />
                    </div>
                    <div className="col-lg-4">
                        <Pricecard />
                    </div>
                    <div className="col-lg-4">
                        <Pricecard />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Pricing;
