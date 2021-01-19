import React from "react";
import Menu from "./MenuItem";
import "./ProductGrid.css";
import image from "../tea.png";
import SizePrice from "./SizePrice";
import { motion, useViewportScroll, useTransform } from "framer-motion";

//Ease
const transition = { duration: 4, ease: [0.6, 0.01, 0.05, 0.9] };

const ProductGrid = ({ productName, backdgroundColor, textColor }) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [50, 200]);

  let menuItems = [
    {
      firstName: "FRAPPU",
      lastName: "CHOCO",
      price: "29.000VND",
      index: 1,
    },
  ];
  return (
    <motion.div
      whileHover="hover"
      transition={transition}
      className="productGrid"
    >
      <div className={`item item-wrapper`}>
        <a href="https://bols.com/cocktails/recipes">
          <div className="border"></div>
          <div className={`parallax red`}>
            <div className="centering">
              <motion.img
                style={{ translateY: scale }}
                initial={{ scale: 0.8, translateY: 0.2 }}
                animate={{
                  transition: { delay: 0.4, ...transition },
                }}
                src={
                  "https://raw.githubusercontent.com/cnhhoang850/BoomCoffee/gh-pages/static/media/tea.9c74c900.png"
                }
                id="image"
              />
            </div>
          </div>
        </a>
      </div>
      <SizePrice />
      <div className={`about order-wrapper`}>
        <a href="https://bols.com/cocktails/recipes">
          <div className={`textParallax`}>
            <div className="textBox">
              <div className="title">
                <p className="textHeader">
                  {"Topping "}
                  <br />
                </p>
                <span className="textPrice">{"29k"}</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default ProductGrid;
