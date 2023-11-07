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
// const welcome = "Welcome to 30 Days of React";
// const title = "Getting started React";
// const subtitle = "Javascript Library";
// const learner = {
//     firstName: "Jai",
//     lastName: "Hind",
// };

// const date = "Nov 6, 2023";

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Welcome to 30 Days of ReactJS</h1>
            <h2>Getting started React</h2>
            <h3>Javascript Library</h3>
            <p>Jai Hind</p>
            <small>Nov 7, 2023</small>
        </header>
    );
}



const mainStyle = {
    backgroundColor: "#F3F0F5",
    padding: 25,
};


// const techs = ["HTML", "CSS", "Javascript"];
// const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
// const numOne = 3;
// const numTwo = 6;
// const result = (
//     <p>
//         {numOne} + {numTwo} = {numOne + numTwo}
//     </p>
// );

// const yearBorn = 2000;
// const currentYear = new Date().getFullYear();
// const age = currentYear - yearBorn;
// const personAge = (
//     <p>
//         {" "}
//         {learner.firstName} {learner.lastName} is {age} years old.
//     </p>
// );
// const reactLogoJSX = (
//     <img src={reactLogo} alt="reactImg" />
// );

const TechList = () => {
    const techs = ["HTML", "CSS", "Javascript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted;
};

const UserCard = () => {
    return (
        <div>
            <img src={reactLogo} alt="reactLogo" />
            <h2>Jai Hind</h2>
        </div>
    );
}

const Main = () => {
    return (
        <main style={mainStyle}>
            <p>Prerequisite to get started react.js:</p>
            <ul>
                <TechList />
            </ul>
            <UserCard />
        </main>
    );
}

const footerStyle = {
    backgroundColor: "#61DBFB",
    padding: 25,
}

// const copyright = "Copyright 2023";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Copyright 2023</p>
        </footer>
    );
}

const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};


// rootElement.render([headerJSXElement, mainJSXElement, footerJSXElement]);
rootElement.render(
    <App />
);

