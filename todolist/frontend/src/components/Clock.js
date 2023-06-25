import {useEffect, useState} from "react";

const Clock = () =>{

    const [clockstate, setClockstate] = useState("...");

    useEffect(() => {
        setInterval(()=>{
            const date = new Date();
            setClockstate(date.toLocaleTimeString());
        },1000)
    }, []);

    return(
        <div className="clock-field">
            <div className="clock-item">
                {clockstate}
            </div>
        </div>
    )
}

export default Clock;