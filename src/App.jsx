import React from "react"
import './App.css'

function App() {
    
    const [click, setClick] = React.useState()

    const next = () => {
        click = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
}
    
//   const [count, setCount] = React.useState(0);
//   const increment = () => setCount(prev => prev + 1)
//   const decrement = () => count > 0 && setCount(prev => prev - 1)

  return (
    <div className="App">
    {/* <button onClick={decrement}> Decrement</button> */}
    {/* <p>{count}</p> */}
    <div style = {{width: "100px", height: "100px", background: App(next)}}></div>
    <button onClick={next} style = {{color: "black", backgroundColor: "green"}}>Click</button>
    </div>
  )
}

export default App





