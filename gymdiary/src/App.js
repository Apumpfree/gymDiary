import React from "react";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import Logs from "./Pages/Logs";
import Stats from "./Pages/Stats";
import Videos from "./Pages/Videos";


// conditional rendering to determine what page is loaded.
// react / Conditional rendering 
const App = () => (
    <div>
        {/* <Home /> */}
        {/* <Courses /> */}
        <Stats />
    </div>
);

export default App;
