import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerDashboard from "./pages/BuyerDashboard";
import { Provider } from "react-redux";
import { store } from "../store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/seller/profile" element={<SellerDashboard />} />
            <Route paht="/buyer/profile" element={<BuyerDashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
