import React, { useLayoutEffect, useState } from "react";

const Search = () => {
  const [short, setShort] = useState("searchHide");
  useLayoutEffect(() => {
    const searchNav = document.getElementById("searchNav");
    const searchBar = document.getElementsByClassName("search")[0];
    const bar = document.getElementsByClassName("searchBar")[0];
    const mainNav = document.getElementById("mainNav");
    let latestScrollY = 0,
      ticking = false;

    function onScroll() {
      latestScrollY = window.scrollY;
      requestTick();
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update);
      }
      ticking = true;
    }

    function update() {
      ticking = false;
      if (latestScrollY > 0.09 * window.innerWidth) {
        searchNav.classList.add("show");
        mainNav.classList.add("hide");
        setShort("searchShow");
      }
      if (latestScrollY < 0.09 * window.innerWidth) {
        searchNav.classList.remove("show");
        mainNav.classList.remove("hide");
        setShort("searchHide");
      }
    }

    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <section className="search">
      <input className={`searchBar shorten ${short}`} placeholder="search" />
      <input
        className={`searchBar ${
          short === "searchShow" ? "searchHide" : "searchShow"
        }`}
        placeholder="search"
      />
      <div className="nav" id="searchNav">
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
    </section>
  );
};

export default Search;
