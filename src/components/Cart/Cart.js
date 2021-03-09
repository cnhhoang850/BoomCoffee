import React from "react";
import "./Cart.css";

const Cart = () => {
  function closeCart() {
    document.getElementsByTagName("html")[0].style.overflow = "scroll";
    document.getElementById("sideNav").style.width = "0";
  }
  return (
    <section id="sideNav">
      <div className="orders"></div>
      <div id="closeCart" onClick={closeCart}>
        X
      </div>
    </section>
  );
};

export default Cart;
