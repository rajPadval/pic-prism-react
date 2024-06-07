import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { login } from "../../store/slices/authSlice";

const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/login", { email, password })
      const data = await res.data;

      toast.success(data.message)
      dispatch(login(data))
      navigate(`/${data.role}/profile`)

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center w-full mt-20 sm:mt-0">
      <div className="bg-white  shadow-md rounded-3xl px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 ">Welcome Back!</h1>
        <form onSubmit={handleLogin}>
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
            <a
              href="#"
              className="text-xs text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-end mb-4">
            <Link
              to="/signup"
              className="text-xs text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Create Account
            </Link>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
