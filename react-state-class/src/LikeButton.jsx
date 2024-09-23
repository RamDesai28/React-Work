import { useState } from "react"

export default function LikeButton(){
    // let clicked=()=>{
    //     console.log("Clicked") 
    // }

    let [isLiked,setIsLiked]=useState(false); //initial state will false bcoz empty heart
    let toggleLike=()=>{
        // let newVal=!isLiked
        // console.log(newVal)
        setIsLiked(!isLiked) //meaning of toggle is value of isLike if true then false if false then true
    }
    let likeStyle={color:"red"}


    return(
        <div>
            <p onClick={toggleLike}>
                { isLiked ?(
                  <i className="fa-solid fa-heart" style={likeStyle}></i>
                ):(
                    <i className="fa-regular fa-heart"></i> 
                )
                }
            
            </p>
            
        </div>
    )
}