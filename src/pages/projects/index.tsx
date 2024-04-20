import NavigationBar from "../../components/navigation-bar";
import { SectionHeader } from "../../components/header";
import Container from "../../components/container";

function Projects() {
    const projects = [
        {
            name: "The Alien That Eats the Carrot",
            description: (
                <>
                    An iOS game similar to Super Mario Bros developed using Swift from scratch", including the Physics
                    Engine, Game Engine and Renderer totalling around 10k lines of codes.
                </>
            ),
        },
        {
            name: "Peggle clone",
            description: <>An iOS clone of the Peggle game created from scratch using Swift and SwiftUI</>,
        },
        {
            name: "SoulScribe",
            description: (
                <>
                    An AI-powered journaling app published to App Store and Play Store. Similar to Spotify Wrapped, It
                    identifies highlights and create personalised AI art. Features and documentations can be found{" "}
                    <a
                        href="https://tinyurl.com/soulscribeai"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        here.
                    </a>
                    . Created using React Native, Javascript, Tailwind, Firebase, Stable Diffusion, OpenAI, Pinecone.
                </>
            ),
        },
        {
            name: "Stock Trading Bot",
            description: (
                <>
                    A stock trading bot that processes 80GB of past stock data to make predictions to trade stocks with
                    decision tree regressor and created shell scripts to automate the process of validating the model
                    and comparing the profit of different strategies.
                </>
            ),
        },
        {
            name: "CLI tools",
            description: (
                <>
                    Created a few commands in Rust for the command line interface to enhance productivity in the
                    terminal, including command to check for file duplicates, command to ask a LLM directly in the
                    terminal, and command to access snippets of other commands
                </>
            ),
        },
        {
            name: "AI Cover Letter Bot",
            description: (
                <>
                    Created a Telegram bot in Python that allows users to generate personalized cover letters for job
                    applications by just typing in the company name. It uses web scraping and LLM.
                </>
            ),
        },
        {
            name: "emoSense",
            description: (
                <>
                    emoSense is an application to help people suffering from Alexithymia (inability to identify and
                    describe emotions) to better understand their emotions (Hackathon winner). It identifies speech in
                    real time, analyse and classify them based on the severity of the Alexithymia chosen, and provides
                    an audio feedback to the user.
                </>
            ),
        },
    ];
    return (
        <div>
            <NavigationBar />
            <Container>
                <SectionHeader text="Projects" />
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-blue-600">{project.name}</h2>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Projects;
