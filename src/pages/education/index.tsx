import NavigationBar from "../../components/navigation-bar";
import { SectionHeader } from "../../components/header";
import Container from "../../components/container";
import EducationSummary from "./components/education-summary";

import Modules from "./components/modules";
import SchoolActivities from "./components/school-activities";

function Education() {
    return (
        <h1>
            <NavigationBar />
            <Container>
                <SectionHeader text="Education" />
                <EducationSummary />
                <Modules />
                <SchoolActivities />
            </Container>
        </h1>
    );
}

export default Education;
