import React, { useLayoutEffect } from "react";

const Search = () => {
  useLayoutEffect(() => {
    const searchNav = document.getElementById("searchNav");
    let searchBar = document.getElementsByClassName("search")[0];
    const bar = document.getElementsByClassName("searchBar")[0];
    const mainNav = document.getElementById("mainNav");
    console.log(searchBar);
    function getOffSetBar() {
      if (searchBar.offsetTop > 0.15 * window.innerWidth) {
        bar.classList.add("shorten");
        searchNav.classList.add("show");
        mainNav.classList.add("hide");
      }
      if (searchBar.offsetTop < 0.15 * window.innerWidth) {
        bar.classList.remove("shorten");
        searchNav.classList.remove("show");
        mainNav.classList.remove("hide");
      }
    }

    window.addEventListener("scroll", getOffSetBar);
  }, []);
  return (
    <section className="search">
      <input className="searchBar" placeholder="search" />
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
