import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

const Base = ({ children }) => {
  return (
    <main>
      <section>
        <Navbar />
        {children}
        <Footer />
      </section>
    </main>
  );
};

export default Base;
