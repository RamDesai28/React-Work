import "./Navigation.css"
import Button from '@mui/material/Button';


export default function Hero(){
    return(
        <main className="hero container">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>A shoe is an item of footwear intended to protect and comfort the human foot. Though the human foot can adapt to varied terrains and climate conditions, it is 
                 vulnerable, and shoes provide protection.
                </p>
                <div>
                 <Button variant="outlined">Categori</Button>
                 <Button variant="contained" href="#contained-buttons">  Shop Now!!! </Button>
                 </div>
            </div>
            <div>
                <img src="/src/download.jpeg" alt="" />  
                {/* image of shoessss */}
            </div>
        </main>
    )
}