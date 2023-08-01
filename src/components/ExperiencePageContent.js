import React from "react";

function ExperiencePageContent() {
  const currentResumePath = "JustinCheahYunFei_resume_July2023_v1.pdf";
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

  function ContactInfo() {
    return (
      <div id="contactInfo">
        <hr />
        <p>
          Email:{" "}
          <a href="mailto:justinwoody1234@gmail.com" className=" text-white">
            justinwoody1234@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/justin-cheah-yun-fei/"
            className="text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justin Cheah
          </a>
        </p>
        <a href={currentResumePath} download className="btn btn-primary">
          Download Resume
        </a>
      </div>
    );
  }

  // Use these components in your page like this:

  return (
    <div className="text-white px-3">
      <h1 className="font-bold">Contact Me</h1>
      <ContactInfo />
      <h1 className="pt-3 font-bold">Work Experience</h1>
      <ExperienceList experiences={experienceData.work} />

      <h1 className="pt-3 font-bold">School Experience</h1>
      <ExperienceList experiences={experienceData.school} />
    </div>
  );
}

export default ExperiencePageContent;