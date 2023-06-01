import React from "react";
import "./sectionfive.css";
import { Avatar, Rate } from "antd";
import {
  AlertOutlined,
  ArrowRightOutlined,
  EllipsisOutlined,
  FireOutlined,
  NotificationOutlined,
  PieChartOutlined,
  ReconciliationOutlined,
  SubnodeOutlined,
} from "@ant-design/icons";
const Sectionfive = () => {
  return (
    <div className='sectionfive'>
      <div className='sectionfive-top'>
        <div className='sectionfive-header'>
          <p className='sectionfive-headline'>Testimonial</p>
          <h1>What clients are saying </h1>
          <h1>About us</h1>
        </div>
        <div className='sectionfive-testimonials'>
          <div className='sectionfive-card'>
            <Rate disabled defaultValue={5} style={{ color: "#dd042b" }} />
            <p className='sectionfive-card-comment'>
              I couldn't be happier with the exceptional construction services
              provided by crane. From the initial consultation to the final
              touches, their team displayed professionalism, expertise, and an
              unwavering commitment to quality.
            </p>
            <div className='sectionfive-user'>
              <div>
                <Avatar
                  size={60}
                  src='https://th.bing.com/th/id/OIP.D4fnI1DxUEIHDBPyoXIGPwHaHa?pid=ImgDet&rs=1'
                />
              </div>
              <div className='sectionfive-user-name'>
                <p>Chris Morgan</p>
              </div>
              <div className='sectionfive-user-action'>
                <EllipsisOutlined />
              </div>
            </div>
          </div>
          <div className='sectionfive-card'>
            <Rate disabled defaultValue={5} style={{ color: "#dd042b" }} />
            <p className='sectionfive-card-comment'>
              I couldn't be happier with the exceptional construction services
              provided by crane. From the initial consultation to the final
              touches, their team displayed professionalism, expertise, and an
              unwavering commitment to quality.
            </p>
            <div className='sectionfive-user'>
              <div>
                <Avatar
                  size={60}
                  src='https://th.bing.com/th/id/OIP.R6Vc21aNO20lghKwJk1XqgAAAA?pid=ImgDet&w=357&h=500&rs=1'
                />
              </div>
              <div className='sectionfive-user-name'>
                <p>Chris Morgan</p>
              </div>
              <div className='sectionfive-user-action'>
                <EllipsisOutlined />
              </div>
            </div>
          </div>
          <div className='sectionfive-card'>
            <Rate disabled defaultValue={4} style={{ color: "#dd042b" }} />
            <p className='sectionfive-card-comment'>
              I couldn't be happier with the exceptional construction services
              provided by crane. From the initial consultation to the final
              touches, their team displayed professionalism, expertise, and an
              unwavering commitment to quality.
            </p>
            <div className='sectionfive-user'>
              <div>
                <Avatar
                  size={60}
                  src='https://th.bing.com/th/id/OIP.R6Vc21aNO20lghKwJk1XqgAAAA?pid=ImgDet&w=357&h=500&rs=1'
                />
              </div>
              <div className='sectionfive-user-name'>
                <p>Chris Morgan</p>
              </div>
              <div className='sectionfive-user-action'>
                <EllipsisOutlined />
              </div>
            </div>
          </div>
        </div>
        <div className='sectionfive-read-more'>
          <button>
            Read more <ArrowRightOutlined />
          </button>
        </div>
      </div>
      <div className='sectionfive-partners'>
        <div>
          <AlertOutlined />
        </div>
        <div>
          <PieChartOutlined />
        </div>
        <div>
          <FireOutlined />
        </div>
        <div>
          <NotificationOutlined />
        </div>
        <div>
          <SubnodeOutlined />
        </div>
        <div>
          <ReconciliationOutlined />
        </div>
      </div>
    </div>
  );
};

export default Sectionfive;
