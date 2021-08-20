import React from "react"


const Slotm = ({a,b,c})=>{
    
    if((a==b)&&(b==c)){
        return <div>

        <h1>THIS IS MATCH</h1>
        <tr>
            <td> {a} </td>
            <td>{b} </td>
            <td>{c} </td>
        </tr>
        </div>
    }
    else{
        return <div>
            <h1>THIS IS NOT MATCH</h1>
        <tr>
            <td> {a} </td>
            <td>{b} </td>
            <td>{c} </td>
        </tr>
        </div>
    }

}

export default Slotm