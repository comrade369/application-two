// Gateway file for all Components to index.html file.
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./components/App";

// EVENTS IN REACTJS.
const EventApp = () => {
    const welcome = () => {
        return window.alert("Welcome to 30 Days of ReactJS");
    }

    return (
        <button onClick={welcome}>click me</button>
    )
}

// we cannot return false to prevent default behaviour in react like in html.
class EventClassApp extends React.Component {
    welcome = () => {
        // return window.alert("Preventing default behaviour explicitly");
        console.log("The link was clicked");
        return window.alert("Preventing default behaviour of html elements explicitly");
    }
    render() {
        return (
            <a href="https://www.google.com" onClick={this.welcome}>click link</a>
        )
    }
}

// Different Events Handling of Mouse and Keyboard.
class EventHandlingOfMouseAndKeyboardEvents extends React.Component {
    // creating state object.
    state = {
        message: "",
        firstName: "",
        key: "",
    }

    // onClick Event Handle Function.
    handleOnClick = (e) => {
        // e gives the event object.
        console.log(e);
        // changing state 
        this.setState({
            message: "The onClick event is clicked."
        })
    }

    handleOnMouseOver = (e) => {
        console.log(e);
        this.setState({
            message: "The onMouseOver event is activated."
        })
    }

    handleOnCopy = (e) => {
        console.log(e);
        this.setState({
            message: "The onCopy event is activated."
        })
    }

    handleOnKeyUp = (e) => {
        console.log(e);
        this.setState({
            message: `${e.target.value} has been pressed, the keycode is ` + e.charcode,
        })
    }

    handleOnBlur = (e) => {
        console.log(e);
        this.setState({
            message: "The onBlur event is blurred the input field.",
        })
    }

    handleOnChange = (e) => {
        console.log(e);
        console.log(this.state.value);
        this.setState({
            firstName: e.target.value,
            message: e.target.value,
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome to World of Events.</h1>

                <h2>Which Event Activated: {this.state.message}</h2>

                <button onClick={this.handleOnClick}>On Click Event</button>

                <button onMouseOver={this.handleOnMouseOver}>Move Mouse On Me</button>

                <p onCopy={this.handleOnCopy}>Check copyright permission by copying this text.</p>

                <label>Test for on key press event.</label>
                <input type="text" onKeyUp={this.handleOnKeyUp} />

                <label htmlFor="">Test for on blur event</label>
                <input type="text" onBlur={this.handleOnBlur} />

                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="firstName">
                            first name:
                        </label>
                        <input type="text" name="firstName" onChange={this.handleOnChange} value={this.state.value} />
                    </div>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<EventHandlingOfMouseAndKeyboardEvents />);