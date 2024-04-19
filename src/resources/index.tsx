import { SectionHeader } from "../components/header";
import { ROUTES } from "../constants/routes";
import { useNavigate } from "react-router";

function Resources() {
    const navigate = useNavigate();

    return (
        <div>
            <SectionHeader text="Here are some of my resources" />
            <ul>
                <li>
                    <button onClick={() => navigate(ROUTES.YOUTUBE)} className="text-blue-500 hover:underline">
                        Youtube recommendations
                    </button>
                </li>
                <li>
                    <a href="https://reactjs.org/docs/getting-started.html">React Documentation</a>
                </li>
                <li>
                    <a href="https://tailwindcss.com/docs">Tailwind CSS Documentation</a>
                </li>
            </ul>
        </div>
    );
}

export default Resources;
