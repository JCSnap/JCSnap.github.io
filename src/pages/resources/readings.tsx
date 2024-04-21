import NavigationBar from "../../components/navigation-bar";
import { SectionHeader } from "../../components/header";
import Container from "../../components/container";
import Link from "../../components/link";

enum READING_TYPE {
    BOOK = "book",
    ARTICLE = "article",
    VIDEO = "video",
    MOVIES = "movies",
}

function getTagStyles(type: READING_TYPE) {
    switch (type) {
        case READING_TYPE.BOOK:
            return { label: "Book", bgColor: "bg-green-500" };
        case READING_TYPE.ARTICLE:
            return { label: "Article", bgColor: "bg-blue-500" };
        case READING_TYPE.VIDEO:
            return { label: "Video", bgColor: "bg-red-500" };
        case READING_TYPE.MOVIES:
            return { label: "Movies", bgColor: "bg-yellow-500" };
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
        {
            title: "The Pig that Wants to be Eaten",
            description:
                "A collection of thought experiments that challenge your beliefs. There are some very interesting ones in here. I have lent and recommended this book to many friends in the past.",
            href: "https://dokumen.pub/the-pig-that-wants-to-be-eaten-and-99-other-thought-experiments-new-ed-1862078556-9781862078550.html",
            type: READING_TYPE.BOOK,
        },
        {
            title: "What If English Were Phonetically Consistent?",
            description:
                "An interesting gem of a video that delves into the phenoetics of the English language that gets better and better as the video progresses.",
            href: "https://www.youtube.com/watch?v=A8zWWp0akUU&list=LL&index=119",
            type: READING_TYPE.VIDEO,
        },
        {
            title: "Every Person Is One Choice Away From Everything Changing",
            description: "A perspective of making the 'right' choice through the lens of a story.",
            href: "https://youtu.be/x18bXxW3yhY?si=wTBe5ExyVb1kZUU-",
            type: READING_TYPE.VIDEO,
        },
        {
            title: "Does math belong in the courtroom?",
            description: "A perspective of how convincing statistics can be misused.",
            href: "https://youtu.be/wgWNtlz-2vM?si=-6VpP5r3CTqGm2Z8",
            type: READING_TYPE.VIDEO,
        },
    ];
    return (
        <div>
            <NavigationBar />
            <Container>
                <SectionHeader text="These resources impact the way I think" />
                {readings.map((reading, index) => {
                    const tag = getTagStyles(reading.type);
                    return (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg p-6 mb-2 cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        >
                            <h2 className="text-xl font-semibold text-blue-600 flex items-center">
                                <span
                                    className={`inline-block ${tag.bgColor} text-white px-2 py-1 text-sm rounded mr-2 w-16 flex justify-center`}
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
