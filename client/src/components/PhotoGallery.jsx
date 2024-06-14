import { FaCartShopping } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import ImageCard from "./ImageCard";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../../store/slices/postsSlice";
import { useEffect } from "react";

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

  const dispatch = useDispatch()

  const getAllImages = async () => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "/post/getAll")
    const { data } = await res.data;
    dispatch(setAllPosts(data))
  }

  useEffect(() => { getAllImages() }, [])

  const posts = useSelector((state) => state.posts.allPosts)


  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center ">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-20">
        {posts?.map(({ _id, title, image, price ,author }) => {
          return (
            <ImageCard
              key={_id}
              id={_id}
              title={title}
              img={image}
              price={price}
              author={author}
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
