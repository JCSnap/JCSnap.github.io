import { useNavigate } from "react-router";
import { ROUTES } from "../../../constants/routes";

function Resources() {
    const navigate = useNavigate();
    // youtube recommendation at /resources/youtube
    return (
        <div className="ml-6">
            <h1 className="text-black font-semibold">Here are some of the things I do</h1>
            <p>
                Sometimes I write about tech, philosophy or random stuff in my{" "}
                <a href="https://jcsnap.github.io/blog" className="text-blue-500 hover:underline">
                    Blog
                </a>
                .
            </p>
            <p>
                I code for school and outside of school. You can find my projects on{" "}
                <a href="httips://github.com/JCSnap" className="text-blue-500 hover:underline">
                    GitHub
                </a>
                .
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
                <button onClick={() => navigate(ROUTES.EXPERIENCES)} className="text-blue-500 hover:underline">
                    here
                </button>
                .
            </p>
            <p>I teach Physics, Math and Economics for A-Level students.</p>
            <p>I enjoy philosophy, especially in the area of epistemology.</p>
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

export default Resources;
