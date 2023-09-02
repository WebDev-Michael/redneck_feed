import React from "react";
import headerBanner from "./images/header-banner.png";
import { Routes, Route } from "react-router-dom";

export default function Header(props) {
  return (
    <>
      <header>
        {/* <!-- Navigation --> */}

        <nav className="navbar navbar-expand-lg bg-darkgray sticky-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Redneck Feed
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu bg-lightgray">
                    <li>
                      <a className="dropdown-item" href="./src/equine.html">
                        Equine
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="./src/cattle.html">
                        Cattle
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="./src/poultry.html">
                        Poultry
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="./src/rabbit.html">
                        Rabbit
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="./src/swine.html">
                        Swine
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./src/sheepAndGoat.html"
                      >
                        Sheep and Goat
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="./src/straightGrain.html"
                      >
                        Straight Grains
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item"></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* <!-- Company image or logo --> */}

        <div>
          <img
            className="logo border"
            src={headerBanner}
            alt="Redneck Feed logo"
          />
        </div>
      </header>
    </>
  );
}
