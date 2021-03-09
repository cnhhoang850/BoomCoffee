import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  useLayoutEffect(() => {
    const searchNav = document.getElementById("searchNav");
    let searchBar = document.getElementById("search");
    const bar = document.getElementsByClassName("searchBar")[0];
    const mainNav = document.getElementById("mainNav");
    let animate = false;
    function getOffSetBar() {
      console.log(
        searchBar.getBoundingClientRect().top,
        0.15 * window.innerWidth
      );
      if (searchBar.getBoundingClientRect().top < 20) {
        animate = true;
        bar.classList.add("shorten");
        searchNav.classList.add("show");
        /*mainNav.classList.add("hide");*/
      }
      if (searchBar.getBoundingClientRect().top > 20) {
        if (animate === true) {
          bar.classList.remove("shorten");
          searchNav.classList.remove("show");
          /*mainNav.classList.remove("hide");*/
        }
        animate = false;
      }
    }

    window.addEventListener("scroll", getOffSetBar);
  }, []);

  function openCart() {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    if (window.innerWidth < 900) {
      document.getElementById("sideNav").style.width = "100vw";
    } else {
      document.getElementById("sideNav").style.width = "35vw";
    }
  }

  return (
    <div className="search" id="search">
      <input className="searchBar" placeholder="search" />
      <div className="nav" id="searchNav">
        <span className="drinks">
          <Link to="/">menu</Link>
        </span>
        <span className="about">
          <Link to="/">about</Link>
        </span>
      </div>
    </div>
  );
};

export default Search;
