function handleClick(event){
    console.log("Hello")
    console.log(event)

}

// function printBye(){
//     console.log("Bye")
// }

function handleMouseOver(){
    console.log("Bye")
}

export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            {/* <p onClick={printBye}>This Para is for event Demoo Plese Click On me</p> */}
             <p onMouseOver={handleMouseOver}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
                 sapiente non tempore tempora nemo corrupti natus dignissimos eaque, laborum 
                 doloribus cumque ullam vero! Impedit, reiciendis sequi dolores nisi dolorem molestiae.
             </p>
        </div>
    )
}