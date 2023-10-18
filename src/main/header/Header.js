import React from "react";
import "./header.css";
import "font-awesome/css/font-awesome.min.css";
import earn from "./Earnings.png";
import Balance from "./Balance.png";
import order from "./order.jpeg";
import TS from "./Totalscore.jpeg";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="name">Hello Kathiresan👋,</div>
        <div className="search-box">
          <input className="search-input" type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="box-container">
        <div className="box">
          <div className="circle-image">
            <img src={earn} alt="Image 1" className="box-image" />
          </div>
          <p className="box-text">Earning</p>
          <p className="additional-text">
            <b>$2.4K</b>
          </p>
        </div>
        <div className="box">
          <div className="circle-image">
            <img src={Balance} alt="Image 2" className="box-image" />
          </div>
          <p className="box-text">Balance</p>
          <p className="additional-text">
            <b>$2.4K</b>
          </p>
        </div>
        <div className="box">
          <div className="circle-image">
            <img src={order} alt="Image 3" className="box-image" />
          </div>
          <p className="box-text">Orders</p>
          <p className="additional-text">
            <b>$2.4K</b>
          </p>
        </div>
        <div className="box">
          <div className="circle-image">
            <img src={TS} alt="Image 4" className="box-image" />
          </div>
          <p className="box-text">Total score</p>
          <p className="additional-text">
            <b>$2.4K</b>
          </p>
        </div>
      </div>
      <div className="square-boxes">
        <div className="square-box"></div>
        <div className="square-box1"></div>
      </div>
      <div className="rect1">
        <div class="rectangular">
          <div className="final1"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
