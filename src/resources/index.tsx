import { SectionHeader } from "../components/header";
import { ROUTES } from "../constants/routes";
import { useNavigate } from "react-router";
import NavigationBar from "../components/navigation-bar";

function Resources() {
    const navigate = useNavigate();
    const tabs = [
        {
            label: "Youtube Recommendations",
            href: ROUTES.YOUTUBE,
        },
        {
            label: "Readings/Videos",
            href: ROUTES.READINGS,
        },
    ];

    return (
        <div>
            <NavigationBar />
            <SectionHeader text="Here are some of my resources" />
            <ul>
                {tabs.map((tab) => (
                    <li key={tab.label}>
                        <button onClick={() => navigate(tab.href)} className="text-blue-500 hover:underline">
                            {tab.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Resources;
