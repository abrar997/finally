import React from "react";
import "./NewSection.css";
import Modals from "./Modal";
const NewSection = () => {
  return (
    <div className="NewSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={require("./NewImage/bss.png").default} />
          </div>
          <div className="col-lg-6 text-newswection" data-aos="fade-left">
            <h1>code/Mu. academy </h1>
            <br />
            <h6>
              Build skills with courses and certificates from world-class
              instructores and universities. Also you can be instructor with our
              team ...
            </h6>
            <div className="btn">
              <Modals />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSection;
