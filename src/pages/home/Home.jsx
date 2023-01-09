import { useState } from "react";
import Aside from "../../shared-components/aside/Aside.jsx";
import Navbar from "../../shared-components/navbar/Navbar.jsx";

import Booking from "../booking/Booking.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";

const Home = () => {
  const pages = [<Dashboard />, <Booking />];
  const [togglePages, setTogglePages] = useState(0);
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12  col-md-3 col-lg-2 ps-0 d-md-block bg-white">
            <Aside changeContent={setTogglePages} />
          </div>
          <div className="col-12  col-md-9 col-lg-10">
            <div className="mx-md-3">
              {pages[togglePages] != null
                ? pages[togglePages]
                : "Not Implemented Yet"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
