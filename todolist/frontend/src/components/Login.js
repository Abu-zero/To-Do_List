import {useState} from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import Clock from "./Clock";

function Login(){

    const [unamereg, setUsernamereg] = useState("");
    const [pwordreg, setPasswordreg] = useState("");

    const [unamelog, setUsernamelog] = useState("");
    const [pwordlog, setPasswordlog] = useState("");

    const navigate = useNavigate();
    localStorage.setItem("loginUser", false);

    const register = () => {
        if(unamereg && pwordreg){
            Axios.post("http://localhost:3001/register", {
                username : unamereg,
                password : pwordreg,
            }).then((response) =>{
                console.log(response);
                setUsernamereg("");
                setPasswordreg("");
                if(response.data.status==1){
                    alert(response.data.message);
                }
                else{
                    alert(response.data.message);
                }
            })
        }
        else{
            alert("Lütfen boş bırakmayınız.")
        }
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username : unamelog,
            password : pwordlog,
        }).then((response) =>{
            console.log(response);
            setUsernamelog("");
            setPasswordlog("");
            if(response.data.status==1){
                localStorage.setItem("loginUser", response.data.userid);
                navigate('/');
            }
            else{
                alert(response.data.message);
            }
        })
    }

    return(
        <div className="login-field">
            <Clock/>
            <div>
                <span className="text-1">To-Do List</span>
            </div>
            <div className="login-all ">
                <div className="register-body">
                    <span className="text-2">Register</span>
                    <span className="text-3">Username</span>
                    <input className="login-input" placeholder="Username" value={unamereg} onChange={(e) => {setUsernamereg(e.target.value)}}></input>
                    <span className="text-3">Password</span>
                    <input className="login-input" placeholder="Password" value={pwordreg} type="password" onChange={(e) => {setPasswordreg(e.target.value)}}></input>
                    <button className="login-button" onClick={register}>Register</button>
                </div>
                <div className="login-body">
                    <span className="text-2">Login</span>
                    <span className="text-3">Username</span>
                    <input className="login-input" placeholder="Username" value={unamelog} onChange={(e) => {setUsernamelog(e.target.value)}}></input>
                    <span className="text-3">Password</span>
                    <input className="login-input" placeholder="Password" value={pwordlog} type="password" onChange={(e) => {setPasswordlog(e.target.value)}}></input>
                    <button className="login-button" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;