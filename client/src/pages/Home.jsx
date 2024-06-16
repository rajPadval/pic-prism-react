import toast from "react-hot-toast";
import HeroSection from "../components/HeroSection";
import PhotoGallery from "../components/PhotoGallery";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const handleContextmenu = e => {
      e.preventDefault()
      toast.error('Right click is disabled')
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return () => document.removeEventListener('contextmenu', handleContextmenu)
  }, [])
  return (
    <div className="mt-36 ">
      <HeroSection />
      <PhotoGallery />
    </div>
  );
};

export default Home;
