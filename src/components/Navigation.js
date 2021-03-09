import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section className="header">
      <div className="navBar">
        <div className="brand">
          B<span className="stretch">O</span>
          <span className="stretch">O</span>M<br />
          <span className="brandcoffee">COFFEE</span>
        </div>
        <div className="nav" id="mainNav">
          <span className="drinks">
            <a>menu</a>
          </span>
          <span className="about">
            <a>about</a>
          </span>
          <span className="cart">
            <a>cart</a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
