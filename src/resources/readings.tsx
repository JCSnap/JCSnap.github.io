import NavigationBar from "../components/navigation-bar";
import { SectionHeader } from "../components/header";
import Container from "../components/container";
import Link from "../components/link";

enum READING_TYPE {
    BOOK = "book",
    ARTICLE = "article",
    VIDEO = "video",
}

function getTagStyles(type: READING_TYPE) {
    switch (type) {
        case READING_TYPE.BOOK:
            return { label: "Book", bgColor: "bg-green-500" };
        case READING_TYPE.ARTICLE:
            return { label: "Article", bgColor: "bg-blue-500" };
        case READING_TYPE.VIDEO:
            return { label: "Video", bgColor: "bg-red-500" };
        default:
            return { label: "", bgColor: "bg-gray-500" };
    }
}

function Readings() {
    const readings = [
        {
            title: "The Machine",
            href: "https://www.youtube.com/watch?v=3DhNjtLivdg&t=209s",
            description: "A thought experiment that challenges the idea of what it means to be human.",
            type: READING_TYPE.VIDEO,
        },
        {
            title: "How to Be Correct About Everything All the Time",
            description: "A humorous take on ignorance, and how it is okay to not know everything.",
            href: "https://youtu.be/DJiGuFCzaFo?si=bgaVTwyNC3EdlUra",
            type: READING_TYPE.VIDEO,
        },
        {
            title: "The Discovery of Fire",
            description: "A cinematic video on human progress. It makes me proud to be a human.",
            href: "https://www.youtube.com/watch?v=ygRNEy8mPjk",
            type: READING_TYPE.VIDEO,
        },
        {
            title: "CURIOSITY - Featuring Richard Feynman",
            description: "A video that makes me want to learn more for the sake of learning.",
            href: "https://www.youtube.com/watch?v=UjEngEpiJKo",
            type: READING_TYPE.VIDEO,
        },
    ];
    return (
        <div>
            <NavigationBar />
            <Container>
                <SectionHeader text="Readings/Videos" />
                {readings.map((reading, index) => {
                    const tag = getTagStyles(reading.type);
                    return (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 mb-6 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-blue-600 flex items-center">
                                <span
                                    className={`inline-block ${tag.bgColor} text-white px-2 py-1 text-sm rounded mr-2`}
                                >
                                    {tag.label}
                                </span>
                                {reading.title}
                            </h2>
                            <p className="text-gray-600 mt-2">{reading.description}</p>
                            <Link href={reading.href}>Visit</Link>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default Readings;
