import React, { useState, useEffect } from "react";
import Orders from "../components/Orders";
import PhotoManagement from "../components/PhotoManagement";
import SellerSidebar from "../components/SellerSidebar";
import Analytics from "../components/Analytics";
import { useSelector } from "react-redux";

const SellerDashboard = () => {
  const tab = useSelector((state) => state.nav.tab);
  const [isBooting, setIsBooting] = useState(false);
  const [currentTab, setCurrentTab] = useState(tab);

  useEffect(() => {
    if (currentTab !== tab) {
      setIsBooting(true);
      setTimeout(() => {
        setIsBooting(false);
        setCurrentTab(tab);
      }, 500); // Adjust the duration as needed
    }
  }, [tab, currentTab]);

  const renderComponent = () => {
    switch (currentTab) {
      case "photos-management":
        return <PhotoManagement />;
      case "orders":
        return <Orders />;
      case "analytics":
        return <Analytics />;
      default:
        return <PhotoManagement />;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <SellerSidebar />
      <div
        className={`transition-opacity duration-500 ${
          isBooting ? "opacity-0" : "opacity-100"
        }`}
      >
        {renderComponent()}
      </div>
    </div>
  );
};

export default SellerDashboard;