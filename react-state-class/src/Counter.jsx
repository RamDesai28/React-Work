
// export default function Counter(){
//     let count=0;

//     function incCount(){
//         count+=1;
//         console.log(count)
//     }
//for basic uderstanding

import { useState } from "react";
import { useEffect } from "react";


export default function Counter(){
    let [countx,setCountx]=useState(0);
    let [county,setCounty]=useState(0);
    // console.log("component is render")
    // console.log(`count=${count}`);

    let incCountx=()=>{
        // count= count+=1;
        setCountx(countx+1)
        // console.log(count)
        // setCount((currCount)=>{
        //     return currCount+1;
            
        // })
        // setCount((currCount)=>{
        //     return currCount+1;
            
        // })
    }
    let incCounty=()=>{
        // count= count+=1;
        setCounty(county+1)
        
    }

    useEffect(function print(){
        console.log("This is side eefect")
    },
    [countx]  //the function trigger only change in countx if cant provide in aaray it trigger in all coutx and couty
)

    return(
        <div>
            <h3>Count={countx}</h3>
            <button onClick={incCountx}>Increase Count</button>
            <h3>Count={county}</h3>
            <button onClick={incCounty}>Increase Count</button>
        </div>
    )
}