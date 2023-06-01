import React from "react";
import img1 from "../../assets/images/ricardo-gomez-angel-7bzbyafVTYg-unsplash.jpg";
import img2 from "../../assets/images/etienne-girardet-sgYamIzhAhg-unsplash.jpg";
import img3 from "../../assets/images/ricardo-gomez-angel-zaxoaZVazCs-unsplash.jpg";
import { Carousel } from "react-responsive-carousel";
import "./header.css";
import { MobileOutlined, SwapRightOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header>
      <div>
        <Carousel
          autoPlay
          showStatus={false}
          animationHandler={"fade"}
          transitionTime={1000}
          interval={2000}
          infiniteLoop
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
        >
          <div className='header-slide-container'>
            <div className='header-image'>
              <div></div>
              <img src={img1} alt='' srcSet='' />
            </div>
            <div className='header-text'>
              <p className='header-caption'>Let's build your ideas...</p>
              <h1>Your dreams,</h1>
              <h1>we build.</h1>
              <div className='header-contact'>
                <div className='header-contact-button'>
                  <button>
                    Contact Us <SwapRightOutlined />
                  </button>
                </div>
                <div className='header-contact-phone'>
                  <p>
                    {" "}
                    <MobileOutlined /> +1 894 3849-847
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='header-slide-container'>
            <div className='header-image'>
              <div></div>
              <img src={img2} alt='' srcSet='' />
            </div>
            <div className='header-text'>
              <p className='header-caption'>Crafting Excellence</p>
              <h1>Building Excellence,</h1>
              <h1> Creating Legacies.</h1>
              <div className='header-contact'>
                <div className='header-contact-button'>
                  <button>
                    Contact Us <SwapRightOutlined />
                  </button>
                </div>
                <div className='header-contact-phone'>
                  <p>
                    {" "}
                    <MobileOutlined /> +1 894 3849-847
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='header-slide-container'>
            <div className='header-image'>
              <div></div>
              <img src={img3} alt='' srcSet='' />
            </div>
            <div className='header-text'>
              <p className='header-caption'>
                {" "}
                Empowering Communities through Unparalleled Construction
                Solutions.
              </p>
              <h1> Crafting the Future </h1>
              <h1> with Precision.</h1>
              <div className='header-contact'>
                <div className='header-contact-button'>
                  <button>
                    Contact Us <SwapRightOutlined />
                  </button>
                </div>
                <div className='header-contact-phone'>
                  <p>
                    {" "}
                    <MobileOutlined /> +1 894 3849-847
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </header>
  );
};

export default Header;
