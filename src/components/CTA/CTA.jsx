import React from "react";
import "./cta.css";

const CTA = (props) => {
    return (
        <a href={props.path}>
            <div className={"CTA " + props.color}>{props.content}</div>
        </a>
    );
};
export default CTA;
