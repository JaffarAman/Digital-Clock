import react, { useState } from "react"
import "./bgStyle.css"



const BgChanger = ()=>{
    let [bgColor,setbgColor] = useState()
    let [wording,setWording] = useState("CLICK ME")
    const bgColorChg = ()=>{
        setbgColor("orange")
        setWording("double CLick")
        console.log("chal rha hia");
    }
    const dblClick = ()=>{
        setbgColor("purple")
        setWording("CLick ME")
    }
    return(
        <div style={{backgroundColor : bgColor}}>
            <button onDoubleClick={dblClick} onClick={bgColorChg}>
            {wording}
                </button> 
            </div>
    )
}

export default BgChanger