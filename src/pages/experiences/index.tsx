import NavigationBar from "../../components/navigation-bar";
import { SectionHeader } from "../../components/header";
import Container from "../../components/container";
import { TECHSTACK } from "../../constants/teckstack";
import Link from "../../components/link";

function Experiences() {
    const experiences = [
        {
            title: "Software Engineer",
            company: "ren.",
            duration: "Present",
            location: "Singapore",
            description: (
                <>
                    Personalizing education at scale at <Link href="https://landing.renlearn.app/">ren.</Link>. Currently supported by Block71, NUS Enterprise, SMU Big.
                </>
            ),
            techstack: [],
        },
        {
            title: "Software Engineer Intern",
            company: "Kleep AI",
            duration: "August 2024 - January 2025",
            location: "Paris, France",
            description: (
                <>
                    Worked on the backend of Kleep's size recommendation <Link href="https://www.kleep.ai/">AI</Link>.
                    Spearheaded observability enhancement across all services (logging, monitoring and alert
                    infrastructure). Created robust data integration pipelines to ingest client data and transform them
                    into format that our ML model can understand. Generated insights from millions of rows of data.
                </>
            ),
            techstack: [TECHSTACK.POSTGRES, TECHSTACK.AWS, TECHSTACK.TYPESCRIPT, TECHSTACK.PYTHON],
        },
        {
            title: "Software Engineer Intern",
            company: "Krutrim",
            duration: "May 2024 - August 2024",
            location: "Singapore",
            description: (
                <>
                    Main contributor to the development of the fault-tolerant cloud GPU pod feature (KPod) similar to
                    RunPod on <Link href="https://cloud.olakrutrim.com/">Krutrim Cloud</Link>, writing custom Kubernetes
                    controllers with Golang, Kubernetes CRD, Docker. Wrote multiple microservices (notification, backend
                    for KPod) with Golang, Kafka, PostgreSQL. Worked on LLM quantisation and benchmarking.
                </>
            ),
            techstack: [
                TECHSTACK.GOLANG,
                TECHSTACK.KUBERNETES,
                TECHSTACK.PYTHON,
                TECHSTACK.DOCKER,
                TECHSTACK.POSTGRES,
                TECHSTACK.KAFKA,
            ],
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
            techstack: [
                TECHSTACK.TAILWIND,
                TECHSTACK.TYPESCRIPT,
                TECHSTACK.PYTHON,
                TECHSTACK.DJANGO,
                TECHSTACK.REACT,
                TECHSTACK.REACTNATIVE,
                TECHSTACK.FIREBASE,
                TECHSTACK.JEST,
            ],
        },
        {
            title: "Software Developer Intern",
            company: "LFG",
            duration: "August 2023 - December 2023",
            location: "Singapore",
            description: (
                <>
                    Helped build features for the LFG <Link href="https://www.lfg.travel/">app</Link>, contributed to
                    major features such as the social system, auto adding images from Wikimedia, hottest locations
                    section etc.
                </>
            ),
            techstack: [TECHSTACK.TAILWIND, TECHSTACK.TYPESCRIPT, TECHSTACK.REACT, TECHSTACK.NEXT, TECHSTACK.PRISMA],
        },
        {
            title: "AI and Software Engineer Intern",
            company: "Codomo",
            duration: "May 2023 - August 2023",
            location: "Singapore",
            description: (
                <>
                    Led the development and integration of the generative AI feature from scratch for 4 different upload
                    types and 6 different question types. Visit the website at{" "}
                    <Link href="https://www.rolljak.com/ai">here</Link> to see the feature in detail.
                </>
            ),
            techstack: [TECHSTACK.BOOSTRAP, TECHSTACK.RUBY, TECHSTACK.RAILS, TECHSTACK.JAVASCRIPT, TECHSTACK.JQUERY],
        },
    ];

    return (
        <div>
            <NavigationBar />
            <Container>
                <SectionHeader text="Experiences" />
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6 relative group">
                        <h2 className="text-xl font-semibold text-blue-600">{exp.title}</h2>
                        <h3 className="text-lg text-gray-700">{exp.company}</h3>
                        <p className="text-sm text-gray-500">
                            {exp.duration} - {exp.location}
                        </p>
                        <p className="text-gray-600 mt-2">{exp.description}</p>
                        {exp.techstack.length > 0 && (
                            <div className="absolute inset-0 flex w-full h-1/3 flex-col justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-800 ease-in-out">
                                <p className="text-lg font-semibold mb-2">Tech Stack</p>
                                <div className="flex flex-row flex-wrap justify-center items-center space-x-2">
                                    {exp.techstack.map((tech, i) => (
                                        <span key={i} className="text-gray-800 px-3 py-1 my-1 bg-gray-200 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </Container>
        </div>
    );
}

export default Experiences;
