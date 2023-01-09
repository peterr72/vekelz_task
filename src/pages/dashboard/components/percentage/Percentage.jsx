import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Percentage = (props) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className={props.divColor}>
        <div className=" mx-2 py-3">
          <div className="d-flex flex-column align-items-center justify-content-between py-3">
            <div
              className="d-flex shadow-lg justify-content-center align-items-center p-2 rounded-circle "
              style={{ background: "rgba(255, 126, 134, 0.1)" }}
            >
              <img src={props.icon} alt="x"></img>
            </div>
            <h4>{props.title}</h4>
            <div className="  w-50 my-4">
              <CircularProgressbar
                value={props.percentage}
                text={props.text}
                strokeWidth={"7"}
                className={"text-capitalize"}
                styles={buildStyles({
                  textSize: "14px",
                  pathColor: props.pathColor,
                  textColor: "black",
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Percentage;
