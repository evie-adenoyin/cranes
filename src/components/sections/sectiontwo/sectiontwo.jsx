import React from "react";
import img1 from "../../../assets/images/etienne-girardet-sgYamIzhAhg-unsplash.jpg";
import img2 from "../../../assets/images/nicolas-j-leclercq-WJg2bynUWOk-unsplash.jpg";
import img3 from "../../../assets/images/c-dustin-91AQt9p4Mo8-unsplash.jpg";
import img4 from "../../../assets/images/ivan-bandura-0-no6ywKMPY-unsplash.jpg";
import img5 from "../../../assets/images/di-F1MlxlEpaOk-unsplash.jpg";
import "./sectiontwo.css";
import { Carousel } from "react-responsive-carousel";
const Sectiontwo = () => {
  const indicatorStyles = {
    background: "#dd042b",
    width: 8,
    height: 8,
    display: "inline-block",
    margin: "0 8px",
  };
  return (
    <section className='sectiontwo'>
      <div className='sectiontwo-header'>
        <p className='sectiontwo-headline'>WHAT WE PROVIDE</p>
        <h1 className='section-header'>explore opportunities</h1>
        <h1 className='section-header'>and offers to clients</h1>
      </div>

      <div className='sectiontwo-opportunity'>
        <div className='sectiontwo-opportunity-layout'>
          <Carousel
            autoPlay
            className='carousel'
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            transitionTime={1500}
            infiniteLoop
            interval={40000}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              if (isSelected) {
                return (
                  <li
                    style={{ ...indicatorStyles, background: "#000" }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                  />
                );
              }
              return (
                <li
                  style={indicatorStyles}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role='button'
                  tabIndex={0}
                  title={`${label} ${index + 1}`}
                  aria-label={`${label} ${index + 1}`}
                />
              );
            }}
          >
            <div className='sectiontwo-opportunityGrid'>
              <div className='sectiontwo-opportunityGrid-content'>
                <div className='sectiontwo-opportunityGrid-img'>
                  <img src={img1} alt='pics' />
                  <p className='sectiontwo-opportunityGrid-tag'>
                    Tailored Designs
                  </p>
                </div>
                <div className='sectiontwo-opportunityGrid-text'>
                  <h1> Customized Construction Solutions</h1>
                  <p>
                    Providing tailored construction solutions that meet the
                    unique requirements, preferences, and budget of each client.
                    This includes offering flexible design options, material
                    selections, and construction approaches to accommodate
                    diverse project needs.
                  </p>
                </div>
              </div>
              <div className='sectiontwo-opportunityGrid-content'>
                <div className='sectiontwo-opportunityGrid-img'>
                  <img src={img3} alt='pics' />
                  <p className='sectiontwo-opportunityGrid-tag'>
                    {" "}
                    Energy-efficient Designs
                  </p>
                </div>
                <div className='sectiontwo-opportunityGrid-text'>
                  <h1>Sustainable and Green Building Practices</h1>
                  <p>
                    Embracing environmentally friendly construction practices
                    and promoting sustainable building solutions. This can
                    involve incorporating energy-efficient designs, utilizing
                    eco-friendly materials, and implementing renewable energy
                    systems to reduce the environmental impact of construction
                    projects.
                  </p>
                </div>
              </div>
              <div className='sectiontwo-opportunityGrid-content'>
                <div className='sectiontwo-opportunityGrid-img'>
                  <img src={img2} alt='pics' />
                  <p className='sectiontwo-opportunityGrid-tag'>
                    Architectural Heritage
                  </p>
                </div>
                <div className='sectiontwo-opportunityGrid-text'>
                  <h1>Renovation and Restoration Services</h1>
                  <p>
                    Offering specialized expertise in renovating and restoring
                    historic or aging structures, preserving their architectural
                    heritage while upgrading them to meet modern functionality
                    and safety standards.
                  </p>
                </div>
              </div>
            </div>
            <div className='sectiontwo-opportunityGrid'>
              <div className='sectiontwo-opportunityGrid-content'>
                <div className='sectiontwo-opportunityGrid-img'>
                  <img src={img4} alt='pics' />
                  <p className='sectiontwo-opportunityGrid-tag'>
                    (BIM) software
                  </p>
                </div>
                <div className='sectiontwo-opportunityGrid-text'>
                  <h1> Technology Integration</h1>
                  <p>
                    Leveraging advancements in construction technology to
                    enhance project efficiency, accuracy, and collaboration.
                    This may include utilizing Building Information Modeling
                    (BIM) software, drones for surveying, virtual reality (VR)
                    for design visualization, or project management software for
                    streamlined communication and documentation.
                  </p>
                </div>
              </div>
              <div className='sectiontwo-opportunityGrid-content'>
                <div className='sectiontwo-opportunityGrid-img'>
                  <img src={img5} alt='pics' />
                  <p className='sectiontwo-opportunityGrid-tag'>
                    {" "}
                    Cost-effective Solutions
                  </p>
                </div>
                <div className='sectiontwo-opportunityGrid-text'>
                  <h1>Value Engineering</h1>
                  <p>
                    Providing cost-effective solutions without compromising
                    quality by employing value engineering principles. This
                    involves analyzing project elements to identify
                    opportunities for cost savings while maintaining
                    functionality and quality standards.
                  </p>
                </div>
              </div>
              <div className='sectiontwo-opportunityGrid-content'>
                <div className='sectiontwo-opportunityGrid-img'>
                  <img src={img2} alt='pics' />
                  <p className='sectiontwo-opportunityGrid-tag'>Maintenance</p>
                </div>
                <div className='sectiontwo-opportunityGrid-text'>
                  <h1>Maintenance and Facility Management</h1>
                  <p>
                    Offering post-construction maintenance and facility
                    management services to ensure the longevity and optimal
                    performance of completed projects. This can include
                    preventive maintenance plans, repairs, and ongoing support
                    for facilities.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Sectiontwo;
