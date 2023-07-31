import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [toggleModal, setToggleModal] = useState(0);

  const toggleTab = (index) => {
    setToggleModal(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Home <br /> Work
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleModal === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Home Work</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to my clients.
              </p>
            </div>
          </div>
        </div>
        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Wedding <br /> Invitation
            </h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleModal === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Wedding Invitation</h3>
              <p className="services__modal-description">
                Service with more than 1 years of experience. Providing quality
                work to my clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
