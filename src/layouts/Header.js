import React, { useState, useEffect, useReducer, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IMAGES } from "../constants/theme";

import Collapse from "react-bootstrap/Collapse";
import { MenuListArray2 } from "./MenuListArray2";
import Cart from "../images/cart.png";
import login from "../images/user.png";

const Header = () => {
  const [headerFix, setHeaderFix] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeaderFix(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <header className={`site-header mo-left header header-transparent style-2`}>
        <div className="top-bar">
          <div className="container">
            <div className="dz-topbar-inner d-flex justify-content-between align-items-center">
              <div className="dz-topbar-left">
                <ul>
                  <li>
                    <i className="fa-regular fa-envelope"></i> blackfusefitness@gmail.com
                  </li>
                </ul>
              </div>
              <div className="dz-topbar-right">
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i> Time 06:00 AM To 07:00 PM
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> (876) 295-5173/ (876) 469-2523
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={`sticky-header main-bar-wraper navbar-expand-lg ${headerFix ? "is-fixed" : ""}`}>
          <Mainheader />
        </div>
      </header>
  );
};

const Mainheader = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const mainMenu = document.getElementById("OpenMenu");
    if (mainMenu) {
      mainMenu.classList.toggle("show", sidebarOpen);
    }
  }, [sidebarOpen]);

  // Menu dropdown list
  const initialState = {
    active: "",
    activeSubmenu: "",
  };

  const [state, setState] = useReducer((prev, updated) => ({ ...prev, ...updated }), initialState);

  const handleMenuActive = (status) => {
    setState((prev) => ({ active: prev.active === status ? "" : status }));
  };

  const handleSubmenuActive = (status) => {
    setState((prev) => ({ activeSubmenu: prev.activeSubmenu === status ? "" : status }));
  };

  const AddActiveMenu = () => {
    MenuListArray2.forEach((ell) => {
      if (ell.to === location.pathname) {
        setActiveMenu(ell.title);
      }
      ell.content?.forEach((ele) => {
        if (ele.to === location.pathname) {
          setActiveMenu(ell.title);
        }
      });
    });
  };

  useEffect(() => {
    AddActiveMenu();
  }, [location.pathname]);

  // Function to handle navigation and close the sidebar
  const handleNavigation = (path) => {
    setSidebarOpen(false); // Close the sidebar
    navigate(path); // Navigate to the path
  };

  return (
      <div className="main-bar clearfix">
        <div className="clearfix">
          <div className="box-header clearfix">
            {/* Website Logo */}
            <div className="logo-header mostion logo-dark">
              <Link to={"/"}>
                <img className="select_logo" src={IMAGES.logo} alt="" />
              </Link>
            </div>

            <button
                className={`navbar-toggler navicon justify-content-end ${sidebarOpen ? "open" : "collapsed"}`}
                type="button"
                onClick={() => setSidebarOpen((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Extra Nav */}
            <div className="extra-nav">
              <div className="extra-cell"></div>
            </div>

            {/* Search Form */}
            <div className="dz-quik-search">
              <form action="#">
                <input
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Keyword ..."
                />
                <span id="quik-search-remove">
                <i className="fa-solid fa-xmark"></i>
              </span>
              </form>
            </div>

            {/* Header Nav */}
            <div id="navbarNavDropdown" className={`header-nav navbar-collapse collapse justify-content-end ${sidebarOpen ? "show" : ""}`}>
              <div className="logo-header logo-dark">
                <Link to={"/"}>
                  <img src={IMAGES.logo} alt="" />
                </Link>
              </div>
              <ul className="nav navbar-nav navbar-left">
                {MenuListArray2.map((item, index) => {
                  let menuClass = item.classChange;
                  const isActiveMenu = item.title === activeMenu;

                  return (
                      <li
                          className={`${menuClass} ${isActiveMenu ? "active" : ""}`}
                          key={index}
                      >
                        {(localStorage.getItem('token') && (item.title === "login" || item.title === "Cart")) ? (
                            <Link to={item.title === "login" ? "Profile" : "Cart"}>
                              <img src={item.title === "login" ? login : Cart} style={{ width: '1.9rem' }} />
                            </Link>
                        ) : (
                            <Link to={item.to} onClick={() => handleNavigation(item.to)}>
                              {item.title}
                            </Link>
                        )}
                      </li>
                  );
                })}
              </ul>
              <div className="dz-social-icon">
                <ul>
                  <li>
                    <Link target="_blank" to="https://www.instagram.com/blackfusefitness/" rel="noreferrer" className="mb-2">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link target="_blank" to="https://www.tiktok.com/@blackfusefitness" rel="noreferrer">
                      <i className="fab fa-tiktok"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
