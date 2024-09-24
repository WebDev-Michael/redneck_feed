import "./styles/App.css";
import React from "react";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import {
  Cattle,
  Equine,
  Poultry,
  Rabbit,
  Swine,
  SheepAndGoat,
  StraightGrains
} from "./Components/Endpoints"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

export default function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/equine" element={< Equine />} />
        <Route path="/cattle" element={< Cattle />} />
        <Route path="/poultry" element={< Poultry />} />
        <Route path="/rabbit" element={< Rabbit />} />
        <Route path="/swine" element={< Swine />} />
        <Route path="/sheep-and-goat" element={< SheepAndGoat />} />
        <Route path="/straight-grain" element={< StraightGrains />} />
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
        <nav className="navbar navbar-expand-lg bg-darkgray sticky-top">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand bold">
              RedNeck Feeds LLC
            </Link>
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className="nav-link dropdown-toggle products"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                  </a>
                  <ul className="dropdown-menu bg-lightgray">
                    <li>
                      <Link to="/cattle" className="dropdown-item">
                        Cattle
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/equine" className="dropdown-item">
                        Equine
                      </Link>
                    </li>   
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/poultry" className="dropdown-item">
                        Poultry
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/rabbit" className="dropdown-item">
                        Rabbit
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/swine" className="dropdown-item">
                        Swine
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/sheep-and-goat" className="dropdown-item">
                        Sheep and Goat
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link to="/straight-grain" className="dropdown-item">
                        Straight Grains
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </header>
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
