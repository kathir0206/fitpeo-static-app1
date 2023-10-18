import React from "react";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import images from "../images.jpeg"

function Hi() {
  return (
    <div className="app">
      <nav className="sidebar">
        <h1 className="text-white">DashBoard</h1>
        <ul className="nav flex-column ">
          <li className="nav-item dashboard-list">
            <i className="fa fa-dashboard"></i> DashBoard
          </li>
          <li className="nav-item">
            <i className="fa fa-cube"></i> Product
            <span className="separator1">{" >"}</span>
          </li>
          <li className="nav-item">
            <i className="fa fa-users"></i> Customers
            <span className="separator2">{" >"}</span>
          </li>
          <li className="nav-item">
            <i className="fa fa-money"></i> Income
            <span className="separator3">{" >"}</span>
          </li>
          <li className="nav-item">
            <i className="fa fa-bullhorn"></i> Promote
            <span className="separator4">{" >"}</span>
          </li>
          <li className="nav-item">
            <i className="fa fa-question-circle"></i> Help
            <span className="separator5">{" >"}</span>
          </li>
        </ul>
        <div className="user-profile">
          <div className="profile-image">
            <img
              src={images}
              alt="User Image"
              className="img-thumbnail"
            />
          </div>
          <div className="profile-details">
            <h className="user-name">Robert</h>
            <p className="user-designation">Manger</p>
            <span className="down-arrow">▼</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Hi;
