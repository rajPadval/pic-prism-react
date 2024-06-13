import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import ImageCard from "../ImageCard"
import ImageAdd from "./ImageAdd";
import DashboardHeader from "../DashboardHeader";

const data = [
  {
    id: 1,
    title: "Image 1",
    img: "https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 10.99,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Image 2",
    img: "https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 12.99,
    rating: 4.0,
  },
  {
    id: 3,
    title: "Image 3",
    img: "https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 15.99,
    rating: 4.7,
  },
  {
    id: 4,
    title: "Image 4",
    img: "https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 9.99,
    rating: 4.3,
  },
  {
    id: 5,
    title: "Image 5",
    img: "https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 11.99,
    rating: 4.8,
  },
  {
    id: 6,
    title: "Image 6",
    img: "https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 13.99,
    rating: 4.6,
  },
];
const PhotoManagement = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <DashboardHeader />
        <ImageAdd />
      </div>

      {/* SECTION WHERE ALL THE IMAGES ARE DISPLAYED */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-5 bg-transparent sm:bg-white  p-5 w-[90vw] sm:w-[55vw] rounded-lg mx-auto sm:mx-0">
        {data.map(({ id, title, img, price }) => {
          return (
            <ImageCard
              key={id}
              id={id}
              title={title}
              img={img}
              price={price}
              icon1={
                <BiSolidMessageSquareEdit
                  title="Edit"
                  className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
                />
              }
              icon2={
                <MdDelete
                  title="Delete"
                  className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
                />
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotoManagement;
