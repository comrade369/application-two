// Button Component for Main component.
import React from "react";

const Button = (props) => {
    const {onClick, text, style} = props;

    return (
        <button onClick={onClick} style={style}>{text}</button>
    )
}

export default Button;