import { icon1 } from '../../assets/imgs/HomePage'
import { icon2 } from '../../assets/imgs/HomePage'
import { icon3 } from '../../assets/imgs/HomePage'

function Services() {
  return (
    <>
        <section className="serv-box section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl-non mb-10">Featured Services</h6>
                <h2 className="fz-60 fw-700">Our Services</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="serv-item md-mb50 radius-10">
              <div className="icon-img-60 mb-40">
                <img src={icon1} alt="" />
              </div>
              <h5 className="mb-30 pb-30 bord-thin-bottom">Brand Strategy &amp; <br /> Art Direction</h5>
              <p>Creating a higher spacing and how people move through a unique.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="serv-item md-mb50 radius-10">
              <div className="icon-img-60 mb-40">
                <img src={icon2} alt="" />
              </div>
              <h5 className="mb-30 pb-30 bord-thin-bottom">UX/UI Design &amp; <br /> Website/App Design</h5>
              <p>Creating a higher spacing and how people move through a unique.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="serv-item radius-10">
              <div className="icon-img-60 mb-40">
                <img src={icon3} alt="" />
              </div>
              <h5 className="mb-30 pb-30 bord-thin-bottom">Typography &amp; <br /> Video Production</h5>
              <p>Creating a higher spacing and how people move through a unique.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default Services
