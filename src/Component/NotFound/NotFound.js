import React from "react";
import { Link } from "react-router-dom";

const divStyle = {
  margin: "auto",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "100px",
  textAlign: "center",
  boxShadow: "inset 1px 1px 17px  rgb(209, 206, 206)",
  padding: "40px",
};
const pStyle = { fontSize: "18px" };

const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={divStyle}>
            <img src={require("./not.png").default} width="20%" />
            <h3 className="mt-4">Not Found</h3>
            <p style={pStyle}>
              seems like you have lost your way. let's bring you back
              <br />
              <Link
                to="/Home"
                style={{
                  fontSize: "24px",
                  color: "#4785f1",
                }}
              >
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
