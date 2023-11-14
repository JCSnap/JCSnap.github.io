import React from "react";

function HomePageTableOfContents() {
  // Define the sections in an array
  const sections = [
    { id: "aboutMe", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    // Add more sections here as needed
  ];

  return (
    <div id="tableOfContent" className="sticky-top">
      <h4 className="text-white px-3 text-xl-start">Table of Contents</h4>
      <ul>
        {sections.map((section) => (
          <li key={section.id} className="py-1">
            <a className="text-white" href={`#${section.id}`}>
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePageTableOfContents;
