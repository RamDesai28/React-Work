import "./Navigation.css"
import Button from '@mui/material/Button';


export default function Navigation(){
    return(
       
            <nav className="container">
                <div>
                       <img src="" alt="" />
                </div>
                
                    <ul>
                        <li>Menu</li>
                        <li>Location</li>
                        <li>About</li>
                        <li>Content</li>
                    </ul>
                
                <Button variant="contained">Login</Button>
            </nav>
        
    )
}