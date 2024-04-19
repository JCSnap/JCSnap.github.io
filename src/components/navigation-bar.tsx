import { ROUTES } from "../constants/routes";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function NavigationBar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [activeTab, setActiveTab] = useState(pathname);

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
            label: "Resources",
            href: ROUTES.RESOURCES,
        },
    ];

    return (
        <nav>
            <ul className="flex pl-2">
                {tabs.map((tab) => (
                    <li key={tab.label} className="pr-4">
                        <button
                            onClick={() => navigate(tab.href)}
                            className={`text-xl ${
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
