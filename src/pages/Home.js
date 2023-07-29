import React from "react";
import Introduction from "../components/Introduction";
import Sidebar from "../components/Sidebar";
import HomePageContent from "../components/HomePageContent";
import HomePageTableOfContents from "../components/HomePageTableOfContents";

const Home = () => {
  return (
    <div className="overflow-y-scroll hero-unit h-1000 bg-main">
      <Introduction />
      <div id="contentContainer" className="d-flex flex-row mt-2">
        <div className="col-3">
          <Sidebar className="d-flex col-3" />
        </div>
        <div className="col-6">
          <HomePageContent />
        </div>
        <div className="col-3">
          <HomePageTableOfContents />
        </div>
      </div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
