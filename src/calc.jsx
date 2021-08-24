import React , {useState} from "react"
import "./calcStlye.css"


function Calc(){
    let [value,setValue]= useState("")
    const values = (e)=>{
        console.log(e);
        value += e
        setValue(value)
    }
    const answer = ()=>{
            value = eval(value)
            setValue(value)
        }

      const allClear = ()=>{
        console.log(value)
        setValue("")        

      }  
       const clear = ()=>{
        setValue(value.slice(0,-1))  
        console.log(value)

      }  
    return (
        <div className="mainBox">

           <div>
               
               <h1>CALCULATOR</h1>
               </div> 
            
          <div className="calcBox">
            <input type="text" value={value} />
            <table>
                <tr>
                    <td  onClick={()=>values(9)}>9</td>
                    <td onClick={()=>values(8)}>8</td>
                    <td onClick={()=>values(7)}>7</td>
                    <td onClick={()=>values('+')}>+</td>
                    <td onClick={answer}>=</td>
                </tr>
                <tr>
                    <td onClick={()=>values(6)}>6</td>
                    <td onClick={()=>values(5)}>5</td>
                    <td onClick={()=>values(4)}>4</td>
                    <td onClick={()=>values('-')}>-</td>
                    <td onClick={()=>values("*")}>x</td>
                </tr>
                <tr>
                    <td onClick={()=>values(9)}>9</td>
                    <td onClick={()=>values(8)}>8</td>
                    <td onClick={()=>values(7)}>7</td>
                    <td onClick={()=>values('/')}>/</td>
                    <td onClick={()=>values('%')}>%</td>
                
                </tr>
                <tr>
                    <td onClick={allClear}>AC</td>
                    <td onClick={clear}>C</td>
                    <td onClick={()=>values(0)}>0</td>
                    <td onClick={()=>values(1)}>1</td>
                    <td onClick={()=>values(".")}>.</td>
                    
                </tr>
            </table>
              </div>  
        </div>
    
        )
}

export default Calc