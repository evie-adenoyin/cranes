import React from "react";
import { Progress, Space } from "antd";
import "./sectionthree.css";
const Sectionthree = () => {
  return (
    <section className='sectionthree'>
      <div>
        <Space wrap>
          <div className='progress'>
            <Progress
              strokeColor={"#fff"}
              strokeWidth={4}
              percent={100}
              type='circle'
              format={() => (
                <p style={{ color: "#ffff", fontSize: "40px" }}>+230</p>
              )}
            />
            <p>Customers</p>
          </div>
          <div className='progress'>
            <Progress
              strokeColor={"#fff"}
              strokeWidth={4}
              percent={100}
              type='circle'
              format={() => (
                <p style={{ color: "#ffff", fontSize: "40px" }}>+56</p>
              )}
            />
            <p>Projects</p>
          </div>
          <div className='progress'>
            <Progress
              strokeColor={"#fff"}
              strokeWidth={4}
              percent={100}
              type='circle'
              format={() => (
                <p style={{ color: "#ffff", fontSize: "40px" }}>+230</p>
              )}
            />
            <p>Hybrid Workers </p>
          </div>
        </Space>
      </div>
      <div className='sectionthree-experience-section'>
        <p className='sectionthree-headline'>Our Feedback</p>
        {/* <h1>Decades of Expertise and Unparalleled Construction Solution</h1> */}
        <h1>A Legacy of Construction Excellence and Client Satisfaction</h1>
        <p className='sectionthree-experience-section-note'>
          For <strong>CRANES</strong>, our journey in the construction industry
          spans over 7 years, marked by an unwavering commitment to excellence,
          innovation, and unwavering client satisfaction. With a solid
          foundation built on our core values, we have emerged as a trusted name
          in the construction sector, recognized for our expertise, integrity,
          and ability to bring visions to life.
        </p>
      </div>
    </section>
  );
};

export default Sectionthree;
