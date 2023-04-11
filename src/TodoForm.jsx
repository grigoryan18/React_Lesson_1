import { useState } from "react"

export default function TodoForm({onAdd}){
  const [text, setText] = useState("")
  return (
    <form  onSubmit={(e) =>{
      e.preventDefault();
      onAdd(text)
      setText("")
    }}>
      <input className="border m-5" type="text" value= {text} onChange={(e) => {
        setText(e.target.value)
      }}/>
      <button className="text-xl font-mono bg-green-600 px-5 text-white rounded-3xl">Add</button>
    </form>
  )
}