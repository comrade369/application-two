// Header component for App component.
import React, {Component} from "react";

class HeaderClassComponent extends Component {
    render() {
        // destructering the data object that passed as props value.
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

export default HeaderClassComponent;