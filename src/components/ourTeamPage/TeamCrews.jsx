import React from 'react'
import {teammember} from '../../assets/imgs/HomePage'

function TeamCrews() {

    const memberdata = [
        {
            id : 1
        },
        {
            id : 2
        },
        {
            id : 3
        },
        {
            id :4 
        },
        {
            id : 5
        },
        {
            id :6
        }
    ]

  return (
    <>
       <section className="team-crev section-padding sub-bg">
        <div className="container">
          <div className="row md-marg">
            {
                memberdata.map((data,index)=>{
                    return(
                        <div className="col-lg-4" key={index}>
              <div className="swiper-slide mb-50">
                <div className="item">
                  <div className="img">
                    <img src={teammember} alt="" />
                  </div>
                  <div className="info">
                    <div className="main-marq team-position">
                      <div className="slide-har st1 non-strok">
                        <div className="box">
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                        </div>
                        <div className="box">
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                          <div className="item">
                            <h4>Co-Founder</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="main-marq team-name">
                      <div className="slide-har st1 non-strok">
                        <div className="box">
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                        </div>
                        <div className="box">
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                          <div className="item">
                            <h4>adrian parody</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                    )
                })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default TeamCrews
