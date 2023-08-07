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
      projectName: "Stock Trading Bot",
      type: "Machine Learning Project",
      descriptions: [
        "Created a stock trading programme in Python for the Huawei Innovation Challenge 2022 using machine learning to process 80GB of past stock data to make predictions to trade stocks",
        "Leverages on libraries such as sklearn for it's decision tree regressor, pandas for data processing, numpy for matrix operations",
        "Created shell scripts to automate the process of validating the model and comparing the profit of different strategies with the base model",
        "More information can be found at: https://justin-cheah-portfolio.notion.site/Trading-Model-8b92af1ce98044c9a7bf80fa4bad9816?pvs=4",
        "Github repository: https://github.com/JCSnap/Huawei-trading-model",
      ],
    },
    {
      projectName: "AI Cover Letter Bot",
      type: "Telegram bot",
      descriptions: [
        "Created a Telegram bot in Python that allows users to generate personalized cover letters for job applications by just typing in the company name",
        "Leverages on libraries such as python-telegram-bot to create interface for the telegram bot, Google Search API to search about company information, Beautiful Soup to web scrap details about the company, and OpenAI to generate the cover letter",
        "Github repository: https://github.com/JCSnap/coverletterbot",
      ],
    },
    {
      projectName: "Cosmos Auto Clapper",
      type: "Scripting Program",
      descriptions: [
        "Created a program with a graphical interface that allows users to automate various cosmetic processes in the corporate remote workplace app Cosmos",
        "Leverages on libraries such as tkinter to simulate interaction with key presses, and pyautogui for the interface",
        "Features include auto clapping, auto sending of emojis, and auto snowball throwing",
        "It is meant to be a fun project to annoy and have fun with your coworkers in the remote workplace",
        "Github repository: https://github.com/JCSnap/cosmos-auto-clapper",
      ],
    },
    {
      projectName: "Clone Websites and AI Games",
      type: "Web Applications and Python Scripts",
      descriptions: [
        "Recreated half of the fonrtpage of Codomo and Nodeflair with Reactjs, javascript and CSS",
        "Integrated custom features such as an AI chatbot into Codomo's website which answers questions about the company and nothing else",
        "Created custom games with Python and OpenAI's API by integrating generative AI, based on their existing templates on Rolljak",
        "More details can be found here: https://justin-cheah-portfolio.notion.site/Website-clones-a0c9780659054d5087cb7e4aaf156e94?pvs=4",
      ],
    },
    {
      projectName: "Student Deliverhy bot",
      type: "Telegram bot",
      descriptions: [
        "Created a simple telegram bot with a partner that allows students to create orders for selected NUS food stalls, and also for students to take up delivery orders to earn a small fee",
        "This was my first Hackathon project, and also the first time I created a telegram bot (or any project for that matter)",
        "More details can be found here: https://justin-cheah-portfolio.notion.site/Student-DeliveRHy-5eaf0952d28744fdb7695837c67de9d9?pvs=4",
        "Github repository: https://github.com/JCSnap/Student-DeliveRHy-bot",
      ],
    },
    {
      projectName: "Personal Website",
      type: "Web Application",
      descriptions: [
        "Created a personal website with Reactjs, javascript, bootstrap and CSS",
        "Accounted for responsiveness of the website on different screen sizes",
        "For more details, visit the current website you are on now :)",
        "Github repository: https://github.com/JCSnap/JCSnap.github.io",
      ],
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
    <div className="text-white" id="projects">
      <h1 className="pt-3 font-bold">Projects</h1>
      <ProjectList projects={projectData} />
    </div>
  );
}

export default ProjectPageContent;
