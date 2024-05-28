import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  return (
    <div className="navbar bg-customPrimary text-white">
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 flex flex-col gap-3 bg-customSecondary"
          >
            <Link to="/dashboard">
              <li className=" bg-customPrimary p-2 w-full">Dashboard</li>
            </Link>
            <Link to="/dashboard/all-products">
              <li className=" bg-customPrimary p-2 w-full">All products</li>
            </Link>
            <Link to="/dashboard/add-products">
              <li className=" bg-customPrimary p-2 w-full">Add products</li>
            </Link>
            <Link to="/">
              <li className=" bg-customPrimary p-2 w-full">Home</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <a className="btn btn-ghost text-xl">Dashboard</a>
      </div>
    </div>
  );
};

export default DashboardNavbar;
