import { useNavigate } from "react-router";
import { ROUTES } from "../../../constants/routes";
import { SectionHeader } from "../../../components/header";
import Link from "../../../components/link";

function AboutMe() {
    const navigate = useNavigate();
    // youtube recommendation at /resources/youtube
    return (
        <div className="ml-6">
            <SectionHeader text="Here are some of the things I do" />
            <p>
                I code for school and outside of school. You can find my projects on{" "}
                <Link href="https://github.com/JCSnap">GitHub</Link>.
            </p>
            <p>
                I work for different organizations on interesting problems. You can find out more about my work{" "}
                <button onClick={() => navigate(ROUTES.EXPERIENCES)} className="text-blue-500 hover:underline">
                    here
                </button>
                .
            </p>
            <p>
                I am doing a double degree in Computer Science and Business Administration, you can find out more about
                what I study and have studied{" "}
                <button onClick={() => navigate(ROUTES.EDUCATION)} className="text-blue-500 hover:underline">
                    here
                </button>
                .
            </p>
            <p>I teach Physics, Math and Economics for A-Level students.</p>
            <p>I enjoy philosophy, especially in the area of epistemology.</p>
            <p>
                Sometimes I write about philosophy, tech and other random stuff. You can find my blog{" "}
                <a href="https://jcsnap.github.io/blog/" className="text-blue-500 hover:underline">
                    here
                </a>
                .
            </p>
            <p>
                I watch a lot of random stuff, you can find some of my youtube channel recommendations{" "}
                <button onClick={() => navigate(ROUTES.YOUTUBE)} className="text-blue-500 hover:underline">
                    here
                </button>
                .
            </p>
            <p>I enjoy playing frisbee recreationally.</p>
        </div>
    );
}

export default AboutMe;
