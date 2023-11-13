// TechList component for Main component.
import React, {Component} from "react";

class TechList extends Component {
    render() {
        // Destructering the props keys passed inside main component.
        const {techs} = this.props;
        
        const techList = techs.map((tech, index) => <li key={index}>{tech}</li>)
        return techList;
    }
}

export default TechList;