import React from "react";
import "./Scroll.css";

const Scroll = () => {
  window.addEventListener("scroll", function () {
    const scroll = document.querySelector(".scrollup");
    if (this.scrollY >= 560) scroll.classList.add("show-scroll");
    else scroll.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default Scroll;
