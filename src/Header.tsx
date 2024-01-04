import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import authorize from "./api/authorize";
import { authenticate, signout } from "./api/authenticate";
import { useAppContext } from "./AppContext";

function Header() {
  const { dispatch, loading, user, permissions } = useAppContext();
  const navigate = useNavigate();

  async function handleSignInClick() {
    if (user) {
      dispatch({ type: "signout", user: user });
      await signout();
      dispatch({ type: "signedout" });
      navigate("/");
      return;
    }

    dispatch({ type: "authenticate" });

    const authenticatedUser = await authenticate();

    dispatch({
      type: "authenticated",
      user: authenticatedUser,
    });

    if (authenticatedUser !== undefined) {
      dispatch({ type: "authorize" });

      const authorizedPermissions = await authorize(authenticatedUser.id);

      dispatch({
        type: "authorized",
        permissions: authorizedPermissions,
      });
    }
  }

  const getButtonText = () => {
    if (loading) {
      return "...";
    }

    if (!loading && user) {
      return "Sign out";
    }

    return "Sign in";
  };

  const renderAdminLink = () => {
    return permissions?.includes("admin");
  };

  return (
    <header
      className={`text-slate-400 flex justify-between items-center ml-4 mt-4 border-b-2 pb-2`}
    >
      <div className={`flex-shrink-0`}>
        <NavLink to="/">
          <FontAwesomeIcon icon={faScrewdriverWrench} className={`fa-2x`} />
          <span className={`text-2xl font-semibold pl-2`}>React Tools</span>
        </NavLink>
      </div>
      <nav
        className={`flex overflow-x-hidden mr-4 font-semibold text-slate-600 hover:text-slate-900`}
      >
        <NavLink
          to="products"
          className={({ isActive }) => `${isActive ? "text-slate-900" : "text-default"} mr-4`}
        >
          Products
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) => `${isActive ? "text-slate-900" : "text-default"} mr-4`}
        >
          Contact Us
        </NavLink>
        {renderAdminLink() && (
          <NavLink
            to="admin"
            className={({ isActive }) => `${isActive ? "text-slate-900" : "text-default"} mr-4`}
          >
            Admin
          </NavLink>
        )}
        <button
          type="submit"
          className="px-6 h-10 font-semibold bg-black text-white"
          onClick={handleSignInClick}
          disabled={loading}
        >
          {getButtonText()}
        </button>
      </nav>
    </header>
  );
}

export default Header;
