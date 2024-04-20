import InProgress from "../pages/home/components/in-progress";

enum ReadingType {
    BOOK = "book",
    ARTICLE = "article",
    VIDEO = "video",
}

function Readings() {
    const readings = [
        {
            title: "The Macahine",
            href: "https://www.youtube.com/watch?v=3DhNjtLivdg&t=209s",
            description: "A thought experiment that challenges the idea of what it means to be human.",
            type: ReadingType.VIDEO,
        },
        {
            title: "How to Be Correct About Everything All the Time",
            href: "https://youtu.be/DJiGuFCzaFo?si=bgaVTwyNC3EdlUra",
        },
    ];
    return (
        <div>
            <InProgress />
        </div>
    );
}

export default Readings;
