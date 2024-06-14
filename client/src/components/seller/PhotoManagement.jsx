import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import ImageCard from "../ImageCard"
import ImageAdd from "./ImageAdd";
import DashboardHeader from "../DashboardHeader";
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import toast from "react-hot-toast";
import { setAnalytics, setMyPosts } from "../../../store/slices/postsSlice";
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
const PhotoManagement = () => {

  const posts = useSelector((state) => state.posts.myPosts)
  const dispatch = useDispatch()

  const getMyPosts = async () => {
    try {
      if (posts.length > 0) return
      const res = await axios.get(import.meta.env.VITE_API_URL + "/post/myPosts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken")
        }
      })
      const { data } = await res.data;
      dispatch(setMyPosts(data))

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    getMyPosts()
  }, [])





  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <DashboardHeader />
        <ImageAdd />
      </div>

      {/* SECTION WHERE ALL THE IMAGES ARE DISPLAYED */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5 bg-transparent sm:bg-white  p-5 w-[90vw] sm:w-[55vw] sm:h-[95vh]  sm:overflow-y-scroll rounded-lg mx-auto sm:mx-0">
        {posts?.map(({ _id, title, image, author, price }) => {
          return (
            <ImageCard
              key={_id}
              id={_id}
              title={title}
              img={image}
              author={author}
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
