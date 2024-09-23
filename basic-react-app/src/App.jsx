// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import './App.css'
import Title from './title.jsx';
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx';
import Amazon from './Amazon.jsx';
import Amzproduct from './Amzproduct.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';


// function Title (){
//   return <h1>I am The Title</h1>
// }

function  App () {
   return (
   // <div>
   //   <h1>Hello World</h1>
   //  <p>Inside App Component We Have </p>
   //  <Title/> 
   //  <msgBox userName="bobby" textColor="blue"/>
   //  <ProductTab/>
    

   // </div>
   <>
   {/* <h1>Hello World</h1>
    <p>Inside App Component We Have </p> */}
    {/* <Title/>  */}
     <MsgBox userName="bobby" textColor="blue"/>
    <ProductTab/> 
    <h2>Blocbuster Deals! Shop NOW</h2>
    <Amzproduct/>
    <Button/>
    <Form/>
   </>
   )
}
export default App;