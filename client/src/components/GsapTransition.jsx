import { useRef, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import gsap from "gsap";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SellerDashboard from "../pages/SellerDashboard";
import BuyerDashboard from "../pages/BuyerDashboard";

const GsapTransition = () => {
  const location = useLocation();
  const nodeRef = useRef(null);

  useEffect(() => {
    if (nodeRef.current) {
      gsap.fromTo(nodeRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });
    }
  }, [location]);

  return (
    <div ref={nodeRef}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/seller/profile" element={<SellerDashboard />} />
        <Route path="/buyer/profile" element={<BuyerDashboard />} />
      </Routes>
    </div>
  );
};

export default GsapTransition;
