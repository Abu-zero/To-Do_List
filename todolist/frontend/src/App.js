import Login from "./components/Login";
import Todo from "./components/Todo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page404 from "./components/Page404";

function App() {
    return(
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    )
}

export default App;
