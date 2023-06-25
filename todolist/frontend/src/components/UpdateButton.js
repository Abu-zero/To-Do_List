const UpdateButton = (props) => {
    return(
        <button className="todo-update" name={props.data_todoid} onClick={()=>props.callback(props.data_todoid)}>
            <svg fill="white" width="25px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.758 24.758"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="c188_arrow"> <path id="_x3C_Group_x3E__6_" d="M12.527,0.003c0.013,0,0.015,0,0.019,0c0.007,0,0.007,0,0.009,0c0,0,0,0,0.004,0l0,0 c0.002,0,0.008,0,0.01,0c0.004,0,0.004,0,0.004,0s0,0,0.003,0c0.026-0.006,0.035-0.002,0.054-0.002 c3.205,0,6.32,1.271,8.621,3.503l2.536-2.569c0.122-0.123,0.31-0.16,0.461-0.094c0.159,0.065,0.264,0.219,0.264,0.392v8.351 c0,0.234-0.19,0.424-0.422,0.424h-8.246c-0.005,0-0.013,0-0.019,0c-0.236,0-0.424-0.189-0.424-0.424 c0-0.159,0.085-0.296,0.212-0.367l2.499-2.533c-1.482-1.432-3.418-2.213-5.539-2.213c-4.332,0.022-7.858,3.572-7.858,7.97 c0.034,4.328,3.58,7.849,7.979,7.849l-0.009,4.468h-0.06C5.844,24.756,0.29,19.24,0.247,12.378 C0.247,5.609,5.75,0.062,12.527,0.003z"></path> </g> <g id="Capa_1_6_"> </g> </g> </g></svg>
        </button>
    )
}

export default UpdateButton;