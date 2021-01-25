import React from "react";
import "./ProductGrid.css";
import SizePrice from "./SizePrice";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import tea from "../tea.png";
//Ease
const transition = { duration: 4, ease: [0.6, 0.01, 0.05, 0.9] };

const ProductGrid = ({ productName, backdgroundColor, textColor }) => {
  window.scrollTo(0, 0);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 0.8], [80, 200]);
  return (
    <motion.div
      whileHover="hover"
      transition={transition}
      className="productGrid"
    >
      <div className={`item item-wrapper`}>
        <div>
          <div className="border"></div>
          <div className={`parallax red`}>
            <div className="centering">
              <motion.img style={{ translateY: scale }} src={tea} id="image" />
            </div>
          </div>
        </div>
      </div>
      <SizePrice />
      <div className={`about order-wrapper`}>
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
      </div>
      <div className={`options order-wrapper`}>
        <a href="">
          <div className={`textParallax`}>
            <div className="textBox">
              <div className="title">
                <p className="textHeader">
                  {"Options "}
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
