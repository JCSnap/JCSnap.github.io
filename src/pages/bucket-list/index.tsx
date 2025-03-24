import NavigationBar from "../../components/navigation-bar";
import { SectionHeader } from "../../components/header";
import Container from "../../components/container";

function BucketList() {
    let list = [
        {
            title: "Skateboard aronud the Marina Bay Sands area",
            isCompleted: true,
        },
        {
            title: "Overnight cycling around Singapore",
            isCompleted: true,
        },
        {
            title: "Learn a bit of cardistry/sleight of hands",
            isCompleted: true,
        },
        {
            title: "Stay somewhere overnight in NUS that is not a dorm room",
            isCompleted: false,
        },
        {
            title: "Solo travel to a country",
            isCompleted: false,
        },
        {
            title: "Write a blog article explaining a tiktok meme/subculture",
            isCompleted: false,
        },
    ];

    // true will be 1 and false will be 0
    list.sort((a, b) => Number(b.isCompleted) - Number(a.isCompleted));

    return (
        <div>
            <div className="my-8" />
            <NavigationBar />
            <Container>
                <SectionHeader text="My Bucket List" />
                <div className="my-4">
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-lg shadow-md mb-4 cursor-pointer ${
                                item.isCompleted ? "bg-green-100" : "bg-white hover:bg-gray-50"
                            }`}
                        >
                            <h3
                                className={`text-lg font-semibold ${
                                    item.isCompleted ? "text-gray-600 line-through" : "text-gray-900"
                                }`}
                            >
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default BucketList;
