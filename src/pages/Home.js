import React from "react";
import Introduction from "../components/Introduction";

const Home = () => {
  return (
    <div style={{ height: "1800px" }} className="overflow-y-scroll hero-unit">
      <Introduction />
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;
