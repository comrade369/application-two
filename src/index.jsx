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


// Header Component
// Object as Props.
const Header = (props) => {
    return (
        <header style={headerStyle}>
            <h1>{props.data.welcome}</h1>
            <h2>{props.data.title}</h2>
            <h3>{props.data.subtitle}</h3>
            <p>{props.data.learner.firstName} {props.data.learner.lastName}</p>
            <small>{props.data.date}</small>
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
        {"Jai"} {"Hind"} is {age} years old.
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
            <h2>{"Jai"} {"Hind"}</h2>
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

// Props Learning.
// Numbers as Props.
const Age = (props) => <div>The Person is {props.age} years old.</div> 
const Weight = (props) => <p>The weight of the object on earth is {props.weight}N.</p>

// Booleans as Props.
const Status = (props) => {
    let status = props.status ? "Old enough to drive" : "Too young for driving"
    return <p>
        {status}
    </p>
}

// Arrays as props.
const Skills = (props) => {
    const skillsList = props.skills.map((skill, index) => <li key={index}>{skill}</li>)
    return <ul>
        {skillsList}
    </ul>
}

// Function as props.
const Button2 = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>
}

const App = () => {
    // Strings as props value in component.
    const welcome = "Welcome to 30 Days of React";
    const title = "Getting started React";
    const subtitle = "Javascript Library";
    const learner = {
        firstName: "Jai",
        lastName: "Hind",
    };

    const date = "Nov 6, 2023";

    // Objecta as props value in component.
    const data = {
        welcome,
        title,
        subtitle,
        learner,
        date,
    }

    // Numbers as props value in component.
    const currentYear = new Date().getFullYear();
    let birthYear = 2000;
    let age = currentYear - birthYear;
    const gravity = 9.81;
    const mass = 69;
    const weight = gravity * mass;

    // Boolean as props value in component.
    birthYear = 2018;
    age = currentYear - birthYear;
    const status = age >= 18;

    // Function as props value in component.
    function sayHi() {
        return window.alert("HI");
    }

    function showDate(time) {
        const months = [
            "January", "Febraury", "March", "April", "May", "June", "July", "August", "September",
            "Octobar", "November", "December",
        ]

        const month = months[time.getMonth()].slice(0, 3);
        const date = time.getDate();
        const year = time.getFullYear();
        return `${month} ${date}, ${year}`;
    }

    function showDateAlert() {
        return window.alert(showDate(new Date()));
    }

    return (
        <div>
            {/* <Header 
                welcome={welcome} // Adding props not statically and using variable as props.
                title={title}     // Adding attributes to components like passing arguments to function call.
                subtitle={subtitle}
                learner={learner}
                date={date}
            /> */}
            <Header data={data} />
            <Main />
            <HexaColor />
            <Footer />
            <Age age={age} />
            <Weight weight={weight} />
            <Status status={status} />
            <Skills skills={["HTML", "CSS", "Javascript", "ReactJS"]} />
            <Button2 onClick={sayHi} text={"say Hi"} />
            <Button2 onClick={showDateAlert} text="Show Date" />

        </div>
    );
};


// rootElement.render([headerJSXElement, mainJSXElement, footerJSXElement]);
rootElement.render(
    <App />
);

