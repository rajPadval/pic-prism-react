import { useState } from "react";

const ImageAdd = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="p-5 bg-white mx-8 rounded-2xl shadow-md ">
      <h2 className="text-xl font-bold ">Add New Product</h2>
      <form className="grid grid-cols-1 gap-2  my-4">
        <img
          src={`${
            image
              ? URL.createObjectURL(image)
              : "https://dummyimage.in/600x400/d4d4d4/ffffff?text=No%20Image"
          }`}
          alt="this picture"
          className="w-[350px] rounded-lg"
        />
        <div className="flex flex-col ">
          <label htmlFor="image" className="font-bold">
            Image
          </label>
          <input
            onChange={handleImageChange}
            type="file"
            name="image"
            id="image"
            className="rounded-lg border outline-none px-3 py-1 mt-1"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="title" className="font-bold">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="rounded-lg border outline-none px-3 py-1 mt-1"
            placeholder="Beautiful Flower"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="price" className="font-bold">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="rounded-lg border outline-none px-3 py-1 mt-1"
            placeholder="45"
          />
        </div>
        <button
          type="submit"
          className="py-1 px-3 bg-black font-semibold text-white rounded-lg mt-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ImageAdd;
