import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [icon, setIcon] = useState(true);

  const [user] = useAuthState(auth);
  useEffect(() => {
    console.log(user);
  }, [user]);

  // signout
  const logout = () => {
    signOut(auth);
  };
  return (
    <div>
      {/* mobile navbar */}
      <div className="w-10/12 mx-auto md:hidden block py-2">
        <div className="flex justify-between items-center">
          <Link to="/home" className="font-bold text-xl">
            Taka Online
          </Link>

          <GiHamburgerMenu
            className={`cursor-pointer ${icon ? "block" : "hidden"}`}
            onClick={() => setIcon(false)}
          ></GiHamburgerMenu>
          <GiCancel
            className={`cursor-pointer ${icon ? "hidden" : "block"}`}
            onClick={() => setIcon(true)}
          ></GiCancel>
        </div>

        <div
          className={`${
            icon ? "hidden" : "flex"
          } flex-col bg-red-200 rounded-md`}
        >
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>

      {/*===========  desktop navbar ========== */}
      <div className={`hidden md:flex w-10/12 mx-auto justify-between py-5`}>
        <Link to="/home" className="font-bold text-xl">
          Taka Online
        </Link>
        <div className="flex justify-around md:basis-1/3 font-semibold ">
          <Link to="/">Home</Link>

          {user ? (
            <button className="font-semibold" onClick={logout}>
              Sign Out
            </button>
          ) : (
            <div>
              <Link to="/login" className="font-semibold mr-4">
                Login
              </Link>

              <Link to="/signup" className="font-semibold">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
