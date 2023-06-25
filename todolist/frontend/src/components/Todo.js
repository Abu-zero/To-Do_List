import Axios from "axios";
import {useEffect, useState} from "react";
import DeleteButton from "./DeleteButton";
import UpdateButton from "./UpdateButton";
import TodoInput from "./TodoInput";
import SelectedTodo from "./SelectedTodo";
import UpdateModal from "./UpdateModal";
import {useNavigate} from "react-router-dom";

function Todo(){

    const [todocontent, setTodocontent] = useState("");
    const [todos, setTodos] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [currentUpdateId, setCurrentUpdateId] = useState(null);

    const navigate = useNavigate();

    const insert = () => {
        if(todocontent!=""){
            Axios.post("http://localhost:3001/insert", {
                todocont : todocontent,
            }).then((response) =>{
                setTodocontent("");
            })
        }
        else{
            alert("Lütfen boş bırakmayınız.");
        }
    }

    const write = () => {
        Axios.get("http://localhost:3001/write", ).then((response) =>{
            setTodos(response.data[0]);
        })
    }

    const writeUpdate =(e)=>{
        write();
        e.preventDefault();
    }

    const ToggleModal = (data) => {
        setCurrentUpdateId(data);
        setOpenModal(!openModal);
    };

    const Signout = ()=> {
        Axios.post("http://localhost:3001/signout", ).then((response) =>{
            localStorage.removeItem("loginUser");
            navigate('Login');
        })
    }

    const insertWrite =(e)=>{
        insert();
        write();
        e.preventDefault();
    }

    useEffect(()=>{
        write();
    },[])

    return(
        <div className="todo-all vh-100">
            <div className="todo-body">
                <div className="todo-signout-all">
                    <button className="todo-button todo-signout" onClick={Signout}>Signout</button>
                </div>
                <form className="todo-input-all" onSubmit={insertWrite}>
                    <input className="todo-input" placeholder="Add To Do" value={todocontent} onChange={(e) => setTodocontent(e.target.value)}></input>
                    <button className="todo-button">Add</button>
                </form>
                <div className="todo-field-all">
                    {todos.map((data,i) =>(
                        <div className="todo-item" key={i}>
                            <div className="todo-content">
                                <TodoInput data_todoid={data.todoid} data_content={data.todo}/>
                            </div>
                            <form className="todo-select" onSubmit={writeUpdate}>
                                <DeleteButton data_todoid={data.todoid}/>
                                <UpdateButton data_todoid={data.todoid} callback={ToggleModal}/>
                                <SelectedTodo data_todoid={data.todoid} data_selected={data.selected}/>
                            </form>
                        </div>
                        )
                    )}
                </div>
                {
                    openModal &&
                    <form onSubmit={writeUpdate} className="modal-all">
                        <UpdateModal currentId={currentUpdateId} callback={ToggleModal}/>
                    </form>
                }
            </div>
        </div>
    )
}

export default Todo;