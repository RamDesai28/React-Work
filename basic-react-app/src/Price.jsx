export default function Price({oldPrice,newPrice}){
    let oldStyls={
        textDecorationLine:"Line-through",
    }
    let newStyls={
        fontWeight:"bold",
    }
    let styles={
        backgroundColor:"yellow",
        height:"30px",
        width:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",

    }
    return(
        <div style={styles}> 
            <span style={oldStyls}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span style={newStyls}>{newPrice}</span>
        </div>
    );
}