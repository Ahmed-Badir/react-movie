import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import "./header.scss";
import logo from "./../../assets/logo.png";
import * as Config from "./../../constants/Config";

// تعريف عناصر القائمة الرئيسية
const headerNav = [
  {
    display: "Home",
    path: `/${Config.HOME_PAGE}`,
  },
  {
    display: "Movies",
    path: `/${Config.HOME_PAGE}/movie`,
  },
  {
    display: "TV Series",
    path: `/${Config.HOME_PAGE}/tv`,
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  // تحديد العنصر النشط في القائمة
  const active = headerNav.findIndex((e) => e.path === pathname);

  // تأثير shrink للهيدر عند السكروول
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        {/* اللوجو + الاسم */}
        <div className="logo">
          <Link to={`/${Config.HOME_PAGE}`} className="logo__link">
            <img src={logo} alt="Flixora" />
            <span>Flixora</span>
          </Link>
        </div>

        {/* قائمة التنقل */}
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
