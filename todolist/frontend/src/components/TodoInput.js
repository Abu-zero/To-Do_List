const TodoInput = (props) => {
    return(
        <input className="todo-item-input" name={props.data_todoid} type="text" placeholder={props.data_content} disabled></input>
    )
}

export default TodoInput;