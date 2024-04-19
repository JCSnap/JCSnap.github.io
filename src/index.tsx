import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experiences from "./pages/experiences";
import App from "./App";
import Youtube from "./resources/youtube";
import Education from "./pages/education";
import { ROUTES } from "./constants/routes";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <body>
            <Theme>
                <Routes>
                    <Route path={ROUTES.HOME} element={<App />} />
                    <Route path={ROUTES.EXPERIENCES} element={<Experiences />} />
                    <Route path={ROUTES.EDUCATION} element={<Education />} />
                    <Route path={ROUTES.YOUTUBE} element={<Youtube />} />
                </Routes>
            </Theme>
        </body>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
