import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-crimson-red text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">Unfiltered.tv</Link>
        </h1>
        <nav>
          <Link to="/login" className="px-4">Login</Link>
          <Link to="/register" className="px-4">Register</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
