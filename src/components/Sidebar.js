import React from "react";

const Sidebar = () => {
  const socials = [
    {
      name: "Github",
      url: "https://github.com/JCSnap",
      icon: "fa-brands fa-github",
    },
    {
      name: "LinkedIn",
      url: "www.linkedin.com/in/justin-cheah-yun-fei",
      icon: "fa-brands fa-linkedin",
    },
    {
      name: "Notion",
      url: "https://justin-cheah-portfolio.notion.site/8d1f053d01fc4303a41a21e7ad4de0cd?v=74eaa231efdf40b9a4d61f2cd23715e5&pvs=25",
      icon: "fa-solid fa-book",
    },
  ];

  return (
    <div className="h-200">
      {socials.map((social) => {
        return (
          <div id="socialContainer">
            <ul>
              <li className="d-flex ps-lg-5">
                <a href={social.url} className="no-underline">
                  <i className={`fab ${social.icon}`}></i>
                  <span className="text-grey-300 px-2">{social.name}</span>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
