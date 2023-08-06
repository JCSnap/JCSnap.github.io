import React from "react";
import ProjectPageContent from "../components/ProjectPageContent";
import Sidebar from "../components/Sidebar";

const Projects = () => {
  return (
    <div className="overflow-y-scroll hero-unit h-1000 bg-main">
      <div id="contentContainer" className="d-flex flex-row mt-2">
        <div className="col-lg-3 col-md-3 d-none d-md-block">
          <Sidebar />
        </div>
        <div className="col-lg-6 col-md-9 col-sm-12">
          <ProjectPageContent />
        </div>
        <div className="col-lg-3 d-lg-block d-none"></div>
      </div>
      <h1>Home</h1>
    </div>
  );
};

export default Projects;
