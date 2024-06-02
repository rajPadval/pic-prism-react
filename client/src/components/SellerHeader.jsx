import { RiMenu3Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/navSlice";
import { IoClose } from "react-icons/io5";

const SellerHeader = () => {
  const sidebar = useSelector((state) => state.nav.sidebar);
  const dispatch = useDispatch();

  return (
    <>
      <div className="my-5 mx-8">
        <h1 className="text-3xl font-bold">Hello Raj,</h1>
        <p>Welcome to your seller dashboard</p>
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

export default SellerHeader;
