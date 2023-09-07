import "./styles/App.css";
import React from "react";
import Home from "./Home";
import Footer from "./Footer";
// import ErrorPage from "./ErrorPage";

import Equine from "./Products/Equine";
import Cattle from "./Products/Cattle";
import Poultry from "./Products/Poultry";
import Rabbit from "./Products/Rabbit";
import Swine from "./Products/Swine";
import SheepAndGoat from "./Products/SheepAndGoat";
import StraightGrain from "./Products/StraightGrain";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import headerBanner from "./images/header-banner.png";

export default function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/equine" element={<Equine />} />
        <Route path="/cattle" element={<Cattle />} />
        <Route path="/poultry" element={<Poultry />} />
        <Route path="/rabbit" element={<Rabbit />} />
        <Route path="/swine" element={<Swine />} />
        <Route path="/sheep-and-goat" element={<SheepAndGoat />} />
        <Route path="/straight-grain" element={<StraightGrain />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg bg-darkgray sticky-top">
          <div class="container-fluid">
            <Link to="/" class="navbar-brand">
              Redneck Feed
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul class="dropdown-menu bg-lightgray">
                    <li>
                      <Link to="/equine" class="dropdown-item">
                        Equine
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/cattle" class="dropdown-item">
                        Cattle
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/poultry" class="dropdown-item">
                        Poultry
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/rabbit" class="dropdown-item">
                        Rabbit
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/swine" class="dropdown-item">
                        Swine
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/sheep-and-goat" class="dropdown-item">
                        Sheep and Goat
                      </Link>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/straight-grain" class="dropdown-item">
                        Straight Grains
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item"></li>
              </ul>
            </div>
          </div>
        </nav>
        ;
        <div>
          <img
            className="logo border"
            src={headerBanner}
            alt="Redneck Feed logo"
          />
        </div>
      </header>
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
