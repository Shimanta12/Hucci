import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div className="navbar font-bold bg-customPrimary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-customSecondary text-white flex flex-col gap-2 items-center"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}

            {user && (
              <div onClick={handleLogout} className="navbar-end">
                <button className="btn px-4 bg-white hover:bg-white hover:scale-110  rounded-none border-none w-full">
                  Logout
                </button>
              </div>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-extrabold italic">Hucci</a>
      </div>
      <div className="navbar-center hidden lg:flex justify-between">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      {user && (
        <div
          onClick={handleLogout}
          className="navbar-end hidden md:flex justify-end"
        >
          <a className="btn bg-customSecondary hover:bg-customSecondary text-white border-none hover:scale-110 w-1/4 rounded-none">
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
