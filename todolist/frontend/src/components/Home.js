import {useEffect, useState} from "react";
import Todo from "./Todo";
import Axios from "axios";
import {Navigate} from "react-router-dom";

const Home = () => {

    const [LoginId, setLoginId] = useState(localStorage.getItem("loginUser"));

    useEffect(() => {
        Axios.get("http://localhost:3001/user",)
            .then((response) => {
                setLoginId(response.data[0].userid);
            })
    }, []);

    return LoginId ? <Todo/> : <Navigate to="/Login"/>
}

export default Home;