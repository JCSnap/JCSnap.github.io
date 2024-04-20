import NavigationBar from "../components/navigation-bar";
import { SectionHeader } from "../components/header";

interface Channel {
    name: string;
    description: string;
    rating?: number;
}

type Recommendations = {
    [category: string]: Channel[];
};

function Youtube() {
    const recommendations: Recommendations = {
        Tech: [
            {
                name: "ByteByteGo",
                description: "Short form content on system design and software architecture.",
                rating: 3,
            },
            {
                name: "StatQuest with Josh Starmer",
                description: "Statistics and machine learning concepts explained intuitively with animations.",
                rating: 4,
            },
            {
                name: "CodeAesthetic",
                description: "Good animation on software engineering opinions.",
                rating: 4,
            },
            {
                name: "Computerphile",
                description: "Computer science concepts explained by experts.",
                rating: 3,
            },
            {
                name: "Code Bullet",
                description: "Entertaining AI and game development.",
                rating: 3,
            },
            {
                name: "ThePrimeagen",
                description: "Opinions on tech stuff.",
                rating: 4,
            },
            {
                name: "Zach Star",
                description: "Not really tech but he does have some interesting videos on math ish stuff.",
                rating: 4,
            },
        ],
        Movies: [
            {
                name: "NerdExplains",
                description: "How to beat [insert horror movie here] videos.",
                rating: 4,
            },
        ],
        Philosophy: [
            {
                name: "Exurb1a",
                description: "A mix of humor and existential dread, some videos are thought provoking",
                rating: 5,
            },
            {
                name: "melodysheep",
                description: "Not exactly philosophy but the music and visuals do provoke some thought.",
                rating: 4,
            },
            {
                name: "Philosophy Battle",
                description: "A very small channel but it provides very in depth analysis of epistemology.",
                rating: 3,
            },
            {
                name: "Pursuit of Wonder",
                description: "Touches on a lot of very deep topics through nice visuals and storytelling.",
                rating: 5,
            },
            {
                name: "Philosophy Tube",
                description:
                    "More 'talk in the camera' style and slightly political, with long commentary on controversial topics.",
                rating: 3,
            },
            {
                name: "Dictionary of Obscure Sorrows",
                description: "Short videos on interesting words that describe undescribable feelings.",
                rating: 3,
            },
            {
                name: "Jeffrey Kaplan",
                description: "Talk to the camera style, more technical",
                rating: 3,
            },
            {
                name: "Carneades.org",
                description: "In depth analysis of philosophical concepts.",
                rating: 2,
            },
        ],
        Economics: [
            {
                name: "Economics Explained",
                description: "Touches on real world economics and explains concepts in a simple way.",
                rating: 3,
            },
            {
                name: "PolyMatter",
                description: "Similar to Economics Explained.",
                rating: 3,
            },
            {
                name: "The Plain Bagel",
                description: "A 'genuine' perspective on economics and finance.",
                rating: 3,
            },
            {
                name: "Johny Harris",
                description: "Journalism with good visuals and storytelling, can be a bit political.",
                rating: 3,
            },
            {
                name: "RealLifeLore",
                description: "Touches on real world economics and explains concepts in a simple way.",
                rating: 4,
            },
            {
                name: "Vox",
                description: "High quality production and storytelling, can be a bit political.",
                rating: 4,
            },
            {
                name: "CGP Grey",
                description: "Not really 'economic' but he does have some interesting adjacent videos in the past.",
                rating: 4,
            },
            {
                name: "The Rest Of Us",
                description: "Economics concepts (and other adjacent stuff) explained.",
                rating: 3,
            },
        ],
        History: [
            {
                name: "Sam O'Niella Academy",
                description: "Comedy and history with unique 'GradeAUnderA' style animations.",
                rating: 4,
            },
            {
                name: "Simple History",
                description: "Simple animations and explanations of historical events.",
                rating: 3,
            },
            {
                name: "BazBattles",
                description: "Animated commentary of battles, with visualizations of battle formations.",
                rating: 4,
            },
            {
                name: "Extra History",
                description: "Cartoon style animated history lessons, with a focus on storytelling.",
                rating: 4,
            },
            {
                name: "Historia Civilis",
                description: "Animated commentary of Roman battles and politics.",
                rating: 5,
            },
            {
                name: "Kings and Generals",
                description: "Animated commentary of battles and politics.",
                rating: 4,
            },
            {
                name: "Invicta",
                description: "Animated commentary of ancient battles and politics.",
                rating: 4,
            },
            {
                name: "Military History Visualized",
                description: "Focused on military history such as battle strategies, logistics etc.",
                rating: 4,
            },
            {
                name: "OverSimplified",
                description: "Comedy and history with simple animations.",
                rating: 4,
            },
            {
                name: "AlternateHistoryHub",
                description: "Alternate history scenarios with animations.",
                rating: 4,
            },
        ],
        "Science and Engineering": [
            {
                name: "Veritasium",
                description: "",
                rating: 3,
            },
            {
                name: "Vsauce",
                description: "",
                rating: 5,
            },
            {
                name: "Kurzgesagt",
                description: "",
                rating: 5,
            },
            {
                name: "SmarterEveryDay",
                description: "",
                rating: 3,
            },
            {
                name: "Real Engineering",
                description: "",
                rating: 4,
            },
            {
                name: "Primer",
                description: "",
                rating: 4,
            },
            {
                name: "3Blue1Brown",
                description: "Visualizing math concepts using nice animations intuiatively.",
                rating: 5,
            },
            {
                name: "collinfurze",
                description: "Crazy guy building crazy stuff in his backyard.",
                rating: 4,
            },
            {
                name: "minutephysics",
                description:
                    "Interesting animated explanations on common science questions that we don't really know the answers to.",
                rating: 4,
            },
            {
                name: "MinuteEarth",
                description: "Similar to minutephysics.",
                rating: 3,
            },
            {
                name: "PBS Eons",
                description: "Focusing on the history of ancient life on Earth (dinosaur, evolution and stuff).",
                rating: 3,
            },
            {
                name: "Stuff Made Here",
                description: "Guy building cool stuff.",
                rating: 4,
            },
            {
                name: "Tom Scott",
                description: "Unique videos.",
                rating: 4,
            },
            {
                name: "Adam Savage's Tested",
                description: "Also a cool guy building cool stuff.",
                rating: 4,
            },
            {
                name: "AsapSCIENCE",
                description: "Interesting science questions answered.",
                rating: 3,
            },
            {
                name: "Arvin Ash",
                description: "Intuitive explanations of physics concepts.",
                rating: 4,
            },
        ],
    };

    const renderStars = (rating: number) => {
        return `${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;
    };

    return (
        <div>
            <NavigationBar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader text="Youtube Recommendations" />
                {Object.entries(recommendations).map(([category, channels]) => (
                    <div key={category} className="mb-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{category}</h2>
                        {channels.map((channel) => (
                            <p className="text-gray-800">
                                <strong>{channel.name}:</strong> {channel.description}{" "}
                                {channel.rating && (
                                    <span className="text-yellow-400 text-lg">{renderStars(channel.rating)}</span>
                                )}
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Youtube;
