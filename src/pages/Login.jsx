import React from "react";
import './Login.css'
import Title from "../components/Title";
function Login(){
    const customStyle ={
        fontSize:"20px",
        background:"black",
        color:"white",
        margin:"2rem",
        padding:"2rem"
    }
    return(
        <div>
            <h1><Title title={"Login page"}/></h1>
           
            <hr />
            <div style={customStyle}>
                <label style={{fontSize:"20px"}}> <Title title="UserName :"/> </label >
                <input type="text" placeholder="Enter Username" style={{color:"blue",fontSize:"20px"}}/>
            </div>
        </div>
    )
}
export default Login;

