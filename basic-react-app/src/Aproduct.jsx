import "./Aproduct.css"

function Aproduct({title,price,features,}){
    //  console.log(features)
    // let isDiscount =price > 25000 ? "Discount of 5%":"";
    let styles={backgroundColor:"yellow"}
    return(
        <>
        <div className="Aproduct" style={styles}>
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
            <p>{features}</p>
            {/* <p>Discount of 5%</p> */}

            {/* Adding Condition */}
            {price > 25000 ?<p>"Discount of 5%"</p> :null }
            {/* {price > 25000 &&<p>"Discount of 5%"</p>} */}
             {/* ternary statement  in javascript   */}
        </div>
        </>
        
    )

    
   
}
export default Aproduct;