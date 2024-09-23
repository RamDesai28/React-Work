import { useState } from "react"

export default function LudoBoard(){
    let [moves,setMoves]=useState({blue:0,yellow:0,red:0,green:0}) // create Object Pass information

     let updateBlue =()=>{  //one Method
         moves.blue +=1;  //increse the value by 1
         console.log(`moves.blue=${moves.blue}`)
         setMoves({...moves}) //spred the object and create copy and re render
     }
     
     let updateYellow=()=>{  //one Method
        moves.yellow +=1;  //increse the value by 1
        console.log(`moves.yellow=${moves.yellow}`)
        setMoves({...moves})
     }

     return(
        <div>
            <p>Lets Begin</p>
            <div className="board">
               <p>blue moves={moves.blue}</p>
               <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
               <p>Yellow moves={moves.yellow}</p>
               <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
               <p>Red moves=</p>
               <button style={{backgroundColor:"red"}}>+1</button>
               <p>Green moves=</p>
               <button style={{backgroundColor:"green"}}>+1</button>
            </div>
        </div>
    )
}