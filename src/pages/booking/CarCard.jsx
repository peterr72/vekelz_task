import { useState } from "react";
import person from "../../images/icons/person.png";
import manual from "../../images/icons/manual.png";
import { Heart } from "react-bootstrap-icons";

const CarCard = ({ image }) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4  my-4  ">
      <div className="mx-md-2 bg-white shadow-sm rounded p-3">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column">
              <h5>Porsche 718 Cayman S </h5>
              <h6>Coupe</h6>
            </div>
            <div>
              <Heart
                color={isLike ? "red" : "black"}
                onClick={() => {
                  setIsLike(!isLike);
                }}
                className={"cursor"}
                size={"20px"}
              />
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
              <div className="d-flex me-2 align-items-center">
                <img src={person} alt="" width="15px" height={"15px"} />
                <span className="ms-1">4</span>
              </div>
              <div className="d-flex ms-2 align-items-center">
                <img src={manual} alt="" width={"15px"} height={"15px"} />
                <span className="ms-1">Manual</span>
              </div>
            </div>
            <div>
              $400<span className="text-secondary">/d</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
