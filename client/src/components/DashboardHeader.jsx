import { RiMenu3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/navSlice";
import { IoClose } from "react-icons/io5";

const DashboardHeader = () => {
  const sidebar = useSelector((state) => state.nav.sidebar);
  const author = useSelector((state) => state.auth.author)
  const role = useSelector((state) => state.auth.role)
  const dispatch = useDispatch();

  return (
    <>
      <div className="my-5 mx-8">
        <h1 className="text-3xl font-bold">Hello {author.charAt(0).toUpperCase() + author.slice(1)},</h1>
        <p>Welcome to your {role} dashboard</p>
      </div>

      {/* HAMBURGER ICON JUST FOR THE PHONE */}
      <RiMenu3Fill
        className={`${
          sidebar === true ? "hidden" : "block sm:hidden"
        }   text-3xl absolute top-5 right-5`}
        onClick={() => dispatch(toggleSidebar())}
      />
      <IoClose
        className={`${
          sidebar === true ? "block sm:hidden" : "hidden"
        }  text-3xl absolute top-5 right-5`}
        onClick={() => dispatch(toggleSidebar())}
      />
    </>
  );
};

export default DashboardHeader;
