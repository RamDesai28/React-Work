
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./Form.css"

export default function Form(){
    return(
        <section className='container'>
                    <div className='btn'>
                            <Button variant="contained" href="#contained-buttons"> VIA SUPPORT CHAT </Button>
                            <Button variant="contained" href="#contained-buttons">VIA CALL </Button>
                            <Button  variant="contained" href="#contained-buttons" >VIA  Email FORM </Button>
                           
                    </div>
                    <div className='btn1'>
                    <Button  variant="contained" href="#contained-buttons" >VIA  Email FORM </Button>
                    
                    </div>

                    <div className=''>

                             <TextField id="outlined-basic" label="Name" variant="outlined" />
                             <br />
                             <TextField id="outlined-basic" label="Email" variant="outlined" />
                             <br />
                             <TextField id="outlined-basic" label="Text" variant="outlined" />
                     </div>
        </section>
    )
}