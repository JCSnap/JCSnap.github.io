function Readings() {
    const readings = [
        {
            title: "How to Learn to Code",
            link: "https://www.youtube.com/watch?v=4b33NTAuF5E",
        },
        {
            title: "How to Learn to Code (Part 2)",
            link: "https://www.youtube.com/watch?v=3JluqTojuME",
        },
        {
            title: "How to Learn to Code (Part 3)",
            link: "https://www.youtube.com/watch?v=3JluqTojuME",
        },
    ];

    return (
        <div>
            <h1>Readings/Videos</h1>
            <ul>
                {readings.map((reading) => (
                    <li key={reading.link}>
                        <a href={reading.link} className="text-blue-500 hover:underline">
                            {reading.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Readings;
