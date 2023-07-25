import React from "react";
import Introduction from "../components/Introduction";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="overflow-y-scroll hero-unit h-1000 bg-main">
      <Introduction />
      <Sidebar />
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
