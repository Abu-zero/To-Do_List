import {useState} from "react";
import Axios from "axios";

const UpdateModal = (props) => {

    const [todocontent, setTodocontent] = useState("");

    const Update = () => {
        if(todocontent.trim()!=""){
            Axios.post("http://localhost:3001/update", {
                todo_content: todocontent,
                button_id: props.currentId,
            }).then((response) =>{
                console.log(response);
                if(response.data.status==1){
                    props.callback();
                }
                else{
                    alert(response.data.message);
                }
            })
        }
        else{
            alert("Lütfen Gerekli Alanı Doldurunuz.")
        }
    }

    return(
        <div className="modal-item">
            <div className="text-2">
                Update To-Do
            </div>
            <input className="update-input" placeholder="" type="text" onChange={(e)=>setTodocontent(e.target.value)}></input>
            <div className="modal-button-all">
                <button className="modal-button" onClick={()=>props.callback()}>Close</button>
                <button className="modal-button" onClick={Update}>Update</button>
            </div>
        </div>
    )
}

export default UpdateModal;