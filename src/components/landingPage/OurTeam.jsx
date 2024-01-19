// import { teammember } from "../../assets/imgs/HomePage";
// function OurTeam() {
//   const memberdata = [
//     {
//       id: 1,
//       name: "John Doe",
//       designation: "Co-Founder",
//     },
//     {
//       id: 2,
//       name: "John Doe",
//       designation: "Co-Founder",
//     },
//     {
//       id: 3,
//       name: "John Doe",
//       designation: "Co-Founder",
//     },
//     {
//       id: 4,
//       name: "John Doe",
//       designation: "Co-Founder",
//     },
//     {
//       id: 5,
//       name: "John Doe",
//       designation: "Co-Founder",
//     },
//     {
//       id: 6,
//       name: "John Doe",
//       designation: "Co-Founder",
//     },
//     {
//       id: 7,
//       name: "John Doe",
//       designation: "Co-Founder",
//     },
//   ];
//   return (
//     <section className="team section-padding">
//       <div className="container">
//         <div className="sec-head mb-80">
//           <div className="row">
//             <div className="col-lg-8">
//               <h6
//                 className="sub-title opacity-8 wow fadeInUp"
//                 style={{ visibility: "visible", animationName: "fadeInUp" }}
//               >
//                 The Avengers
//               </h6>
//               <h2
//                 className="d-rotate wow animated"
//                 style={{ visibility: "visible" }}
//               >
//                 <span className="rotate-text">Meet Our Team.</span>
//               </h2>
//             </div>
//           </div>
//         </div>
//         <div
//           className="whole-container"
//           style={{ display: "flex", flexWrap: "wrap" , alignItems:"center"}}
//         >
//           {memberdata.map((data, index) => {
//             return (
//               <div className="col-lg-3 col-md-6" style={{margin:"12px",width:"23%"}} key={index}>
//                 <div className="item mb-50" >
//                   <div className="img">
//                     <img src={teammember} alt="" />
//                   </div>
//                   <div className="info mt-20">
//                     <span className="fz-12 opacity-8">{data.designation}</span>
//                     <h6 className="fz-18">{data.name}</h6>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//           <div className="col-lg-3 col-md-6" style={{border:"none"}}>
//           <div className="item-join valign">
//             <div className="full-width">
//               <h6 className="text-u ls2">
//                 Become <br /> A Member
//               </h6>
//               <a href="page-team.html" className="arrow mt-30">
//                 <span className="circle">
//                   <svg
//                     width={18}
//                     height={18}
//                     viewBox="0 0 18 18"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
//                       fill="currentColor"
//                     />
//                   </svg>
//                 </span>
//                 <span className="fz-12 text-u ml-10">Join Us</span>
//               </a>
//             </div>
//           </div>
//         </div>
//         </div>
//       </div>
    
//     </section>
//   );
// }
import { TeamMember } from '../../assets/imgs/HomePage'

const OurTeam = () => {
  return (
    <section className="team section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <h6 className="sub-title opacity-8 wow fadeInUp" style={{ visibility: 'visible', animationName: 'fadeInUp' }}>The Avengers</h6>
              <h2 className="d-rotate wow animated" style={{ visibility: 'visible' }}>
                <span className="rotate-text">Meet Our Team.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          {/* Repeat this block for each team member */}
          <div className="col-lg-3 col-md-6">
            <div className="item mb-50">
              <div className="img">
                <img src={TeamMember} alt="" />
              </div>
              <div className="info mt-20">
                <span className="fz-12 opacity-8">Co-Founder</span>
                <h6 className="fz-18">Matt Smith</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item mb-50">
              <div className="img">
                <img src={TeamMember} alt="" />
              </div>
              <div className="info mt-20">
                <span className="fz-12 opacity-8">Co-Founder</span>
                <h6 className="fz-18">Matt Smith</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item mb-50">
              <div className="img">
                <img src={TeamMember} alt="" />
              </div>
              <div className="info mt-20">
                <span className="fz-12 opacity-8">Co-Founder</span>
                <h6 className="fz-18">Matt Smith</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item mb-50">
              <div className="img">
                <img src={TeamMember} alt="" />
              </div>
              <div className="info mt-20">
                <span className="fz-12 opacity-8">Co-Founder</span>
                <h6 className="fz-18">Matt Smith</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item mb-50">
              <div className="img">
                <img src={TeamMember} alt="" />
              </div>
              <div className="info mt-20">
                <span className="fz-12 opacity-8">Co-Founder</span>
                <h6 className="fz-18">Matt Smith</h6>
              </div>
            </div>
          </div>
          {/* ... Repeat for other team members */}
          <div className="col-lg-3 col-md-6">
            <div className="item-join valign">
              <div className="full-width">
                <h6 className="text-u ls2">Become <br /> A Member</h6>
                <a href="page-team.html" className="arrow mt-30">
                  <span className="circle">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"></path>
                    </svg>
                  </span>
                  <span className="fz-12 text-u ml-10">Join Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// export default OurTeam;
