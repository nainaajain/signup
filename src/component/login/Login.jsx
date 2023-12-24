import React,{userstate} from "react";
import './Login.css';
import {Link} from 'react-router-dom';

function Login(){
        const [emailval,setemailval]=userstate("");
        const [passval,setpassval]=userstate("");
    const handlesubmit=(event)=>{
        event.preventDefault();
    }
    
    return (
        <div className="main-login">
            Login page
            <Link to='/Register'>Move to Register Page</Link>
            <div className="login-contain">
                <div className="left-side">
                    <form onSubmit={handlesubmit}>
                        <label for="emil1">Email</label>
                          <input placeholder="enter your email...." type="email"value={emailval} onchange={(e)=>{setemailval(e.target.value)}} id="emil1"/>
                        <label for="pwd1">Password</label>
                           <input placeholder="enter your password...." type="password" 
                           value={passval} onchange={(e)=>{setpassval(e.target.value)}} id="pwd1"/>
                        <button type="submit" id="sub_button">Submit</button>
                    </form>
                </div>
                <div className="right-side">

                </div>

            </div>
            
        </div>
    )
}
export default Login; 