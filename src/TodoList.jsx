import TodoItem from "./TodoItem"

export default function TodoList({todos, onDelete, onChange}) {
  return (
    <div className="m-5 font-mono ">
      {
        todos.map((todo) => {
          return (
            <TodoItem 
            key={todo.id} 
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}/>
          )
        })
      }
    </div>
  ) 
}