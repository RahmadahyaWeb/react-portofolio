import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rahmadahya</h1>
        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              Contact
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="" className="footer__social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
