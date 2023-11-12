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


// // CLASS COMPONENTS IN REACT.
// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactLogo from "./images/reactLogo.png";

// const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// // class component for Header.
// class ClassHeader extends React.Component {


//     render() {
//         const {data} = this.props;
//         const {welcome, title, subtitle, learner, date} = data;
//         const {firstName, lastName} = learner;
//         return (
//             <header>
//                 <h1>{welcome}</h1>
//                 <h2>{title}</h2>
//                 <h3>{subtitle}</h3>
//                 <p>{firstName} {lastName}</p>
//                 <small>{date}</small>
//             </header>
//         )
//     }
// }

// class ClassTechs extends React.Component {


//     render() {
//         const {techs} = this.props;
//         const techList = techs.map((tech, index) => <li key={index}>{tech}</li>)
//         return techList;
//     }
// }

// class User extends React.Component {
//     render() {
//         const {user} = this.props;
//         const {firstName, lastName, image} = user;
//         return (
//             <div>
//                 <p>
//                     My Name is {firstName} {lastName}
//                 </p>
//                 <img src={image} alt="reactLogo" />
//             </div>
//         )
//     }
// }

// class Button extends React.Component {
//     render() {
//         const {onClick, text, style} = this.props;
//         return (
//             <button onClick={onClick} style={style}>{text}</button>
//         )
//     }
// }

// const buttonStyle = {
//     padding: 12,
//     background: "lightgreen",
//     borderRadius: 5,
//     border: "none",
// }

// class ClassMain extends React.Component {


//     render() {
//         const {techs, greetPeople, showDate, user} = this.props;
//         return (
//             <main>
//                 <p>Prerequisite to get started react.js:</p>
//                 <ul>
//                     <ClassTechs techs={techs}/>
//                 </ul>
//                 <User  user={user}/>
//                 <Button onClick={greetPeople} text="greetPeople" style={buttonStyle} />
//                 <p></p>
//                 <Button onClick={showDate} text="showDate" style={buttonStyle} />
//             </main>
//         )
//     }
// }

// class ClassFooter extends React.Component {

//     render() {
//         const {date} = this.props;

//         return (
//             <footer>
//                 <p>Copyright &copy;{date.getFullYear()}</p>
//             </footer>
//         )
//     }
// }

// class ClassApp extends React.Component {

//     greetPeople() {
//         window.alert("Welcome to 30 Days of React");
//     }

//     showDate() {
//         window.alert(new Date().toLocaleDateString());
//     }
    
//     render() {
//         const date = new Date();

//         // ClassHeader component props.
//         const data = {
//             welcome: "Welcome to 30 Days of ReactJS",
//             title: "Getting Started React",
//             subtitle: "Javascript Library",
//             learner: {firstName: "Jai", lastName: "Hind"},
//             date: date.getFullYear(),
//         }

//         const user = {...data.learner, image: reactLogo};

//         // ClassMain component props.
//         const techs = ["HTML", "CSS", "Javascript"];

//         return (
//             <div>
//                 <ClassHeader data={data} />
//                 <ClassMain 
//                     techs={techs}
//                     greetPeople={this.greetPeople}
//                     showDate={this.showDate}
//                     user={user}
//                 />
//                 <ClassFooter date={date} />
//             </div>
//         )
//     }
// }

// rootElement.render(<ClassApp />);


// States for Class Components in ReactJS.
// import React from "react";
// import ReactDOM from "react-dom/client";
// import reactLogo from "./images/reactLogo.png";

// const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// class HeaderClass extends React.Component {
//     // creating state obj in class component.
//     state = {
//         count: 0,
//     }

//     // Creating Methods in a component.
//     addOne = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     minusOne = () => {
//         this.setState({count: this.state.count - 1})
//     }

//     render() {
//         const {count} = this.state;

//         // Resetting state using javascript method this.setState();
//         return (
//             <div>
//                 <h1>{count}</h1>
//                 {/* Inline Methods || anonymous Methods 
//                 <button onClick={() => this.setState({count: count + 1})}>Add One</button>
//                 {" "}
//                 <button onClick={() => this.setState({count: count - 1})}>Minus One</button> */}
//                 <button onClick={this.addOne}>Add One</button>
//                 {" "}
//                 <button onClick={this.minusOne}>Minus One</button>
//             </div>
//         )
//     }
// }

// class App extends React.Component {
//     state = {
//         image: "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg",
//     }

//     changeImage = () => {
//         let dog = "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
//         let cat = "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg";
//         let image = (this.state.image === dog ? cat : dog);
//         this.setState({image: image});
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Welcome 30 Days of ReactJS</h1>
//                 <div>
//                     <img src={this.state.image} alt="animalImage" />
//                 </div>
//                 <button onClick={this.changeImage}>Change Image</button>
//             </div>
//         )
//     }
// }

// // All Components together using state Object.
// class HeaderComponent extends React.Component {
//     render() {
//         const {data} = this.props;
//         const {welcome, title, subtitle, learner, date} = data;
//         return (
//             <header>
//                 <div>
//                     <h1>{welcome}</h1>
//                     <h2>{title}</h2>
//                     <h3>{subtitle}</h3>
//                     <p>{learner.firstName} {learner.lastName}</p>
//                     <small>{date}</small>
//                 </div>
//             </header>
//         )
//     }
// }

// // subcomponents in Main Component.
// class Techs extends React.Component {
//     render() {
//         const {techs} = this.props;
//         const techList = techs.map((tech, index) => <li key={index}>{tech}</li>)
//         return techList;
//     }
// }

