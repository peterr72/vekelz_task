import React from "react";
import manual from "../../../../images/icons/manual.png";
import recycle from "../../../../images/icons/recycle.png";
import gps from "../../../../images/icons/gps.png";
import thunder from "../../../../images/icons/thunder.png";

//you can change title and other data like carCard in booking section

const Card = ({ image, color }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4  my-4  ">
      <div style={{ backgroundColor: color }} className={"shadow-sm rounded"}>
        <div className="mx-md-2 p-3">
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-between ">
              <div className="d-flex align-items-center">
                <img
                  src={recycle}
                  alt=""
                  width={20}
                  height={20}
                  className="me-2 mb-2"
                />

                <h5> 64% Recommended </h5>
              </div>
            </div>
            <div className="text-center">
              <img
                src={image}
                alt=""
                width={"200px"}
                height={"160px"}
                className="py-4"
              />
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="d-flex ms-2 align-items-center">
                  <img src={manual} alt="" width={"15px"} height={"15px"} />
                </div>
                <div className="d-flex ms-2 align-items-center">
                  <span className="ms-1">130k</span>
                </div>
                <div className="d-flex ms-2 align-items-center">
                  <img src={gps} alt="" width={"15px"} height={"15px"} />
                </div>
                <div className="d-flex ms-2 align-items-center">
                  <img src={thunder} alt="" width={"15px"} height={"15px"} />
                </div>
              </div>
              <div>
                $400<span className="text-secondary">/d</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
