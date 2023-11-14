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


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<EventClassApp />);