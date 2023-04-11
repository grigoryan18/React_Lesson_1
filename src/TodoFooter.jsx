export default function TodoFooter({todos, onClearCompleted}){
  const completedSize = todos.filter((todo) => todo.isCompleted).length
  return (
    <div className="m-5 font-mono">
      <span>{completedSize}/{todos.length} Completed</span>
      <button className="bg-red-600 ml-6 p-0.5 rounded-3xl text-white px-0.5	" onClick={onClearCompleted}>Clear Completed</button>
    </div>
  )
}