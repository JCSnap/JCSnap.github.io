import { ROUTES } from "../constants/routes";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function NavigationBar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState(pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tabs = [
        {
            label: "JCSnap",
            href: ROUTES.HOME,
            internal: true,
        },
        {
            label: "Experiences",
            href: ROUTES.EXPERIENCES,
            internal: true,
        },
        {
            label: "Education",
            href: ROUTES.EDUCATION,
            internal: true,
        },
        {
            label: "Projects",
            href: ROUTES.PROJECTS,
            internal: true,
        },
        {
            label: "Skills",
            href: ROUTES.SKILLS,
            internal: true,
        },
        {
            label: "Resources",
            href: ROUTES.RESOURCES,
            internal: true,
        },
        {
            label: "Blog",
            href: "https://jcsnap.github.io/blog/",
            internal: false,
        },
    ];

    const getLabelFromHref = (href: string) => tabs.find((tab) => tab.href === href)?.label;

    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow">
            <button className="text-3xl p-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                &#9776; {/* Hamburger Icon */}
                <span className="ml-4 text-xl md:hidden">{getLabelFromHref(activeTab)}</span>
            </button>
            <ul
                className={`absolute md:relative bg-white shadow w-full md:flex md:pl-2 ${
                    isMenuOpen ? "block" : "hidden"
                }`}
            >
                {tabs.map((tab) => (
                    <li key={tab.label} className="md:pr-4">
                        {tab.internal ? (
                            <button
                                onClick={() => {
                                    navigate(tab.href);
                                    setIsMenuOpen(false);
                                }}
                                className={`w-full text-xl block md:inline-block p-4 ${
                                    tab.href === pathname ? "border-b-2 border-sky-800" : "hover:bg-gray-300"
                                } transition-colors duration-300`}
                            >
                                {tab.label}
                            </button>
                        ) : (
                            <a
                                href={tab.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-xl text-center block md:inline-block p-4 hover:bg-gray-300 transition-colors duration-300 ${
                                    tab.href === pathname ? "border-b-2 border-sky-800" : ""
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {tab.label}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavigationBar;
