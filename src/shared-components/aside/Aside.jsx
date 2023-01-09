import React, { useState } from "react";

import AsideItem from "./AsideItem";

const Aside = ({ changeContent }) => {
  // .........................../
  function importAll(r) {
    return r.keys().map(r);
  }

  const icons = importAll(
    require.context("../../images/icons/aside/", false, /\.(png|jpe?g|svg)$/)
  );
  // ............................../
  //.............................../
  const iconNames = [
    { id: 1, name: "dashboard" },
    { id: 2, name: "booking" },
    { id: 3, name: "assets" },

    { id: 4, name: "sell cars" },
    { id: 5, name: "buy cars" },
    { id: 6, name: "services" },
    { id: 7, name: "calender" },
    { id: 8, name: "messages" },
  ];
  const [active, setActive] = useState(1);
  //........................................./

  return (
    <>
      <div className="d-flex flex-md-column px-1 px-md-3 mt-5 bg-white">
        <ul className="nav flex-md-column ">
          {icons.map((icon, index) => {
            return (
              <div
                onClick={() => {
                  setActive(iconNames[index].id);
                }}
                key={index}
              >
                <AsideItem
                  icon={icon}
                  name={iconNames[index].name}
                  key={index}
                  onClick={changeContent}
                  active={iconNames[index].id === active ? true : false}
                  index={index}
                />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Aside;
