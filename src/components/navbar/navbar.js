import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ onSearch, cartItemCount }) => {

  const [serachQuery, setSearchQuery] = useState("");

  const handleSubmit = () => {
    if (serachQuery.trim().length) {
      onSearch(serachQuery.trim());
    }
    setSearchQuery("");
  };

  return (
    <>
      <div className="wrapper">
        <header className="container">
          <div className="header py-2">
            <div className="grid">
              <Link to="/" className="link">
                <h1 className="brand">E-commerce</h1>
              </Link>
              <div className="formcontainer">
                <form className="search">
                  <div className="form-control">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={serachQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button
                    className="search-btn"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Search
                  </button>
                </form>
              </div>
              <Link to="/cart" className="link headerCart">
                <img src="./cart.svg" alt="cart" />
                {cartItemCount > 0 && (
                  <div className="cartCounter">
                    {cartItemCount <= 9 ? cartItemCount : "9+"}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export { NavBar };
