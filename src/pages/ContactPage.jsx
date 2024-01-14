import ContactSection from "@/components/landingPage/ContactSection";

const ContactPage = () => {
    return (

        <>
            <div>
                <header className="page-header section-padding sub-bg">
                    <div className="container mt-80">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="caption">
                                    <h6 className="sub-title">Contact Us</h6>
                                    <h1 className="fz-55">Let's make <br /> your brand brilliant!</h1>
                                </div>
                            </div>
                            <div className="col-lg-5 valign">
                                <div className="text">
                                    <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <ContactSection />
            </div>
        </>

    );
};

export default ContactPage;
