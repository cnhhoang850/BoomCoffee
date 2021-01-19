import React from "react";
import image from "../tea.png";

const MenuItem = ({ firstName, lastName, price, imageUrl, index }) => {
  //index + 1 because array is 0 index

  const colors = ["orange", "blue", "red", "green", "milk"];

  const findColor = (accentName) => {
    let color;
    switch (accentName) {
      case "FRAPPU":
        color = "red";
        break;
      case "MARU":
        color = "orange";
        break;
      case "COFFEE":
        color = "blue";
        break;
      case "MILK":
        color = "milk";
        break;
      default:
        color = "red";
    }

    return color;
  };
  return (
    <div className={`item-wrapper item-${index}`}>
      <a href="/product">
        <div className="border"></div>
        <div className={`parallax ${findColor(firstName)}`}>
          <div className="centering">
            <div className="itemTitle">
              <p className="itemHeader">
                {firstName}
                <br />
                {lastName}
              </p>
              <span className="itemPrice">{price}</span>
            </div>
            <img src={image} className="img" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default MenuItem;
