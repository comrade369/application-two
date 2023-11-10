// import React from "react";
// import ReactDOM from "react-dom/client";

// // importing media files
// import reactLogo from "./images/reactLogo.png";

// // const jsxElement = <h1>This is a JSX Element.</h1>
// const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// const headerStyle = {
//     backgroundColor: "#61DBFB",
//     fontFamily: "Helvetica Neue",
//     padding: 25,
//     lineHeight: 1.5,
// };


// // Header Component
// // Object as Props.
// const Header = (props) => {
//     // Destructering the props object
//     const {welcome, title, subtitle, learner, date} = props.data;
//     const {firstName, lastName} = learner;
//     return (
//         <header style={headerStyle}>
//             <h1>{welcome}</h1>
//             <h2>{title}</h2>
//             <h3>{subtitle}</h3>
//             <p>{firstName} {lastName}</p>
//             <small>{date}</small>
//         </header>
//     );
// }



// const mainStyle = {
//     backgroundColor: "#F3F0F5",
//     padding: 25,
// };


// const yearBorn = 2000;
// const currentYear = new Date().getFullYear();
// const age = currentYear - yearBorn;
// const personAge = (
//     <p>
//         {" "}
//         {"Jai"} {"Hind"} is {age} years old.
//     </p>
// );


// const TechList = ({techs}) => {
//     const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techsFormatted;
// };

// const UserCard = ({user: {firstName, lastName, image}}) => {
//     return (
//         <div>
//             {personAge}
//             <img src={image} alt="reactLogo" />
//             <h2>{firstName} {lastName}</h2>
//         </div>
//     );
// }

// const Button2 = ({text, onClick, style}) => {
//     return <button style={style} onClick={onClick}>{text}</button>
// }

// // Main Component.
// const Main = ({user, techs, showDateAlert, greetUser}) => {
//     return (
//         <main style={mainStyle}>
//             <p>Prerequisite to get started {" "}
//                 <strong>
//                     <em>React.js</em>
//                 </strong>
//             </p>
//             <ul>
//                 <TechList techs={techs} />
//             </ul>
//             <UserCard user={user} />
//             <Button2 text="greet" onClick={greetUser} style={buttonStyle} />
//             <Button2 text="show date" onClick={showDateAlert} style={buttonStyle} />
//         </main>
//     );
// }

// const footerStyle = {
//     backgroundColor: "#61DBFB",
//     padding: 25,
// }

// // Footer Component.
// const Footer = ({year}) => {
//     return (
//         <footer style={footerStyle}>
//             <p>Copyright &copy;{year}</p>
//         </footer>
//     );
// }

// // smallest component in reactJS.
// const buttonStyle = {
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: 5,
//     background: "rgb(0, 255, 0)",
// }


// const App = () => {
//     // Strings as props value in component.
//     const welcome = "Welcome to 30 Days of React";
//     const title = "Getting started React";
//     const subtitle = "Javascript Library";
//     const learner = {
//         firstName: "Jai",
//         lastName: "Hind",
//     };

//     const date = showDate(new Date());

//     const fullYear = new Date().getFullYear();

//     // Objecta as props value in component.
//     const data = {
//         welcome,
//         title,
//         subtitle,
//         learner,
//         date,
//     }

//     // Arrays as props value in component.
//     const techs = ["HTML", "CSS", "JavaScript"];

//     // Objects as props value in component.
//     const userData = {...data.learner, image: reactLogo,};

//     // Function as props value in component.
//     function greetUser() {
//         return window.alert("Welcome to 30 Days of ReactJS");
//     }

//     function showDate(time) {
//         const months = [
//             "January", "Febraury", "March", "April", "May", "June", "July", "August", "September",
//             "Octobar", "November", "December",
//         ]

//         const month = months[time.getMonth()].slice(0, 3);
//         const date = time.getDate();
//         const year = time.getFullYear();
//         return `${month} ${date}, ${year}`;
//     }

//     function showDateAlert() {
//         return window.alert(showDate(new Date()));
//     }

