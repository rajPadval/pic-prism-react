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
  
const PhotosPurchased = () => {
    return (
        <div>
          <DashboardHeader/>
        </div>
    )
}

export default PhotosPurchased