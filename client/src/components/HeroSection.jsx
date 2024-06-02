const HeroSection = () => {
  return (
    <div className="relative sm:w-[60vw] h-[40vh] overflow-clip sm:rounded-3xl mx-auto shadow-inner flex justify-center items-center">
      <img
        className="w-full object-cover -z-10"
        src={
          "https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <form className="absolute">
        <input
          type="text"
          name="search"
          id="search"
          className=" py-3 px-5 w-[80vw] sm:w-[40vw] border bg-bgColor mx-auto rounded-lg"
          placeholder="Search your image.."
        />
      </form>
    </div>
  );
};

export default HeroSection;
