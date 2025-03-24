import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Experiences from "./pages/experiences";
import App from "./App";
import Resources from "./pages/resources";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import BucketList from "./pages/bucket-list";
import Youtube from "./pages/resources/youtube";
import Readings from "./pages/resources/readings";
import { ROUTES } from "./constants/routes";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <Router>
        <body>
            <Theme>
                <Routes>
                    <Route path={ROUTES.HOME} element={<App />} />
                    <Route path={ROUTES.EXPERIENCES} element={<Experiences />} />
                    <Route path={ROUTES.EDUCATION} element={<Education />} />
                    <Route path={ROUTES.PROJECTS} element={<Projects />} />
                    <Route path={ROUTES.SKILLS} element={<Skills />} />
                    <Route path={ROUTES.RESOURCES} element={<Resources />} />
                    <Route path={ROUTES.BUCKET_LIST} element={<BucketList />} />
                    <Route path={ROUTES.YOUTUBE} element={<Youtube />} />
                    <Route path={ROUTES.READINGS} element={<Readings />} />
                </Routes>
            </Theme>
        </body>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
