import React , {useState} from "react"
import Slotm from "./components/SlotM"
import "./App.css"

function App(){
  let now = new Date().toLocaleTimeString()
  let [clock,setClock] = useState(now)
 {
  // let now = new Date().toLocaleTimeString()
  // const [count,setCount] = useState(now)
  // // const [count,setCount] = useState(0)
  // const incNum = ()=>{
  //   // setCount(count + 1)
  //   now = new Date().toLocaleTimeString()
  //   setCount(now)
  // }
  // const dcrNum = ()=>{
  //   if(count>0){
  //     setCount(count - 1)
  //   }
  // }

  }
  const setTime = ()=>{
    now = new Date().toLocaleTimeString()
    setClock(now)
  }
  setInterval(setTime,1000)


  return(
    // <>
    // <h1>SLOT MACHINE GAME</h1>
    // <Slotm a="😄" b="😄" c="😄"  />
    // <Slotm a="🍎" b="😄" c="🍌"  />
    // <Slotm a="😄" b="😄" c="😄"  />

    // </>
    <div>
        <h1 className="heading">DIGITAL CLOCK</h1>
        <h1>{clock}</h1>
        <div className="btnDiv">

        </div>
    </div>
  )
}

export default App