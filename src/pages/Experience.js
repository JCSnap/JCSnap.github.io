import React from "react";
import ExperiencePageContent from "../components/ExperiencePageContent";
import Sidebar from "../components/Sidebar";

const Experience = () => {
  return (
    <div className="overflow-y-scroll hero-unit h-1000 bg-main">
      <div id="contentContainer" className="d-flex flex-row mt-2">
        <div className="col-lg-3 col-md-3 d-none d-md-block">
          <Sidebar />
        </div>
        <div className="col-lg-6 col-md-9 col-sm-12">
          <div className="px-3">
            <ExperiencePageContent showContactInfo={true} />
          </div>
        </div>
        <div className="col-lg-3 d-lg-block d-none"></div>
      </div>
      <h1>Home</h1>
    </div>
  );
};

export default Experience;
