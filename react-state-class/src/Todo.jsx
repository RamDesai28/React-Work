import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
  let [todos,setTodos]=useState([{task:"sample task",id:uuidv4()}])
  let [newTodo,setNewTodo]=useState("")

   let addNewTask=()=>{
    console.log("We have to add new task in Todo")
    setTodos ((preTodos)=>{
        return (
            [...preTodos,{task:newTodo,id:uuidv4()}]
        )
    })
    setNewTodo("")
   }

   let updateTodoValue=(event)=>{
        // console.log(event.target.value); return the value in text box
        setNewTodo(event.target.value)
   }

   let deleteTodo=(id)=>{
    // console.log("Task Deleted")
    // console.log(id)
    // let copy =todos.filter((todo)=> todo.id != id) it delete the task and print remaining array on console
    // console.log(copy)
    setTodos ((preTodos)=>todos.filter((preTodos)=> preTodos.id != id));


   }


   let upperCaseAll=()=>{
    setTodos(
        todos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase()
            }
        })
    )
   }


    return(
        <div>
            <input  placeholder="Add Task" value={newTodo} 
            onChange={updateTodoValue} ></input>

            <br /><br />
            
            <button onClick={addNewTask}>Add Task</button>
            <br />
            
             <hr /><hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                       <span>{todo.task}</span> 
                       &nbsp;  &nbsp;  &nbsp; 
                       <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}

            </ul>
            <br />
             <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    )
}