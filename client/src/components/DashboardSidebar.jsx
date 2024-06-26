import { IoMdPhotos, IoIosHeart } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { FaList } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../../store/slices/navSlice";
import { login, logout } from "../../store/slices/authSlice"
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import toast from 'react-hot-toast'

const DashboardSidebar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const sidebar = useSelector((state) => state.nav.sidebar);
  const tab = useSelector((state) => state.nav.tab);
  const author = useSelector((state) => state.auth.author)

  const switchProfile = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "/switch", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
    const data = await res.data;
    toast.success(data.message)
    dispatch(login(data))
    navigate(`/${data.role}/profile`)
  }

  return (
    <nav
      className={` fixed z-10 ${!sidebar === true
        ? "-translate-x-[500px] sm:translate-x-0"
        : "translate-x-0 "
        }   ease-in-out duration-300  flex sm:static text-lg font-semibold bg-white shadow-lg  flex-col gap-2 w-fit min-h-screen border-t-2  p-3  list-none justify-between items-center `}
    >
      <div>
        <div className="bg-black my-5 w-fit rounded-full py-4 px-6 text-white">
          {author.charAt(0).toUpperCase()}
        </div>
        <div className="flex flex-col gap-2">
          {pathname === "/seller/profile" ?
            <li
              onClick={() => dispatch(setTab("photos-management"))}
              className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex justify-start items-center gap-2 ${tab === "photos-management" && "bg-black text-white"
                }`}
            >
              <IoMdPhotos /> Photos Management
            </li> : <li
              onClick={() => dispatch(setTab("photos-purchased"))}
              className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex justify-start items-center gap-2 ${tab === "photos-purchased" && "bg-black text-white"
                }`}
            >
              <IoMdPhotos /> Photos Purchased
            </li>

          }



          <li
            onClick={() => dispatch(setTab("analytics"))}
            className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex justify-start items-center gap-2 ${tab === "analytics" && "bg-black text-white"
              }`}
          >
            <SiGoogleanalytics /> Analytics
          </li>
          <li
            onClick={() => dispatch(setTab("orders"))}
            className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex justify-start items-center gap-2 ${tab === "orders" && "bg-black text-white"
              }`}
          >
            <FaList /> Orders
          </li>
          <li
            onClick={() => dispatch(setTab("favourites"))}
            className={`w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex justify-start items-center gap-2 ${tab === "favourites" && "bg-black text-white"
              }`}
          >
            <IoIosHeart /> Favourites
          </li>

          <Link to="/" className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex justify-start items-center gap-2">
            <AiFillHome /> Home
          </Link>

          <button className="w-full  px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300   gap-2 border-b-2 border-black text-center uppercase text-sm py-2" onClick={switchProfile}>
            Switch to {pathname === "/seller/profile" ? "buyer" : "seller"}
          </button>
        </div>
      </div>

      <li className=" w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex  gap-2 justify-start items-center" onClick={() => dispatch(logout())}>
        <IoLogOut /> Logout
      </li>
    </nav>
  );
};

export default DashboardSidebar;
