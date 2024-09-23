import Price from "./Price";
import "./Amazon.css"

function Amazon({title,idx}){
    let oldPrices=["12000","10000","14000","600"];
    let newPrices=["6000","6000","10000","300"]
    let description=[
       ["High DPI","5 programmable button"],
       [ "intutive surface","designed for iPad Pro"],
       ["designed for iPad pro","intutive surface"],
        ["wireless","optical oriantation"],
    ]
    return( 
        <div className="Amazon">
            <h4>{title}</h4>
            <p>{description[idx] [0]}</p>
            <p>{description[idx] [1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>

        </div>

    )
}
export default Amazon;