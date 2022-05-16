import "./Routing.css";

import Home from "../../HomeArea/Home/Home";
import Experience from "../../ExperienceArea/Experience/Experience";
import PageNotFound from "../PageNotFound/PageNotFound";

import {Navigate, Routes, Route} from "react-router-dom";
import Education from "../../ExperienceArea/Education/Education";



function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>

            <Route path="/Resume" element={ <Home /> } />;
            <Route path="/Home" element={ <Home /> } />;
            <Route path="/Experience" element={ <Experience /> } />;
            <Route path="/Education" element={ <Education /> } />;

            <Route path="/" element={<Navigate to="home" />} />
            <Route path="/*" element={<PageNotFound />} />

            </Routes>
        </div>
    );
}

export default Routing;
