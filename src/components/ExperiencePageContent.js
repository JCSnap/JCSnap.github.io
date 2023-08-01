import React from "react";

function ExperiencePageContent() {
  const experienceData = {
    work: [
      {
        companyName: "COMPANY A",
        role: "Software Developer Intern",
        period: "Jun 2022 - Aug 2022",
        location: "City, Country",
        contributions: [
          "Developed a key feature in the product",
          "Refactored codebase to improve readability and maintainability",
          // more contributions...
        ],
      },
      {
        companyName: "COMPANY B",
        role: "Software Developer Intern",
        period: "Jun 2021 - Aug 2021",
        location: "City, Country",
        contributions: [
          "Developed a key feature in the product",
          "Refactored codebase to improve readability and maintainability",
          // more contributions...
        ],
      },
      // more work experiences...
    ],
    school: [
      {
        clubName: "Coding Club",
        role: "President",
        period: "Sep 2021 - May 2022",
        location: "City, Country",
        contributions: [
          "Organized weekly coding competitions",
          "Conducted coding bootcamps for beginners",
          // more contributions...
        ],
      },
      // more school experiences...
    ],
  };

  function ExperienceList({ experiences }) {
    return (
      <div>
        {experiences.map((experience, i) => (
          <ExperienceItem key={i} {...experience} />
        ))}
      </div>
    );
  }

  function ExperienceItem({
    companyName,
    role,
    period,
    location,
    contributions,
  }) {
    return (
      <div id="experienceInfo">
        <hr />
        <div id="companyInfo" className="d-flex flex-row">
          <div id="companyInfoLeft" className="flex-col col-6">
            <p className="font-bold">{companyName}</p>
            <p className="fst-italic">{role}</p>
          </div>
          <div id="companyInfoRight" className="flex-col col-6 text-end">
            <p className="">{location}</p>
            <p className="fst-italic">{period}</p>
          </div>
        </div>
        <ul>
          {contributions.map((contribution, i) => (
            <li key={i}>{contribution}</li>
          ))}
        </ul>
      </div>
    );
  }

  // Use these components in your page like this:

  return (
    <div className="text-white">
      <h1>Work Experience</h1>
      <ExperienceList experiences={experienceData.work} />

      <h1>School Experience</h1>
      <ExperienceList experiences={experienceData.school} />
    </div>
  );
}

export default ExperiencePageContent;
