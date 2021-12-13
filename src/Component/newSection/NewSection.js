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
            <div className="wrapper">
              {" "}
              <h1 className="typing-demo">code<span>/</span>Mu. <span>a</span>cadem<span>y</span>...</h1>
            </div>
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
