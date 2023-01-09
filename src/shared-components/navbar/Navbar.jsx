import React from "react";
import notificationIcon from "../../images/icons/notification_icon.png";
import user from "../../images/icons/user.png";
import logo from "../../images/icons/logo.png";
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-white">
        <div className="container-fluid">
          <div className="col-2 d-flex align-items-center">
            <div className="navbar-brand d-flex">
              <img
                src={logo}
                alt=""
                className="bg-color rounded p-1 ms-0  me-1 cursor"
              />
            </div>
            <h4 className="mb-0 cursor fw-bold">Motiv.</h4>
          </div>
          <div className="col-10">
            <div className="d-flex justify-content-between ps-5">
              <form role="search">
                <input
                  className="form-control d-none d-sm-block me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
              <div>
                <img src={notificationIcon} alt="" className="mx-3 cursor" />

                <img
                  src={user}
                  alt=""
                  className="rounded-circle cursor"
                  width={"40px"}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
