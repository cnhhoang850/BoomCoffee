import React, { useState } from "react";
import "./Navigation.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CartNav = () => {
  let showed = false;
  function showCart() {
    console.log(showed);
    let cartModal = document.getElementById("cart-modal");
    let wrapper = document.getElementById("main-wrapper");
    if (showed === false) {
      cartModal.style.transform = "translateY(0)";
      wrapper.style.opacity = "0.3";
      wrapper.style.pointerEvents = "none";
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
      showed = true;
    } else if (showed === true) {
      cartModal.style.transform = "translateY(101%)";
      wrapper.style.opacity = "1";
      wrapper.style.pointerEvents = "auto";
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
      showed = false;
    }
  }
  
  return (
    <div id="nav-mobile">
      <div class="page-inner">
        <div class="page-middle">
          <a href="/">
            <div class="nav2-left-top"></div>
          </a>
        </div>
      </div>
      <motion.img
        src={
          !showed
            ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ5MC42NjYgNDkwLjY2NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGxpbmsgdHlwZT0idGV4dC9jc3MiIHJlbD0ic3R5bGVzaGVldCIgaWQ9ImRhcmstbW9kZS1nZW5lcmFsLWxpbmsiPjwvbGluaz48bGluayB0eXBlPSJ0ZXh0L2NzcyIgcmVsPSJzdHlsZXNoZWV0IiBpZD0iZGFyay1tb2RlLWN1c3RvbS1saW5rIj48L2xpbms+PHN0eWxlIGxhbmc9ImVuIiB0eXBlPSJ0ZXh0L2NzcyIgaWQ9ImRhcmstbW9kZS1jdXN0b20tc3R5bGUiPjwvc3R5bGU+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzk0LjY2NywzNzMuMzMzYy0yOS4zOTcsMC01My4zMzMsMjMuOTM2LTUzLjMzMyw1My4zMzNTMzY1LjI2OSw0ODAsMzk0LjY2Nyw0ODBTNDQ4LDQ1Ni4wNjQsNDQ4LDQyNi42NjYgICAgUzQyNC4wNjQsMzczLjMzMywzOTQuNjY3LDM3My4zMzN6IE0zOTQuNjY3LDQ1OC42NjZjLTE3LjY0MywwLTMyLTE0LjM1Ny0zMi0zMmMwLTE3LjY0MywxNC4zNTctMzIsMzItMzIgICAgYzE3LjY0MywwLDMyLDE0LjM1NywzMiwzMkM0MjYuNjY3LDQ0NC4zMDksNDEyLjMwOSw0NTguNjY2LDM5NC42NjcsNDU4LjY2NnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTE4MS4zMzMsMzczLjMzM2MtMjkuMzk3LDAtNTMuMzMzLDIzLjkzNi01My4zMzMsNTMuMzMzUzE1MS45MzYsNDgwLDE4MS4zMzMsNDgwczUzLjMzMy0yMy45MzYsNTMuMzMzLTUzLjMzMyAgICBTMjEwLjczMSwzNzMuMzMzLDE4MS4zMzMsMzczLjMzM3ogTTE4MS4zMzMsNDU4LjY2NmMtMTcuNjQzLDAtMzItMTQuMzU3LTMyLTMyYzAtMTcuNjQzLDE0LjM1Ny0zMiwzMi0zMnMzMiwxNC4zNTcsMzIsMzIgICAgQzIxMy4zMzMsNDQ0LjMwOSwxOTguOTc2LDQ1OC42NjYsMTgxLjMzMyw0NTguNjY2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDM3LjMzMywzMzAuNjY2SDE5MS4xMjVjLTI1LjMyMywwLTQ3LjMxNy0xOC4wMjctNTIuMjg4LTQyLjg4TDg1LjEyLDE5LjI0MmMtMS4wMDMtNC45OTItNS4zNzYtOC41NzYtMTAuNDUzLTguNTc2aC02NCAgICBDNC43NzksMTAuNjY2LDAsMTUuNDQ1LDAsMjEuMzMzUzQuNzc5LDMyLDEwLjY2NywzMkg2NS45Mmw1MS45ODksMjU5Ljk4OWM2Ljk1NSwzNC43NzMsMzcuNzYsNjAuMDExLDczLjIxNiw2MC4wMTFoMjQ2LjIwOCAgICBjNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY2N0M0NDgsMzM1LjQ0NSw0NDMuMjIxLDMzMC42NjYsNDM3LjMzMywzMzAuNjY2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDg4LDc4LjI3MmMtMi4wMjctMi4yODMtNC45MjgtMy42MDUtOC0zLjYwNUg5NmMtNS44ODgsMC0xMC42NjcsNC43NzktMTAuNjY3LDEwLjY2N1M5MC4xMTIsOTYsOTYsOTZoMzcxLjkyNSAgICBsLTE1LjE2OCwxMjEuMzAxYy0yLjAwNSwxNS45NzktMTUuNjU5LDI4LjAzMi0zMS43NjUsMjguMDMySDEyOGMtNS44ODgsMC0xMC42NjcsNC43NzktMTAuNjY3LDEwLjY2NyAgICBjMCw1Ljg4OCw0Ljc3OSwxMC42NjcsMTAuNjY3LDEwLjY2N2gyOTIuOTkyYzI2LjgzNywwLDQ5LjYtMjAuMDc1LDUyLjkyOC00Ni43MmwxNi42NjEtMTMzLjI5MSAgICBDNDkwLjk2NSw4My42MjYsNDkwLjAyNyw4MC41NTQsNDg4LDc4LjI3MnoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
            : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM2NS43MTczMyAzNjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxsaW5rIHR5cGU9InRleHQvY3NzIiByZWw9InN0eWxlc2hlZXQiIGlkPSJkYXJrLW1vZGUtZ2VuZXJhbC1saW5rIj48L2xpbms+PGxpbmsgdHlwZT0idGV4dC9jc3MiIHJlbD0ic3R5bGVzaGVldCIgaWQ9ImRhcmstbW9kZS1jdXN0b20tbGluayI+PC9saW5rPjxzdHlsZSBsYW5nPSJlbiIgdHlwZT0idGV4dC9jc3MiIGlkPSJkYXJrLW1vZGUtY3VzdG9tLXN0eWxlIj48L3N0eWxlPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2Y0NDMzNiI+PHBhdGggZD0ibTM1Ni4zMzk4NDQgMjk2LjM0NzY1Ni0yODYuNjEzMjgyLTI4Ni42MTMyODFjLTEyLjUtMTIuNS0zMi43NjU2MjQtMTIuNS00NS4yNDYwOTMgMGwtMTUuMTA1NDY5IDE1LjA4MjAzMWMtMTIuNSAxMi41MDM5MDYtMTIuNSAzMi43Njk1MzIgMCA0NS4yNWwyODYuNjEzMjgxIDI4Ni42MTMyODJjMTIuNTAzOTA3IDEyLjUgMzIuNzY5NTMxIDEyLjUgNDUuMjUgMGwxNS4wODIwMzEtMTUuMDgyMDMyYzEyLjUyMzQzOC0xMi40ODA0NjggMTIuNTIzNDM4LTMyLjc1LjAxOTUzMi00NS4yNXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZjQ0MzM2IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI5NS45ODgyODEgOS43MzQzNzUtMjg2LjYxMzI4MSAyODYuNjEzMjgxYy0xMi41IDEyLjUtMTIuNSAzMi43Njk1MzIgMCA0NS4yNWwxNS4wODIwMzEgMTUuMDgyMDMyYzEyLjUwMzkwNyAxMi41IDMyLjc2OTUzMSAxMi41IDQ1LjI1IDBsMjg2LjYzMjgxMy0yODYuNTkzNzVjMTIuNTAzOTA2LTEyLjUgMTIuNTAzOTA2LTMyLjc2NTYyNiAwLTQ1LjI0NjA5NGwtMTUuMDgyMDMyLTE1LjA4MjAzMmMtMTIuNS0xMi41MjM0MzctMzIuNzY1NjI0LTEyLjUyMzQzNy00NS4yNjk1MzEtLjAyMzQzN3ptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjZjQ0MzM2IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
        }
        drag
        layout
        dragConstraints={{ top: 0, bottom: 0, left: -400, right: 50 }}
        dragMomentum={false}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        id="nav-mobile-bottom"
        onClick={showCart}
      />
      <div id="cart-modal">
        <div className="title">
          <p className="textHeader">
            {"Order "}
            <br />
          </p>
        </div>
        <button className="buyButton">Checkout</button>
      </div>
    </div>
  );
};

export default CartNav;
