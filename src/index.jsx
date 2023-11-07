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

// Injecting data to JSX Elements in React Components.
const welcome = "Welcome to 30 Days of React";
const title = "Getting started React";
const subtitle = "Javascript Library";
const learner = {
    firstName: "Jai",
    lastName: "Hind",
};

const date = "Nov 6, 2023";

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{learner.firstName} {learner.lastName}</p>
            <small>{date}</small>
        </header>
    );
}



const mainStyle = {
    backgroundColor: "#F3F0F5",
    padding: 25,
};


// const techs = ["HTML", "CSS", "Javascript"];
// const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

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

const TechList = () => {
    const techs = ["HTML", "CSS", "Javascript"];
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted;
};

const UserCard = () => {
    return (
        <div>
            {personAge}
            {reactLogoJSX}
            <h2>{learner.firstName} {learner.lastName}</h2>
        </div>
    );
}

const Main = () => {
    return (
        <main style={mainStyle}>
            <p>Prerequisite to get started {" "}
                <strong>
                    <em>React.js</em>
                </strong>
            </p>
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

const copyright = "2023";

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Copyright &copy;{copyright}</p>
        </footer>
    );
}

// smallest component in reactJS.
const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: 5,
    background: "rgb(0, 255, 0)",
}
const Button = () => <button style={buttonStyle}>Action</button>

// Hexacolor generator.
const hexacolorGenerator = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i += 1) {
        let index = Math.floor(Math.random() * str.length);
        color += str[index];
        console.log(str);
        console.log(index);
        console.log(color);
    }
    return "#" + color;
}

const HexaColor = () => {
    return (
        <div>
            {hexacolorGenerator()}
            <Button />
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Header />
            <Main />
            <HexaColor />
            <Footer />
        </div>
    );
};


// rootElement.render([headerJSXElement, mainJSXElement, footerJSXElement]);
rootElement.render(
    <App />
);

