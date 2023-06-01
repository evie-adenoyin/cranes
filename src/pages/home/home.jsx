import React from "react";
import Base from "../base/base";
import Header from "../../components/header/header";
import "./home.css";
import Sectionone from "../../components/sections/sectionone/sectionone";
import Sectiontwo from "../../components/sections/sectiontwo/sectiontwo";
import Sectionthree from "../../components/sections/sectionthree/sectionthree";
import Sectionfour from "../../components/sections/sectionfour/sectionfour";
import Sectionfive from "../../components/sections/sectionfive/sectionfive";

const Home = () => {
  return (
    <Base>
      <Header />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
    </Base>
  );
};

export default Home;
