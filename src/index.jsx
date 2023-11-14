// Gateway for all components in react to index.html
import React, {Component} from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

class FormsWithSameFieldApp extends Component {
    // Declaring state.
    state = {
        firstName: "",
        lastName: "",
        country: "",
        title: "",
    }

    // Events Handling for forms.
    handleOnChange = (e) => {
        /*
            We can get name and value like this e.target.name && e.target.value,
            But we can destructer the name, value from e.target
            const name = e.target.name,
            const value = e.target.value,
        */
       const {name, value} = e.target;
       
       this.setState({
        [name]: value,
       })

    }

    handleOnSubmit = (e) => {
        /*
            e.preventDefault()
            Stops the default behaviour of the form
            Specifically refresh the page.
        */
        e.preventDefault();
        /*
            This is the place where we connect backend api,
            to send data to database.
        */

        console.log(this.state);
    }



    render() {
        // Destructering the state to access state values.
        const {firstName, lastName, country, title} = this.state;

        return (
            <div>
                <form action="" onSubmit={this.handleOnSubmit}>
                    <input type="text" name="firstName" id="" 
                        placeholder="First Name" value={firstName}
                        onChange={this.handleOnChange} />
                    <input type="text" name="lastName" id=""
                        placeholder="Last Name" value={lastName}
                        onChange={this.handleOnChange} />
                    <input type="text" name="country" id=""
                        placeholder="Country" value={country}
                        onChange={this.handleOnChange} />
                    <input type="text" name="title" id=""
                        placeholder="Title" value={title}
                        onChange={this.handleOnChange} />

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

rootElement.render(<FormsWithSameFieldApp />);