import { useState } from "react"
// import "./Lottery.css"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winningSum=15}){

    let [ticket,setTicket]=useState(genTicket(n)); //three number array
     let isWinning=sum(ticket)===winningSum

     let buyTicket=()=>{
        setTicket(genTicket(n));
     }
    return(
        <div>
            <h1>Lottery Game!!</h1>
            {/* <div  className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>   
                
                
            </div> */}
            <Ticket ticket={ticket}/>
            
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations,you Won!!!!"}</h3>
            
        </div>
    )
}