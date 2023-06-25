import Axios from "axios";
import {useEffect, useState} from "react";

const SelectedTodo = (props) => {

    const [todoid, setTodoid] = useState(props.data_todoid);
    const [inputselected, setInputselected] = useState(!props.data_selected);

    const Selected = () => {
        setInputselected(!inputselected)
        Axios.post("http://localhost:3001/selected", {
            button_id:todoid,
            input_selected: inputselected
        }).then((response) =>{
            if(response.data.status==1){
                alert(response.data.message);
            }
            else{
                alert(response.data.message);
            }
        })
    }

    return(
        <input type="checkbox" className="todo-check" name={props.data_todoid} onClick={Selected} defaultChecked={!inputselected}></input>
    )
}

export default SelectedTodo;