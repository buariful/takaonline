import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [icon, setIcon] = useState(true);
  const iconChange = () => {
    setIcon(!icon);
  };
  return (
    <div className="w-10/12 mx-auto flex justify-between py-5">
      <Link to="/home" className="font-bold text-xl">
        Taka Online
      </Link>
      <div className="flex justify-around lg:basis-1/3 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/">Courses</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Login/Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
