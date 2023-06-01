import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import {
  DownOutlined,
  SlidersOutlined,
  SwapRightOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  const navbarItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <nav>
      <div className='navbar-container'>
        <div className='navbar-content'>
          <div className='navbar-left-content'>
            <div className='navbar-content-logo'>
              <div>
                <span>
                  <SlidersOutlined />
                </span>
              </div>
              <div>
                <h1>CRANES</h1>
              </div>
            </div>
            <div className='navbar-content-links'>
              {navbarItems.map((nav, key) => (
                <NavLink to={nav?.link} key={key}>
                  {nav?.title}{" "}
                  <span>
                    {" "}
                    <DownOutlined />
                  </span>
                </NavLink>
              ))}
            </div>
            <div className='navbar-content-contact'>
              <span>Call anytime</span>
              <p>+1 894 3849-847</p>
            </div>
          </div>
          <div className='navbar-right-content'>
            <div className='navbar-content-inquiry'>
              <p>
                INQUIRY <SwapRightOutlined />
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
