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
        },
        {
            label: "Experiences",
            href: ROUTES.EXPERIENCES,
        },
        {
            label: "Education",
            href: ROUTES.EDUCATION,
        },
        {
            label: "Projects",
            href: ROUTES.PROJECTS,
        },
        {
            label: "Resources",
            href: ROUTES.RESOURCES,
        },
    ];

    const getLabelFromHref = (href: string) => tabs.find((tab) => tab.href === href)?.label;

    return (
        <nav className="relative">
            <button className="text-3xl p-4 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                &#9776; {/* Hamburger Icon */}
                <span className="ml-4 text-xl md:hidden">{getLabelFromHref(activeTab)}</span>
            </button>
            <ul className={`absolute md:relative bg-white w-full md:flex md:pl-2 ${isMenuOpen ? "block" : "hidden"}`}>
                {tabs.map((tab) => (
                    <li key={tab.label} className="md:pr-4">
                        <button
                            onClick={() => {
                                navigate(tab.href);
                                setIsMenuOpen(false); // Close menu on click
                            }}
                            className={`text-xl block md:inline-block p-4 ${
                                tab.href === activeTab ? "border-b-2 border-sky-800" : "hover:bg-gray-300"
                            } transition-colors duration-300`}
                        >
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavigationBar;
