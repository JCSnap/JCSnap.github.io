import { SectionHeader } from "../../../components/header";

function Modules() {
    const modules = [
        {
            semester: "AY2022/2023 Semester 1",
            modules: [
                "CS1101S Programming Methodology",
                "CS1231 Discrete Structures",
                "MA2001 Linear Algebra I",
                "BSP1702 Legal Environment of Business",
                "BSP1703 Managerial Economics",
                "IS1108 Digital Ethics and Data Privacy",
                "BPM1705 Understanding How Business Works",
            ],
        },
        {
            semester: "AY2022/2023 Semester 2",
            modules: [
                "CS2040S Data Structures and Algorithms",
                "CS2030S Programming Methodology II",
                "GEA1000 Quantitative Reasoning with Data",
                "MA1521 Calculus for Computing",
                "MKT1705 Principles of Marketing",
                "MNO1706 Organisational Behaviour",
                "ACC1701 Accounting for Decision Makers",
            ],
        },
        {
            semester: "AY2023/2024 Semester 1",
            modules: [
                "CS2100 Computer Organisation",
                "CS2103T Software Engineering",
                "CS2109S Introduction to AI and Machine Learning",
                "ES2660 Communicating in the Information Age",
                "CP2106 Independent Software Development Project (Orbital)",
                "CS2101 Effective Communication for Computing Professionals",
                "MNO2705 Leadership and Decision Making Under Uncertainty",
                "BPM1701 Calculus and Statistics",
                "BPM1702 Microsoft Excel and Powerpoint for Business",
            ],
        },
        {
            semester: "AY2023/2024 Semester 2",
            modules: [
                "CS2105 Introduction to Computer Networks",
                "CS3217 Software Engineering on Modern Application Platforms",
                "ST2334 Probability and Statistics",
                "FIN2704 Finance",
                "BSP2701 Global Economy",
                "GESS1029 Everyday Ethics in Singapore",
            ],
        },
    ];

    return (
        <div>
            <SectionHeader text="Modules" />
            {modules.map((semester, index) => (
                <div key={index} className="mb-4">
                    <h2 className="text-xl font-semibold text-blue-600">{semester.semester}</h2>
                    <ul>
                        {semester.modules.map((module, index) => (
                            <li key={index} className="text-gray-600 mt-2">
                                {module}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Modules;
