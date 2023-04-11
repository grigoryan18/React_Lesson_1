export default function TodoItem({todo, onChange, onDelete}){
  return(
    <div>
      <label className="flex justify-start gap-3 ">
        <input  type="checkbox" checked={todo.isCompleted} onChange={(e) => {
          onChange({
            ...todo,
            isCompleted: e.target.checked
          })
        }}/>
        {todo.text}
        <button className="ml-4 px-3.5 text-red-600" onClick={() => {
          onDelete(todo)
        }}>X</button>
      </label>
    </div>
  )
}