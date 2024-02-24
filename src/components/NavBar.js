import React from "react";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <section className="container">
      <div className="navbar">
        <div className="nav-input">
          <span className="search-icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.25 10.5C1.25 5.39139 5.39139 1.25 10.5 1.25C15.6086 1.25 19.75 5.39139 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39139 19.75 1.25 15.6086 1.25 10.5ZM10.5 2.75C6.21981 2.75 2.75 6.21981 2.75 10.5C2.75 14.7802 6.21981 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21981 14.7802 2.75 10.5 2.75Z"
                fill="#626E79"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.081 16.0805C16.3739 15.7876 16.8488 15.7876 17.1417 16.0805L21.3843 20.3232C21.6772 20.6161 21.6772 21.0909 21.3843 21.3838C21.0914 21.6767 20.6165 21.6767 20.3236 21.3838L16.081 17.1412C15.7881 16.8483 15.7881 16.3734 16.081 16.0805Z"
                fill="#626E79"
              />
            </svg>
          </span>
          <input type="text" />
        </div>
        <div className="menu">
          <p className="menu1">Categories</p>
          <p className="menu2">Website Builders</p>
          <p className="menu3">Today's deals</p>
        </div>
        <div className="nav-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="40"
            viewBox="0 0 48 48"
          >
            <linearGradient
              id="EIPc0qTNCX0EujYwtxKaXa_MmupZtPbnw66_gr1"
              x1="12.066"
              x2="34.891"
              y1=".066"
              y2="22.891"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".237" stop-color="#3bc9f3"></stop>
              <stop offset=".85" stop-color="#1591d8"></stop>
            </linearGradient>
            <path
              fill="url(#EIPc0qTNCX0EujYwtxKaXa_MmupZtPbnw66_gr1)"
              d="M43,15H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,14.1,44.1,15,43,15z"
            ></path>
            <linearGradient
              id="EIPc0qTNCX0EujYwtxKaXb_MmupZtPbnw66_gr2"
              x1="12.066"
              x2="34.891"
              y1="12.066"
              y2="34.891"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".237" stop-color="#3bc9f3"></stop>
              <stop offset=".85" stop-color="#1591d8"></stop>
            </linearGradient>
            <path
              fill="url(#EIPc0qTNCX0EujYwtxKaXb_MmupZtPbnw66_gr2)"
              d="M43,27H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,26.1,44.1,27,43,27z"
            ></path>
            <linearGradient
              id="EIPc0qTNCX0EujYwtxKaXc_MmupZtPbnw66_gr3"
              x1="12.066"
              x2="34.891"
              y1="24.066"
              y2="46.891"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".237" stop-color="#3bc9f3"></stop>
              <stop offset=".85" stop-color="#1591d8"></stop>
            </linearGradient>
            <path
              fill="url(#EIPc0qTNCX0EujYwtxKaXc_MmupZtPbnw66_gr3)"
              d="M43,39H5c-1.1,0-2-0.9-2-2v-2c0-1.1,0.9-2,2-2h38c1.1,0,2,0.9,2,2v2C45,38.1,44.1,39,43,39z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
