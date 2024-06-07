import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, } from "react"

const Signup = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")
  const [accountType, setAccountType] = useState("buyer")


  const handleSignup = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(import.meta.env.VITE_API_URL + "/signup", { username, email, password, accountType })
      const data = await res.data;
      if (data.success === false) {
        alert(data.message)
      }
      else {
        setUsername("")
        setEmail("")
        setPassword("")
        setAccountType("")
        alert(data.message)
        navigate("/login")
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full mt-20 sm:mt-10 ">
      <div className="bg-white  shadow-md rounded-3xl px-8 py-6 w-full  sm:w-[27vw]">
        <h1 className="text-2xl font-bold text-center mb-4 ">Let&apos;s Connect!</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700  mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              placeholder="coder29"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700  mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              placeholder="your@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700  mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="accountType"
              className="block text-sm font-medium text-gray-700  mb-2"
            >
              Select Your Account Type
            </label>
            <select onChange={(e) => setAccountType(e.target.value)} className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black">
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          <div className="flex items-center justify-end mb-4">
            <Link
              to="/login"
              className="text-xs text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Log In With Account
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