// class Learner extends React.Component {
//     render() {
//         const {learner} = this.props;
//         const {firstName, lastName, image} = learner;
//         return (
//             <div>
//                 <p>
//                     My Name is <strong><em>{firstName} {lastName}</em></strong>.
//                 </p>
//                 <img src={image} alt="reactLogo" />
//                 <br></br>
//                 <small>{firstName} {lastName}</small>
//             </div>
//         )
//     }
// }

// const buttonStyles = {
//     backgroundColor: "lightgreen",
//     borderRadius: 3,
// }

// class Button extends React.Component {
//     render() {
//         const {onClick, text, styles} = this.props;
//         return (
//             <button onClick={onClick} style={styles}>{text}</button>
//         )
//     }
// }

// class Count extends React.Component {
//     render() {
//         const {addOne, minusOne, count} = this.props;
//         return <div>
//             <h1>{count}</h1>
//             <Button onClick={addOne} text={"+1"} styles={buttonStyles} />
//             {" "}
//             <Button onClick={minusOne} text={"-1"} styles={buttonStyles} />
//         </div>
//     }
// }
// class MainComponent extends React.Component {
//     render() {
//         const {techs, learner, greetPeople, handleTime, addOne, minusOne, count, changeBackground} = this.props;
//         return (
//             <main>
//                 <div>
//                     <p>Prerequisites for learning <strong><em>React.js</em></strong></p>
//                     <ul>
//                         <Techs techs={techs} />
//                     </ul>
//                 </div>
//                 <Learner learner={learner} />
//                 <Button onClick={greetPeople} text="Greet People" styles={buttonStyles}/>
//                 {" "}
//                 <Button onClick={handleTime} text="Handle Time" styles={buttonStyles}/>
//                 {" "}
//                 <Button onClick={changeBackground} text="Change Background" styles={buttonStyles} />
//                 <div>
//                     <Count addOne={addOne} minusOne={minusOne} count={count} />
//                 </div>
//             </main>
//         )
//     }
// }

// class FooterComponent extends React.Component {
//     render() {
//         const {date} = this.props;
//         return (
//             <footer>
//                 <div>Copyright &copy;{date.getFullYear()}</div>
//             </footer>
//         )
//     }
// }

// class App extends React.Component {
//     showDate = (time) => {
//         const months = [
//             "January", "Febraury", "March", "April", "May", "June", "July", "August", "September",
//             "Octobar", "November", "December",
//         ]

//         const month = months[time.getMonth()].slice(0, 3);
//         const date = time.getDate();
//         const year = time.getFullYear();
//         return `${month} ${date}, ${year}`;
//     }
//     // Methods using as props value in Main component.
//     greetPeople = () => {
//         window.alert("Welcome to 30 Days of React.js");
//     }

//     handleTime = () => {
//         window.alert(this.showDate(new Date()));
//     }

//     state = {
//         count: 0,
//         styles: {
//             backgroundColor: "yellow",
//             color: "red",
//         }
//     }

//     addOne = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     minusOne = () => {
//         this.setState({count: this.state.count - 1})
//     }

//     changeBackground = () => {}


//     render() {
//         // data variable Obj passing props value for Header component.
//         const data = {
//             welcome: "Welcome to 30 Days of ReactJS",
//             title: "Getting started ReactJS",
//             subtitle: "Javascript Library",
//             learner: {firstName: "Jai", lastName: "Hind"},
//             date: this.showDate(new Date()),
//         }

//         // date variable passing as props value for Footer component.
//         const date = new Date();

//         // some of variables passing as props value for Main component.
//         const techs = ["HTML", "CSS", "Javascript"];
//         const learner = {...data.learner, image: reactLogo};

//         return (
//             <div style={this.state.styles}>
                
//                 <HeaderComponent data={data} />
//                 <MainComponent techs={techs} learner={learner} 
//                     greetPeople={this.greetPeople} handleTime={this.handleTime}
//                     addOne={this.addOne} minusOne={this.minusOne} count={this.state.count} 
//                     changeBackground={this.changeBackground} />
//                 <FooterComponent date={date} />
//             </div>
//         )
//     }
// }
// rootElement.render(<App />);


// CONDITIONAL RENDERING IN REACTJS.
import React from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// Toggling the status of the user using button component.
class ButtonComponent extends React.Component {
    render() {
        const {text, onClick} = this.props;

        return (
            <button onClick={onClick}>{text}</button>
        )
    }
}
class HeaderComponent extends React.Component {
    render() {
        const {data} = this.props;
        const {welcome, title, subtitle, learner, date} = data;
        const {firstName, lastName} = learner;
        return (
            <header>
                <div>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{firstName} {lastName}</p>
                    <small>{date}</small>
                </div>
            </header>
        )
    }
}


class ConditionalRenderingApp extends React.Component {
    state = {
        loggedIn: false,
    }

    handleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn,
        })
    }

    render() {
        const data = {
            welcome: "Welcome to 30 Days of ReactJS",
            title: "Getting started React",
            subtitle: "Javascript Libraray",
            learner: {firstName: "Jai", lastName: "Hind"},
            date: new Date().toLocaleDateString(),
        }

        // conditional rendering using if else statements.
        let status, text = null;
        

        if (this.state.loggedIn) {
            status = <h1>Welcome to 30 Days of ReactJS</h1>
            text = "LogOut"
        } else {
            status = <h1>Please LogIn</h1>
            text = "LogIn"
        }

        return (
             <div>
                <HeaderComponent data={data} />
                {status}
                <ButtonComponent text={text} onClick={this.handleLogin}/>
             </div>
            
        )
    }
}

rootElement.render(<ConditionalRenderingApp />);