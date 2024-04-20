function EducationSummary() {
    const education = [
        {
            title: "Bachelor of Computing in Computer Science",
            institution: "National University of Singapore (NUS)",
            duration: "August 2022 - May 2026",
            location: "Singapore",
            description: (
                <>
                    Awarded the NUS ASEAN Undergraduate Scholarship. Tentative specialisations include{" "}
                    <strong>Artificial Intelligence</strong>, <strong>Networking and Distributed Systems</strong>.
                </>
            ),
        },
        {
            title: "Bachelor of Business Administration",
            institution: "National University of Singapore (NUS)",
            duration: "August 2022 - May 2026",
            location: "Singapore",
            description: (
                <>
                    This is my second degree, I took modules ranging from accounting, marketing, finance, operations and
                    will (probably) be specialising in <strong>Finance</strong>.
                </>
            ),
        },
        {
            title: "A-Levels",
            institution: "Hwa Chong Institution",
            duration: "January 2016 - December 2021",
            location: "Singapore",
            description: (
                <>
                    Was in the humanities programme through high school and took{" "}
                    <strong>H2 Economics, H2 Math, H2 Physics, H2 Knowledge Inquiry (Philosophy)</strong> in junior
                    college. This is where I developed my interest in philosophy.
                </>
            ),
        },
    ];

    return (
        <div>
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
        </div>
    );
}

export default EducationSummary;
