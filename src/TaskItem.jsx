import React from "react";

const LIST_STYLE = {
    fontSize: "20px",
    border: "2px solid black",
    padding: "10px",

};
export default function TaskItem ({title}){
    return <li style={LIST_STYLE}>{title}</li>
}
