import React from "react";
import { SlidersOutlined } from "@ant-design/icons";
import "./sectionone.css";
const Sectionone = () => {
  return (
    <section className='section1'>
      <div className='section1-div1'>
        <div className='section1-div1-left'>
          <div className='section1-div1-left-foot-note'>
            <div className='section1-div1-left-foot-note-icon'>
              <SlidersOutlined />
            </div>
            <h1>
              Over more than <span style={{ color: "black" }}>150+</span>{" "}
              commercial constructions in the US
            </h1>
          </div>
        </div>
        <div className='section1-div1-right'>
          <p className='sectionone-headline'>What we do</p>
          <h1 className='section-header'>
            Building Your Vision: Expert Construction Solutions Tailored to
            Perfection
          </h1>
          <p className='section-text'>
            Transforming existing spaces into modern, functional, and visually
            appealing environments, breathing new life into homes, offices, and
            commercial establishments. Delivering comprehensive construction
            solutions from start to finish, managing all aspects of the project,
            including planning, budgeting, scheduling, and execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sectionone;
