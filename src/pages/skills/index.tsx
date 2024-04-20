import NavigationBar from "../../components/navigation-bar";
import { Container } from "@radix-ui/themes";
import InProgress from "../home/components/in-progress";

function Skills() {
    return (
        <div>
            <NavigationBar />
            <Container>
                <InProgress />
            </Container>
        </div>
    );
}

export default Skills;
