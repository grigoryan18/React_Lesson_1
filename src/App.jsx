import React, { useState } from "react";
import "./index.css";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import TodoForm from "./TodoForm";


export default function App() {
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "Learn JS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false,
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false,
    },
  ]);


  return (
    <div className= " m-48 h-72 w-1/2 text-justify pl-36 bg-cyan-200">
      <TodoForm  onAdd={(text) => {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          text:text,
          isCompleted: false
        }
      ])
      }}/>
      <TodoList todos={todos} 
      onDelete={(todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id))
      }}
      onChange={(newTodos) => {
        setTodos(todos.map((todo) => {
          if(todo.id === newTodos.id){
            return newTodos
          }
          return todo
        }))
      }}/>
      <TodoFooter todos={todos} onClearCompleted={() =>{
       setTodos(todos.filter(item => !item.isCompleted))
    }}/>
      <div></div>
    </div>
  );
}