//     return (
//         <div>
//             <Header data={data} />
//             <Main 
//                 user={userData}
//                 techs={techs}
//                 showDateAlert={showDateAlert}
//                 greetUser={greetUser}
//             />
//             <Footer year={fullYear}/>
//         </div>
//     );
// };


// // rootElement.render([headerJSXElement, mainJSXElement, footerJSXElement]);
// rootElement.render(
//     <App />
// );

// // Rendering and Mapping Arrays.
// import React from "react";
// import ReactDOM from "react-dom/client";

// const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// // Mapping an Array of Numbers.
// const Numbers = ({numbers}) => {
//     let result = numbers.map((number) => <li>{number}</li>)
//     return result;
// }

// const App = () => {
//     const numbers = [1, 2, 3, 4];

//     return (
//         <div>
//             <h1>Numbers list</h1>
//             <ul>
//                 <Numbers numbers={numbers}/>
//             </ul>
//         </div>
//     );
// }

// // Mapping Arrays of Arrays.
// const skills = [
//     ["HTML", 3],
//     ["CSS", 2],
//     ["Javascript", 6],
//     ["React", 2],
// ]

// const Skill = (props) => {
//     const {skill} = props;
//     const [tech, level] = skill;
//     return <li>{tech} {level}</li>
// } 

// const Skills = (props) => {
//     const {skills} = props;
//     console.log(skills);
//     const skillsList = skills.map((skill) => <Skill skill={skill} />);
//     console.log(skillsList);
//     return <ul>{skillsList}</ul>
// }

// const App2 = () => {
//     return <div>
//         <h1>Skills Level</h1>
//         <Skills skills={skills} />
//     </div>
// }

// // Mapping Arrays of Objects.
// const countries = [
//     {name: "India", city: "New Delhi"},
//     {name: "Srilanka", city: "Colombo"},
//     {name: "Japan", city: "Tokyo"},
//     {name: "Russia", city: "Kemrlin"},
//     {name: "South Korea", city: "Soeul"},
// ];

// const Country = (props) => {
//     const {country} = props;
//     const {name, city} = country;
//     return <div>
//         <h1>{name}</h1>
//         <small>{city}</small>
//     </div>
// }

// // Add key in mapping to prevent error in browser.
// const Countries = (props) => {
//     const {countries} = props;
//     const countriesList = countries.map((country, index) => <Country key={index} country={country} />)
//     return <div>{countriesList}</div>
// }

// const App3 = () => {
//     return <div>
//         <h1>Countries List</h1>
//         <Countries countries={countries} />
//     </div>
// }

// rootElement.render(<App3 />);


// CLASS COMPONENTS IN REACT.
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// class component for Header.
class ClassHeader extends React.Component {


    render() {
        const {data} = this.props;
        const {welcome, title, subtitle, learner, date} = data;
        const {firstName, lastName} = learner;
        return (
            <header>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{firstName} {lastName}</p>
                <small>{date}</small>
            </header>
        )
    }
}

class ClassTechs extends React.Component {


    render() {
        const {techs} = this.props;
        const techList = techs.map((tech, index) => <li key={index}>{tech}</li>)
        return techList;
    }
}

class ClassMain extends React.Component {


    render() {
        const {techs} = this.props;
        return (
            <main>
                <p>Prerequisite to get started react.js:</p>
                <ul>
                    <ClassTechs techs={techs}/>
                </ul>
            </main>
        )
    }
}

class ClassFooter extends React.Component {

    render() {
        const {date} = this.props;

        return (
            <footer>
                <p>Copyright &copy;{date.getFullYear()}</p>
            </footer>
        )
    }
}

class ClassApp extends React.Component {
    render() {
        const date = new Date();

        // ClassHeader component props.
        const data = {
            welcome: "Welcome to 30 Days of ReactJS",
            title: "Getting Started React",
            subtitle: "Javascript Library",
            learner: {firstName: "Jai", lastName: "Hind"},
            date: date.getFullYear(),
        }

        // ClassMain component props.
        const techs = ["HTML", "CSS", "Javascript"];

        return (
            <div>
                <ClassHeader data={data}/>
                <ClassMain techs={techs}/>
                <ClassFooter date={date}/>
            </div>
        )
    }
}

rootElement.render(<ClassApp />);