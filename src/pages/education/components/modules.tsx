import { SectionHeader } from "../../../components/header";
import { modules } from "../data/modules";

function Modules() {
    return (
        <div>
            <SectionHeader text="Modules" />
            {modules.map((semester, index) => (
                <div key={index} className="mb-4">
                    <h2 className="text-xl font-semibold text-blue-600">{semester.semester}</h2>
                    <ul>
                        {semester.modules.map((module, index) => (
                            <li key={index} className="text-gray-600 mt-2">
                                {module}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default Modules;
