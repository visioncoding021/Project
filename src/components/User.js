import { useState } from "react";
const User = (props)=>{
    const [count,setCount] =useState(1);
    return(
        <div className="user-card">
             <h1>{count}</h1>
              <h2>Name : {props.name}</h2>
              <h3>Location: Jaipur</h3>
              <h4>LeetCode : rgoswami3419</h4>
        </div>
    )
}

export default User;