import React, {Component} from "react";
import HeaderClassComponent from "./Header";
import MainClassComponent from "./Main";
import FooterClassComponent from "./Footer";


class App extends Component {
    // creating state object.
    state = {
        loggedIn: false,
        techs: ["HTML", "CSS", "Javascript"],
        message: "Click ShowDate or GreetPeople to Change Message",
    }

    // creating some methods.
    handleLogin = () => {
        this.setState({
            loggedIn: (!this.state.loggedIn)
        })
    }

    greetPeople = () => {
        let message = "Welcome to 30 Days of React";
        this.setState({
            message
        })
    }

    handleTime = () => {
        let date = new Date().toDateString();
        this.setState({
            message: date
        })
    }

    render() {
        // passing data obj as props value for header component.
        const data = {
            welcome: "Welcome to 30 Days of ReactJS",
            title: "Getting started React",
            subtitle: "Javascript Library",
            learner: {firstName: "Jai", lastName: "Hind"},
            date: new Date().toDateString(),
        }

        // passing date variable as props value for footer component.
        const date = new Date().getFullYear();


        return (
            <>
                <HeaderClassComponent data={data} />
                <MainClassComponent techs={this.state.techs} handleLogin={this.handleLogin}
                    greetPeople={this.greetPeople} handleTime={this.handleTime}
                    message={this.state.message} loggedIn={this.state.loggedIn} />
                <FooterClassComponent date={date} />
            </>
        )
    }
}

export default App;