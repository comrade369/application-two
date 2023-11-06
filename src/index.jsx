import React from "react";
import ReactDOM from "react-dom/client";

// const jsxElement = <h1>This is a JSX Element.</h1>
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const headerStyle = {
    backgroundColor: "#61DBFB",
    fontFamily: "Helvetica Neue",
    padding: 25,
    lineHeight: 1.5,
};

// Injecting data to JSX Elements.
// const welcome = "Welcome to 30 Days of React";
// const title = "Getting started React";
// const subtitle = "Javascript Library";
// const learner = {
//     firstName: "Jai",
//     lastName: "Hind",
// };

const date = "Nov 6, 2023";

const headerJSXElement = (
    <header style={headerStyle}>
        <h1>Welcome to 30 Days of React</h1>
        <h2>Getting started React</h2>
        <h3>Javascript Library</h3>
        <p>Jai Hind</p>
        <small>Nov 6, 2023</small>
    </header>
);

const mainStyle = {
    backgroundColor: "#F3F0F5",
    padding: 25,
};

const mainJSXElement = (
    <main style={mainStyle}>
        <p>Prerequisite to get started react.js:</p>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
        </ul>
    </main>
);

const footerStyle = {
    backgroundColor: "#61DBFB",
    padding: 25,
}
const footerJSXElement = (
    <footer style={footerStyle}>
        <p>copyright 2023</p>
    </footer>
);

const reactApp = (
    <div>
        {headerJSXElement}
        {mainJSXElement}
        {footerJSXElement}
    </div>
);

// rootElement.render([headerJSXElement, mainJSXElement, footerJSXElement]);
rootElement.render(reactApp);
