// Footer Component for App Component.
import React, {Component} from "react";

class FooterClassComponent extends Component {
    render() {
        // destructering the props of footer component.
        const {date} = this.props;

        return (
            <footer>
                <small>Copyright &copy;{date}</small>
            </footer>
        )
    }
}

export default FooterClassComponent;