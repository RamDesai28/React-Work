import Aproduct from "./Aproduct";

function ProductTab(){
    let options=["Hi-tech", "durable","fast"];  //string render
    // let options2={a: "hi-tech" , b: "durable" , c:"fast"};
    return(
        <>
         <Aproduct title="Phone" price={15000} features={options}/>
         <Aproduct  title="Laptop" price={75000}/>
         <Aproduct  title="Pen" price={15}/>
        </>
    )
}
export default ProductTab;