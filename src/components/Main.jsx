// Main Component for App component.
import React, {Component} from "react";
import TechList from "./sharedComponents/TechList";
import Button from "./sharedComponents/Button";
import { buttonStyles } from "../styles/buttonStyles";


class MainClassComponent extends Component {
    render() {
        // Destructering all keys from props value passed in main component.
        const {techs, handleLogin, greetPeople, handleTime, message, loggedIn} = this.props;

        // Conditional Rendering in Main component.
        const status = loggedIn ? <Welcome /> : <LogIn />

        return (
            <main>
                <p>Prerequisites for learning <strong><em>React.js</em></strong></p>
                <ul>
                    <TechList techs={techs}/>
                </ul>
                {techs.length >= 3 && (<p>You Have Prerequisite Courses to learn ReactJS</p>)}
                <div>
                    <Button onClick={handleTime} text="ShowDate" 
                        style={buttonStyles} />
                    {" "}
                    <Button onClick={greetPeople} text="GreetPeople"
                        style={buttonStyles} />
                    {!loggedIn && (<p>
                        Please LogIn to get information of 30 Days of <strong>React</strong>
                        challange.
                    </p>)}
                </div>

                <div style={{margin: 12}}>
                    <Button onClick={handleLogin} 
                        text={loggedIn ? "LogOut" : "LogIn"}
                        style={buttonStyles} />
                    <br />
                    {status}
                </div>
                <Message message={message} />
            </main>
        )
    }
}

// small components inside main component.
const Welcome = () => {
    return (
        <>
            <h1>Welcome to 30 Days of <strong><em>ReactJS</em></strong></h1>
        </>
    )
}

const LogIn = () => {
    return (
        <>
            <h1>Please LogIn</h1>
        </>
    )
}

const Message = (props) => {
    const {message} = props;
    return (
        <>
            <h1>{message}</h1>
        </>
    )
}

export default MainClassComponent;