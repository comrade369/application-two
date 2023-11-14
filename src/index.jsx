// Gateway file for all Components to index.html file.
import React, {Component} from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// FORMS IN REACTJS.
class FormsApp extends Component {
    // Declaring state.
    // Initial state.
    state = {
        firstName: "",
    }

    // setting value of firstName in event obj target field value field using onChange event handler.
    handleOnChange = (e) => {
        this.setState({
            firstName: e.target.value,
        })
    }

    render() {
        /*
            we inject this.state.firstName value inside input value attribute.
        */
        return (
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" id="firstName" 
                    placeholder="first name" value={this.state.firstName}
                    onChange={this.handleOnChange} />
                
                <h1>Display what we write on input field: {this.state.firstName}</h1>
            </div>
        )
    }
}

rootElement.render(<FormsApp />);