import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to='/'>
      <h1 className="text-center text-warning mt-3 mb-4">Coinstar</h1>
    </Link>
  );
};

export default Header;
