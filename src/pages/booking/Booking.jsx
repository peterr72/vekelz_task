import CarCard from "./CarCard";
import { Filter, Search } from "react-bootstrap-icons";

const Booking = () => {
  // ............................//
  function importAll(r) {
    return r.keys().map(r);
  }

  const carsImages = importAll(
    require.context("../../images/cars/", false, /\.(png|jpe?g|svg)$/)
  );
  //...........................//

  return (
    <div className="row">
      {/* title */}
      <div className="px-md-4 py-3">
        <h2 className="px-md-3">Booking</h2>
      </div>
      {/* filers */}
      <div className=" d-flex justify-content-between  ">
        <div className="mx-md-4">
          <select id="model" className="px-4 py-1 border-0 rounded me-4">
            <option value="new">New</option>
            <option value="old">Old</option>
          </select>
          <select id="cars" className="px-4 py-1 border-0 rounded">
            <option value="toyota">Toyota</option>
            <option value="another">Another</option>
          </select>
        </div>
        <div className="d-flex justify-content-center align-items-center mx-md-4">
          <div className="bg-white rounded-circle shadow-sm py-1 px-2 me-3">
            <Filter />
          </div>
          <div className="bg-color rounded-circle shadow-sm py-1 px-2">
            <Search />
          </div>
        </div>
      </div>

      {carsImages.map((image, index) => {
        return <CarCard image={image} key={index} />;
      })}
    </div>
  );
};

export default Booking;
