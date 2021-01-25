import React, { useState } from "react";

const SizePrice = () => {
  const [price, setPrice] = useState("29k");
  return (
    <div className={`order order-wrapper`}>
      <div className={`textParallax`}>
        <div className="textBox">
          <div className="title">
            <p className="textHeader">
              {"Frappu "}
              {"Choco"}
            </p>
          </div>
          <div className="textPrice">{price}</div>
          <button className="sizeButton thin" onClick={() => setPrice("29k")}>
            M
          </button>
          <button
            className="sizeButton hablfett"
            onClick={() => setPrice("39k")}
          >
            L
          </button>
          <button className="sizeButton fett" onClick={() => setPrice("49k")}>
            XL
          </button>
          <button className="buyButton">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SizePrice;
