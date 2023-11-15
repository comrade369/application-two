import React, {Component} from "react";
import ReactDOM from "react-dom/client";

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

// creating array of objects for select && option tags.
const options = [
    {value: "", label: "---Select Country---"},
    {value: "india", label: "India"},
    {value: "japan", label: "Japan"},
    {value: "russia", label: "Russia"},
    {value: "south korea", label: "South Korea"},
    {value: "germany", label: "Germany"},
];

// Mapping the options to list(array) of JSX options.
const selectOptions = options.map(({value, label}) => (
    <option value={value}>{label}</option>
));

class FormsAppWithDifferentFieldTypes extends Component {
    // Declaring state.
    state = {
        firstName: "",
        lastName: "",
        email: "",
        telphone: "",
        dateOfBirth: "",
        favouriteColor: "",
        weight: "",
        gender: "",
        bio: "",
        file: "",
        country: "",
        skills: {
            html: false,
            css: false,
            javascript: false,
        },
        touched: {
            firstName: false,
            lastName: false,
        }

    }

    // Handling Events 
    handleOnChange = (e) => {
        const {value, name, type, checked} = e.target;

        if (type === "checkbox") {
            this.setState({
                skills: {...this.state.skills, [name]: checked}
            })
        } else if (type === "file") {
            console.log(type, "click here");
            this.setState({
                [name]: e.target.files[0]
            })
        } else if (type === "radio") {
            this.setState({
                gender: value,
            })
        } else {
            this.setState({
                [name]: value,
            })
        }

        console.log(e);
    }

    handleOnBlur = (e) => {
        const {name, value} = e.target;
        this.setState({
            touched: {...this.state.touched, [name]: value}
        })        
    }

    validate = () => {
        // object to collect error feedback and to display on the form.
        const errors = {
            firstName: "",
        }

        if ((this.state.touched.firstName && this.state.touched.firstName.length < 3) ||
            (this.state.touched.firstName && this.state.touched.firstName.length > 12)) {
                errors.firstName = "Firstname must be between 2 and 12"
            } 
        
        return errors;
    }

    handleOnSubmit = (e) => {
        e.preventDefault();

        const {firstName, lastName, email, telphone, dateOfBirth,
            favouriteColor, weight, gender, bio, file, country, skills} = this.state;

        const formattedSkills = [];

        for (const key in skills) {
            if (skills[key]) {
                formattedSkills.push(key.toUpperCase())
            }
        }

        const data = {firstName, lastName, email, telphone, dateOfBirth, favouriteColor,
            weight, gender, bio, file, country, skills: formattedSkills,};
        
        console.log(data);
    }
    
    render() {
        // accessing the state value by destructering the state.
        const {firstName} = this.validate();

        // the noValidate in form to stop the HTML5 built-in validation.
        
        return(
            <div>
                <h2>Add Student</h2>

                <form action="" onSubmit={this.handleOnSubmit} noValidate>
                    <div>
                        <div>
                            <label htmlFor="firstName">First Name: </label>
                            <input type="text" name="firstName" id="firstName"
                                placeholder="First Name" value={firstName}
                                onChange={this.handleOnChange}
                                onBlur={this.handleOnBlur} />
                        </div>

                        <div>
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" name="lastName" id="lastName"
                                placeholder="Last Name" value={this.state.lastName}
                                onChange={this.handleOnChange} />
                        </div>

                        <div>
                            <label htmlFor="email">E-Mail: </label>
                            <input type="email" name="email" id="email"
                                placeholder="E-Mail" value={this.state.email}
                                onChange={this.handleOnChange} />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="telphone">Telphone: </label>
                        <input type="tel" name="telphone" id="telphone"
                            placeholder="Telphone" value={this.state.telphone}
                            onChange={this.handleOnChange} />
                    </div>

                    <div>
                        <label htmlFor="dateOfBirth">Date of Birth: </label>
                        <input type="date" name="dateOfBirth" id="dateOfBirth"
                            placeholder="Date of Birth" value={this.state.dateOfBirth}
                            onChange={this.handleOnChange} />
                    </div>

                    <div>
                        <label htmlFor="favouriteColor">Favourite Color: </label>
                        <input type="color" name="favouriteColor" id="favouriteColor"
                            placeholder="Favourite Color" value={this.state.favouriteColor}
                            onChange={this.handleOnChange} />
                    </div>

                    <div>
                        <label htmlFor="weight">Weight: </label>
                        <input type="number" name="weight" id="weight"
                            placeholder="Weight in kg" value={this.state.weight}
                            onChange={this.handleOnChange} />
                    </div>

                    <div>
                        <label htmlFor="country">Country</label>
                        <br />
                        <select name="country" id="country" onChange={this.handleOnChange}>
                            {selectOptions}
                        </select>
                    </div>

                    <div>
                        <input type="radio" name="male" id="male"
                            value="Male" onChange={this.handleOnChange}
                            checked={this.state.gender === "Male"} />
                        <label htmlFor="male">Male</label>
                    </div>

                    <div>
                        <input type="radio" name="female" id="female"
                            value="Female" onChange={this.handleOnChange}
                            checked={this.state.gender === "Female"} />
                        <label htmlFor="female">Female</label>
                    </div>

                    <div>
                        <input type="radio" name="other" id="other"
                            value="Other" onChange={this.handleOnChange}
                            checked={this.state.gender === "Other"} />
                        <label htmlFor="other">Other</label>
                    </div>

                    <div>
                        <p>Select your Skills:</p>
                        <div>
                            <input type="checkbox" name="html" id="html"
                                onChange={this.handleOnChange} />
                            <label htmlFor="html">HTML</label>
                        </div>

                        <div>
                            <input type="checkbox" name="css" id="css"
                                onChange={this.handleOnChange} />
                            <label htmlFor="css">CSS</label>
                        </div>

                        <div>
                            <input type="checkbox" name="javascript" id="javascript"
                                onChange={this.handleOnChange} />
                            <label htmlFor="javascript">Javascript</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" id="bio" cols="120" rows="10"
                            placeholder="Write about yourself..." value={this.state.bio}
                            onChange={this.handleOnChange} />
                    </div>

                    <div>
                        <input type="file" name="file" id="" onChange={this.handleOnChange}/>
                    </div>

                    <div>
                        <button>Submit</button>
                    </div>

                </form>
            </div>
        )
    }
}

rootElement.render(<FormsAppWithDifferentFieldTypes />);