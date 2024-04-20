import NavigationBar from "../../../components/navigation-bar";
import Container from "../../../components/container";

function InProgress() {
    return (
        <div>
            <NavigationBar />
            <Container>
                <h1 className="text-3xl font-semibold text-blue-600">This page is in progress</h1>
                <p className="text-gray-600 mt-2">This page is currently in progress, please check back later.</p>
            </Container>
        </div>
    );
}

export default InProgress;
