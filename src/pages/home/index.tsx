import Introduction from "./components/introduction";
import NavigationBar from "../../components/navigation-bar";
import Resources from "./components/resources";
import Contacts from "./components/contacts";

function Home() {
    return (
        <div>
            <NavigationBar />
            <Introduction />
            <Resources />
            <Contacts />
        </div>
    );
}

export default Home;
