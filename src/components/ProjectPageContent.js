import React from "react";

function ProjectPageContent() {
  const projectData = [
    {
      projectName: "SoulScribe - AI Journaling",
      type: "Cross Platform Mobile Application",
      descriptions: [
        "Created SoulScribe, a gamified AI-powered journaling iOS and Android mobile application with a partner which achieved Artemis (highest achievement) for NUS Orbital",
        "Implemented the frontend with React Native Expo, javascript, tailwindCSS; backend with nodejs, Firebase for authentification, cloud functions and database, Pinecone for vector database",
        "Leverages on libraries such as OpenAI's text-to-text API and Stable Diffusion's text-to-image API for generative AI functions, Langchain for LLM management, Redux for state management",
        "created CI/CD pipeline with Github Actions",
        "deployed mobile application to App Store and Google Play Store",
        "Implemented features such as journaling (where users can earn coins by journaling consistently), recap (where personalized art and highlight are automatically generated based on users' entries every week), shop (where users can buy collectables like characters and pets to customize the appearance of their home page, and art styles for their recap), an AI chatbot for QnAs about the app, and a feature that allows users to ask questions about their past and receive responses (which uses vector embeddings to store and retrieve entries based on semantics)",
        "Documentations can be found at https://tinyurl.com/soulscribeAI",
        "App store: https://apps.apple.com/app/soulscribe-ai-journaling/id6450868996",
        "Play store: https://play.google.com/store/apps/details?id=com.soulscribe.SoulScribe",
        // more contributions...
      ],
    },
    {
      projectName: "Cover",
      type: "Web Application",
      descriptions: [],
    },
  ];

  function ProjectList({ projects }) {
    return (
      <div>
        {projects.map((project, i) => (
          <ProjectItem key={i} {...project} />
        ))}
      </div>
    );
  }

  function ProjectItem({ projectName, type, descriptions }) {
    // Function to check if the text contains a URL
    function isUrl(text) {
      const urlPattern = /https?:\/\/|www\./i;
      return urlPattern.test(text);
    }

    // Function to render description text with potential links
    function renderDescription(description) {
      const urlPattern = /(https?:\/\/[^\s]+)/i; // This pattern will search for http:// or https:// followed by any non-space characters.
      const match = description.match(urlPattern);

      if (match) {
        const url = match[0]; // This will contain the extracted URL
        return (
          <>
            {description.replace(url, "")}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {url}
            </a>
          </>
        );
      }
      return description;
    }

    return (
      <div id="project">
        <hr />
        <div
          id="projectInfo"
          className="d-flex flex-row justify-content-between "
        >
          <p className="font-bold">{projectName}</p>
          <p className="fst-italic">{type}</p>
        </div>
        <ul>
          {descriptions.map((description, i) => (
            <li key={i}>{renderDescription(description)}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className="text-white">
      <h1 className="pt-3 font-bold">Projects</h1>
      <ProjectList projects={projectData} />
    </div>
  );
}

export default ProjectPageContent;
