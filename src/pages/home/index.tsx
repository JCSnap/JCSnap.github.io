import Introduction from "./components/introduction";
import NavigationBar from "../../components/navigation-bar";
import AboutMe from "./components/about-me";
import Contacts from "./components/contacts";

function Home() {
    return (
        <div>
            <NavigationBar />
            <Introduction />
            <AboutMe />
            <Contacts />
        </div>
    );
}

export default Home;
