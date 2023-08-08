import React from "react";

function ExperiencePageContent({ showContactInfo }) {
  const currentResumePath = "JustinCheahYunFei_resume_August2023_v1.pdf";
  const experienceData = {
    work: [
      {
        companyName: "Codomo Pte Ltd",
        role: "AI and Software Engineer Intern",
        period: "May 2023 - August 2023",
        location: "Singapore",
        contributions: [
          "Integrated OpenAI's API into the backend in Ruby on Rails with Langchain and speahheaded the implementation of Rolljak's AI Question Generator feature from scratch for 7 activity types and 4 upload types which have been pushed to production",
          "Implemented frontend features and UI/UX improvements with javascript, jQuery and Bootstrap",
          "Introduced ways to sanitise user inputs, prevent prompt injection attacks, and improved processing time by 30% by implementing concurrent programming",
          "Improved the accuracy of the results by more than 50% with prompt engineering, and integrating usage of external tools like a calculator and Wikipedia into GPT",
          "Fixed frontend and backend bugs ranging from P1 (severe) to P3 (minor)",
          "Automated workflow such as benchmarking of question generation results by different prompts, and comparison with competitors' results using Python and Selenium",
          "Collaborated with team members in an AGILE environment with SCRUM framework. Exposed to procedures such as reviewing pull requests, sprint planning and review, leading deployment meetings etc",
          "Learn more about the AI feature at https://www.rolljak.com/ai",
          // more contributions...
        ],
      },
      {
        companyName: "Raffles Hall",
        role: "Student Frontend Developer",
        period: "August 2022 - March 2023",
        location: "Singapore",
        contributions: [
          "Collaborated with other frontend developers to maintain Raffles Hall's web application serving more than 700 people by primarily ficing bugs",
          "Implemented frontend components for the Raffles SuperApp in Reactjs, Nextjs, javascript and CSS",
          // more contributions...
        ],
      },
      {
        companyName: "Freelance",
        role: "Private Tutor",
        period: "January 2021 - Present",
        location: "Singapore",
        contributions: [
          "Tutored students in in GCE A-Level H2 Mathematics, H2 Physics, H2 Economics, H2 Knowledge & Inquiry and brought about significant improvements in their grades",
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
          "Test",
          "Test",
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
            <p className="font-bold mb-1">{companyName}</p>
            <p className="fst-italic">{role}</p>
          </div>
          <div id="companyInfoRight " className="flex-col col-6 text-end">
            <p className="mb-1">{location}</p>
            <p className="fst-italic">{period}</p>
          </div>
        </div>
        <ul>
          {contributions.map((contribution, i) => (
            <li key={i}>{renderContribution(contribution)}</li>
          ))}
        </ul>
      </div>
    );
  }

  function renderContribution(contribution) {
    const urlPattern = /(https?:\/\/[^\s]+)/i; // This pattern will search for http:// or https:// followed by any non-space characters.
    const match = contribution.match(urlPattern);

    if (match) {
      const url = match[0]; // This will contain the extracted URL
      return (
        <>
          {contribution.replace(url, "")}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </>
      );
    }
    return contribution;
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

  function Education() {
    return (
      <div id="education">
        <hr />
        <div id="nus">
          <div
            id="educationInfo"
            className="flex-row d-flex justify-content-between"
          >
            <p className="font-bold mb-1">National University of Singapore</p>
            <p className="fst-italic mb-1">2022 - 2026</p>
          </div>
          <div>
            Double Degree in Computer Science and Business Administration
          </div>
        </div>
        <div id="hwach">
          <div
            id="educationInfo"
            className="flex-row d-flex justify-content-between mt-4"
          >
            <p className="font-bold mb-1">Hwa Chong Institution</p>
            <p className="fst-italic mb-1">2016 - 2019</p>
          </div>
          <div>
            Singapore Cambridge GCE A-Level: AAAA/A in H2 Mathematics, H2
            Physics, H2 Knowledge & Inquiry, H2 Economics, H1 Project Work
            90/90RP
          </div>
        </div>
      </div>
    );
  }

  // Use these components in your page like this:

  return (
    <div className="text-white">
      {showContactInfo && (
        <>
          <h1 className="font-bold pb-3">Contact Me</h1>
          <ContactInfo />
        </>
      )}
      <h1 className="font-bold" id="experiences">
        Work Experience
      </h1>
      <ExperienceList experiences={experienceData.work} />
      <h1 className="pt-3 font-bold" id="education">
        Education
      </h1>
      <Education />
    </div>
  );
}

export default ExperiencePageContent;
