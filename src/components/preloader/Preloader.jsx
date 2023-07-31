import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <ThreeCircles
        height="100"
        width="100"
        color="#000000"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};

export default Preloader;
