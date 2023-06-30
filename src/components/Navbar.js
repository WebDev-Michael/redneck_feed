import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        Redneck Feed
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACT
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              PRODUCTS
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                EQUINE
              </a>
              <a className="dropdown-item" href="#">
                CATTLE
              </a>
              <a className="dropdown-item" href="#">
                SWINE
              </a>
              <a className="dropdown-item" href="#">
                POULTRY
              </a>
              <a className="dropdown-item" href="#">
                SHEEP & GOAT
              </a>
              <a className="dropdown-item" href="#">
                STRAIGHT GRAINS
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ABOUT X-CEL
            </a>
          </li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar;