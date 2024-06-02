import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 ${
        pathname === "/seller/profile" || pathname === "/buyer/profile"
          ? "hidden"
          : "fixed"
      }  top-0 left-0 right-0 bg-white shadow-md gap-1 sm:gap-0 z-30`}
    >
      <Link to={"/"} className="font-bold text-3xl">
        PicPrism
      </Link>
      <ul className="flex gap-5 text-lg font-semibold text-gray-400">
        <Link to={"/"} className="hover:text-black cursor-pointer sm:p-2">
          About
        </Link>
        <Link to={"/"} className="hover:text-black cursor-pointer sm:p-2">
          Contact
        </Link>
        <Link to={"/login"} className="hover:text-black cursor-pointer sm:p-2">
          Log In
        </Link>
        <Link to={"/signup"} className="hover:text-black cursor-pointer sm:p-2">
          Sign Up
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
