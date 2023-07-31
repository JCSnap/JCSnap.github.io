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
        <div className="col-lg-3 col-md-3 d-none d-md-block">
          <Sidebar className="d-flex col-3" />
        </div>
        <div className="col-lg-6 col-md-9 col-sm-12">
          <HomePageContent />
        </div>
        <div className="col-lg-3 d-lg-block d-none">
          <HomePageTableOfContents />
        </div>
      </div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
