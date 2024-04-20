import NavigationBar from "../../components/navigation-bar";
import { SectionHeader } from "../../components/header";
import Container from "../../components/container";

function Experiences() {
    const experiences = [
        {
            title: "Incoming Software Engineer Intern",
            company: "Kleep",
            duration: "August 2024 - December 2024",
            location: "Paris, France",
            description: (
                <>
                    Will be working on the software supporting Kleep's size recommendation AI. What better location to
                    work with tech and fashion than in <strong>Paris</strong>.
                </>
            ),
        },
        {
            title: "Incoming Software Engineer Intern",
            company: "Krutrim",
            duration: "May 2024 - August 2024",
            location: "Singapore",
            description: <>Will be working on the infrastructure supporting the AI development.</>,
        },
        {
            title: "Software Engineer Intern",
            company: "NUS Enterprise MVP Studio",
            duration: "August 2023 - May 2024",
            location: "Singapore",
            description: (
                <>
                    Created MVPs for 5 startups, including a crop management app for Singapore's first and only rooftop
                    farming startup, a hazard detection app, an AI biographer, a learning management system from
                    scratch, including architecture and system design, and full stack development across web and mobile
                    platforms.
                </>
            ),
        },
        {
            title: "Software Developer Intern",
            company: "LFG",
            duration: "August 2023 - December 2023",
            location: "Singapore",
            description: (
                <>
                    Helped build features for the LFG{" "}
                    <a
                        href="https://www.lfg.travel/"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        app
                    </a>
                    , contributed to major features such as the social system, auto adding images from Wikimedia,
                    hottest locations section etc.
                </>
            ),
        },
        {
            title: "AI and Software Engineer Intern",
            company: "Codomo",
            duration: "2017 - 2019",
            location: "Singapore",
            description: (
                <>
                    Led the development and integration of the generative AI feature from scratch for 4 different upload
                    types and 6 different question types. Visit the website at{" "}
                    <a
                        href="https://www.rolljak.com/ai"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here
                    </a>{" "}
                    to see the feature in detail.
                </>
            ),
        },
    ];

    return (
        <div>
            <NavigationBar />
            <Container>
                <SectionHeader text="Experiences" />
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold text-blue-600">{exp.title}</h2>
                        <h3 className="text-lg text-gray-700">{exp.company}</h3>
                        <p className="text-sm text-gray-500">
                            {exp.duration} - {exp.location}
                        </p>
                        <p className="text-gray-600 mt-2">{exp.description}</p>
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default Experiences;
