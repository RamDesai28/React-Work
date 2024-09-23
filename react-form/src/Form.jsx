import { useState } from "react";


export default function Form(){

    let [formData,setFormData]=useState({
        fullName:"",
        username:""
    })

     let handleInputChange=(event)=>{
        let fieldName=event.target.name;
        let newVal=event.target.value;
        // console.log(fieldName)
        // console.log(newVal)
        setFormData((currData)=>{   //
            currData[fieldName]=newVal //computed property name
            return{...currData}
        })
     }

    let  handleSubmit=(event)=>{
        event.preventDefault() //input will not cleared,input khali rahnar nhi  
        console.log(formData)
        setFormData({
            fullName:"",
            username:""
        })//input will cleared  submit kelyavr input clear  honar
     }

    //  let [fullName,setFullName]=useState("bob")
    //  let [username,setUserName]=useState("bob")

    //  let handleNameChange=(event)=>{
    //     // console.log(event.target.value)
    //     setFullName(event.target.value)
    //  }

    //  let handleUserName=(event)=>{
    //     // console.log(event.target.value)
    //     setUserName(event.target.value)
    //  } instade of all this we can create one handler

    return(
       <form action="" onSubmit={handleSubmit}>
        <label htmlFor="fullname">Full Name</label>
        <input type="text" 
        id="fullname"
        placeholder="Enter Your Name" 
        value={formData.fullName} onChange={handleInputChange}
         name="fullName"/>
        {/* <button>Submit</button> */}
        <br /><br />

        <label htmlFor="username">UserName</label>
        <input type="text" 
        id="username"
        placeholder="Enter Your Name" 
        name="username"
        value={formData.username} onChange={handleInputChange}/>
        <button>Submit</button>
       </form>
    )
}