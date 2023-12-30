import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header
      className={`text-slate-400 flex justify-between items-center ml-4 mt-4 border-b-2 pb-2`}
    >
      <div className={`flex-shrink-0`}>
        <FontAwesomeIcon icon={faLightbulb} className={`fa-2x`} />
        <span className={`text-2xl font-semibold pl-2`}>React Tools</span>
      </div>
      <nav
        className={`flex overflow-x-hidden mr-4 font-semibold text-slate-600 hover:text-slate-900`}
      >
        <Link to="products">Products</Link>
      </nav>
    </header>
  );
}

export default Header;
