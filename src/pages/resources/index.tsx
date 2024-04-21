import { SectionHeader } from "../../components/header";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router";
import NavigationBar from "../../components/navigation-bar";
import Container from "../../components/container";

function Resources() {
    const navigate = useNavigate();
    const resources = [
        {
            label: "Youtube Recommendations",
            href: ROUTES.YOUTUBE,
            internal: true,
            description:
                "A curated lists of YouTube channels that I recommend for different topics including technology, philosophy, science and more.",
        },
        {
            label: "Readings/Videos",
            href: ROUTES.READINGS,
            internal: true,
            description: "Some of the articles/videos that left a huge impact on me.",
        },
        {
            label: "Epistemology Notes",
            href: "https://justin-cheah-portfolio.notion.site/011277958bc7401c8f06d7eb82c75190?v=32060027bff940b29e018d4e02b5556c",
            internal: false,
            description: "Notes for the Knowledge and Inquiry A-Level subject, mainly in episemology.",
        },
    ];

    return (
        <div>
            <NavigationBar />
            <Container>
                <SectionHeader text="Here are some of my resources" />
                {resources.map((resource, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 mb-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    >
                        <h2 className="text-xl font-semibold text-blue-600">{resource.label}</h2>
                        <p className="text-gray-600 mt-2">{resource.description}</p>
                        {resource.internal ? (
                            <button
                                onClick={() => navigate(resource.href)}
                                className="mt-2 text-blue-500 hover:underline"
                            >
                                Explore
                            </button>
                        ) : (
                            <a
                                href={resource.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-blue-500 hover:underline"
                            >
                                Visit
                            </a>
                        )}
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default Resources;
