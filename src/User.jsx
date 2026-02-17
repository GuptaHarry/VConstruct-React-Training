import React from "react";


export default function User({ name, role, isOnline }) {
   return (
     <div>
        <h2>1. {name} - {role} - {isOnline ? "Online" : "Offline"}</h2>
        <h2>2. {name} - {role} - {!isOnline && "Offline"} {isOnline && "Online"} </h2>
        <br></br>
     </div>
   )
}
