import Amazon from "./Amazon.jsx"

function Amzproduct(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    };
    return(
        <div style={styles} >
           <Amazon title="Logitech MX" idx={0} />
           <Amazon title="Apple Pencil" idx={1}  />
           <Amazon title="Zebronics" idx={2}  />
           <Amazon title="Petronics Toad" idx={3}  />
        </div>
    )
}
export default Amzproduct