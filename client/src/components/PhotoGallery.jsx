import { FaCartShopping } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";

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

const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center ">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        {data.map(({ id, title, img, price }) => {
          return (
            <ImageCard
              key={id}
              id={id}
              title={title}
              img={img}
              price={price}
              icon1={
                <FaCartShopping
                  title="Cart"
                  className="text-2xl text-black cursor-pointer hover:scale-110 transition-all ease-linear duration-300"
                />
              }
              icon2={
                <IoIosHeart
                  title="Favourite"
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

export default PhotoGallery;
