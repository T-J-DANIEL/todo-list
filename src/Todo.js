
const Todo = ({
  todoData,
  todoIndex,
  deleteTodo,
  setEditing,
  setEditIndex,
  setCurrentTodo,
  editing,
}) => {
  return (
    <div className="todo-item">
      {/* <span>Item no:{todoIndex}</span>
      <br /> */}
      <div className="todo">{todoData}</div>
      <div className="button-container">
        <button
          className={`fn-button delete`}
          onClick={(e) => {
            e.preventDefault()
            deleteTodo(todoIndex)
          }}
          disabled={editing}
        >
          Delete
        </button>
        <button
          className={`fn-button edit`}
          onClick={(e) => {
            e.preventDefault()
            setEditing(true)
            setEditIndex(todoIndex)
            setCurrentTodo(todoData)
          }}
        >
          Edit
        </button>
      </div>
    </div>
  )
}

export default Todo