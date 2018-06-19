import * as React from "react";
import * as ReactDOM from "react-dom";

import { MainPage, MainPageState } from "./components/MainPage";

ReactDOM.render(
    <MainPage compiler="TypeScript" framework="React" />,
    document.getElementById("startDiv")
);