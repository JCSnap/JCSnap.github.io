import NavigationBar from "../../components/navigation-bar";
import { SectionHeader } from "../../components/header";
import Container from "../../components/container";
import Modules from "./components/modules";
import SchoolActivities from "./components/school-activities";

function Education() {
    const education = [
        {
            title: "Bachelor of Computing in Computer Science",
            institution: "National University of Singapore (NUS)",
            duration: "August 2022 - May 2026",
            location: "Singapore",
            description: (
                <>
                    Awarded the NUS ASEAN Undergraduate Scholarship. Tentative specialisations include{" "}
                    <strong>Artificial Intelligence</strong>, <strong>Networking and Distributed Systems</strong>. I was
                    in Raffles Hall in year 1, where I was part of RHDevs. Now, I am in NUS Hackers.
                </>
            ),
        },
        {
            title: "Bachelor of Business Administration",
            institution: "National University of Singapore (NUS)",
            duration: "August 2022 - May 2026",
            location: "Singapore",
            description: (
                <>This is my second degree, I took modules ranging from accounting, marketing, finance, operations.</>
            ),
        },
        {
            title: "Physics, Mathematics, Economics, Knowledge Inquiry (Philosophy)",
            institution: "Hwa Chong Institution",
            duration: "January 2016 - December 2021",
            location: "Singapore",
            description: (
                <>
                    Learnt a lot throughout high school and junior college. I was in the Humanities Programme, and this
                    is where I fell in love with philosophy.
                </>
            ),
        },
    ];

    return (
        <h1>
            <NavigationBar />
            <Container>
                <SectionHeader text="Education" />
                {education.map((edu, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
                        <h2 className="text-xl font-semibold text-blue-600">{edu.title}</h2>
                        <h3 className="text-lg text-gray-700">{edu.institution}</h3>
                        <p className="text-sm text-gray-500">
                            {edu.duration} - {edu.location}
                        </p>
                        <p className="text-gray-600 mt-2">{edu.description}</p>
                    </div>
                ))}
                <Modules />
                <SchoolActivities />
            </Container>
        </h1>
    );
}

export default Education;
