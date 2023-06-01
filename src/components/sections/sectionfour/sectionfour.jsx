import React from "react";
import { Avatar } from "antd";

import { AudioOutlined } from "@ant-design/icons";
import img1 from "../../../assets/images/mikita-yo-U41u8rodlKw-unsplash.jpg";
import "./sectionfour.css";
const Sectionfour = () => {
  return (
    <section className='sectionfour'>
      <div className='sectionfour-sectionone'>
        <div className='sectionfour-sectionone-left'>
          <p className='sectionfour-headline'>Our Services</p>
          <h1 className='sectionfour-header'>
            {" "}
            One Project at a Time Exceptional Construction Services.
          </h1>
          <div className='sectionfour-sectionone-list '>
            <p>
              {" "}
              Throughout our rich history, we have undertaken a diverse range of
              projects, each one unique in its scope and complexity. From
              residential dwellings to commercial complexes, from architectural
              marvels to infrastructure development, we have left an indelible
              mark on the landscape, shaping communities and forging lasting
              relationships with our clients. Our success lies in the fusion of
              experience and expertise, blending traditional craftsmanship with
              cutting-edge technology.
            </p>
          </div>
          <div>
            <Avatar.Group
              size='large'
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
            >
              <Avatar src='https://th.bing.com/th/id/OIP.D4fnI1DxUEIHDBPyoXIGPwHaHa?pid=ImgDet&rs=1' />
              <Avatar src='https://th.bing.com/th/id/OIP.R6Vc21aNO20lghKwJk1XqgAAAA?pid=ImgDet&w=357&h=500&rs=1' />
              <Avatar style={{ background: "#dd042b" }}>
                <span className='phone'>
                  <AudioOutlined />
                </span>
              </Avatar>
            </Avatar.Group>
            <p className='getinTouch'>
              Instantly get in touch with any of our team members...
            </p>
          </div>
        </div>
        <div className='sectionfour-sectionone-right'>
          <img src={img1} alt='pic' />
        </div>
      </div>
    </section>
  );
};

export default Sectionfour;
