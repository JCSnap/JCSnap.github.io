import NavigationBar from "../../components/navigation-bar";
import { SectionHeader } from "../../components/header";
import InProgress from "../home/components/in-progress";

function BucketList() {
    return (
        <div>
            <NavigationBar />
            <SectionHeader text="My Bucket List" />
            <InProgress />
        </div>
    );
}

export default BucketList;
