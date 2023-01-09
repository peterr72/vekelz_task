import Percentage from "./components/percentage/Percentage";
import icon1 from "../../images/icons/percentages/icon1.png";
import icon2 from "../../images/icons/percentages/icon2.png";
import icon3 from "../../images/icons/percentages/icon3.png";
import icon4 from "../../images/icons/percentages/icon4.png";
import car1 from "../../images/dashboard/car1.png";
import car2 from "../../images/dashboard/car2.png";
import car3 from "../../images/dashboard/car3.png";
import Card from "./components/card/Card";
import { Chart } from "./components/chart/Chart.tsx";
const Dashboard = () => {
  const percentageData = [
    {
      icon: icon1,
      title: "energy",
      percentage: 66,
      text: "66%",
      pathColor: "white",
    },
    {
      icon: icon2,
      title: "range",
      percentage: 57,
      text: "157%k",

      pathColor: "#FF7E86",
    },
    {
      icon: icon3,
      title: "break",
      Percentage: 70,
      text: "70%",
      pathColor: "#A162F7",
    },
    {
      icon: icon4,
      title: "tier",
      percentage: 25,
      text: "25%",
      pathColor: "#F6CC0D",
    },
  ];
  const carsData = [
    { image: car1, color: "#E1DFA4" },
    { image: car2, color: "#E3ECF1" },
    { image: car3, color: "#F4E3E5" },
  ];
  return (
    <div className="container">
      <div className=" py-3">
        <h2 className="">Dashboard</h2>
      </div>
      <div className="row my-5">
        {percentageData.map((item, index) => {
          return (
            <Percentage
              icon={item.icon}
              title={item.title}
              percentage={item.percentage}
              text={item.text}
              divColor={
                index === 0
                  ? "bg-color overflow-hidden rounded shadow-sm"
                  : "bg-white overflow-hidden rounded shadow-sm"
              }
              pathColor={item.pathColor}
              key={index}
            />
          );
        })}
      </div>
      <div className="row my-5">
        <div className="col-12 col-md-6">
          <Chart />
        </div>
        <div className="col-12 col-md-6">
          <Chart />
        </div>
      </div>
      {/* statics */}
      <div className="row">
        {carsData.map((car, index) => {
          return <Card image={car.image} color={car.color} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
