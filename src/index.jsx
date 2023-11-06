import React from "react";
import ReactDOM from "react-dom/client";

// importing media files
import reactLogo from "./images/reactLogo.png";

// const jsxElement = <h1>This is a JSX Element.</h1>
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

const headerStyle = {
    backgroundColor: "#61DBFB",
    fontFamily: "Helvetica Neue",
    padding: 25,
    lineHeight: 1.5,
};

// Injecting data to JSX Elements.
const welcome = "Welcome to 30 Days of React";
const title = "Getting started React";
const subtitle = "Javascript Library";
const learner = {
    firstName: "Jai",
    lastName: "Hind",
};

const date = "Nov 6, 2023";

const headerJSXElement = (
    <header style={headerStyle}>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>Learner: {learner.firstName} {learner.lastName}</p>
        <small>{date}</small>
    </header>
);

const mainStyle = {
    backgroundColor: "#F3F0F5",
    padding: 25,
};

const techs = ["HTML", "CSS", "Javascript"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
const numOne = 3;
const numTwo = 6;
const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
);

const yearBorn = 2000;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;
const personAge = (
    <p>
        {" "}
        {learner.firstName} {learner.lastName} is {age} years old.
    </p>
);
const reactLogoJSX = (
    <img src={reactLogo} alt="reactImg" />
);
const mainJSXElement = (
    <main style={mainStyle}>
        <p>
            Prerequisite to get started{" "}
            <strong>
                <em>react.js</em>
            </strong>
            :
        </p>
        <ul>
            {techsFormatted}
        </ul>
        {result}
        {personAge}
        {reactLogoJSX}
    </main>
);

const footerStyle = {
    backgroundColor: "#61DBFB",
    padding: 25,
}

const copyright = "Copyright 2023";

const footerJSXElement = (
    <footer style={footerStyle}>
        <p>{copyright}</p>
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
