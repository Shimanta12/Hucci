import { Link, Outlet } from "react-router-dom";
import DashboardNavbar from "../components/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div>
      <DashboardNavbar />
      <div className="grid grid-cols-12">
        <div className="hidden md:block md:col-span-2 bg-customSecondary text-white font-bold min-h-screen p-4 text-center">
          <ul className="flex flex-col gap-3">
            <Link to="/dashboard">
              <li className=" p-2 w-full shadow-sm hover:bg-customPrimary">
                Dashboard
              </li>
            </Link>
            <Link to="/dashboard/all-products">
              <li className=" p-2 w-full shadow-sm hover:bg-customPrimary">
                All products
              </li>
            </Link>
            <Link to="/dashboard/add-products">
              <li className=" p-2 w-full shadow-sm hover:bg-customPrimary">
                Add products
              </li>
            </Link>
            <Link to="/">
              <li className=" p-2 w-full shadow-sm hover:bg-customPrimary">
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-10 p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
