import { useState } from "react";


export default function CommentForm(){


    let [formData,setFormData]=useState({
        username:"",
        remark:"",
        rating:5
    })

    let handleInputChange=(event)=>{
        // let fieldName=event.target.name;
        // let newVal=event.target.value;
        // console.log(fieldName)
        //  console.log(newVal)
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}
        })

    }

    let handleSubmit=(event)=>{
         console.log(formData)
         event.preventDefault()
         setFormData({  //used for reset the value
            username:"",
            remark:"",
            rating:5
        })
    }


     

  return(
    <div>
        <h4>Commet Box</h4>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">User Name</label>
            <input type="text" placeholder="Username" 
            value={formData.username}  
            onChange={handleInputChange} name="username"/>
            <br /><br />
             
             <label htmlFor="remark">Remark</label>
            <textarea name="remark" id="remark"  value={formData.remark}
             onChange={handleInputChange} 
             placeholder="Add Few Remark" > Add Few Remark
             </textarea>
            <br /><br />

            <label htmlFor="rating">Rating</label>
            <input type="number" placeholder="rating" min={1} max={5} 
            value={formData.rating} 
            onChange={handleInputChange} id="rating" name="rating"/>
            <br /><br />

            <button onSubmit={handleSubmit}>Submit</button>

        </form>
     </div>
    )
}