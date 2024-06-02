import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full mt-20 sm:mt-0">
      <div className="bg-white  shadow-md rounded-3xl px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 ">Welcome Back!</h1>
        <form action="#">
          <div className="mb-4">
            <label
              for="email"
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
            />
          </div>
          <div className="mb-4">
            <label
              for="password"
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
