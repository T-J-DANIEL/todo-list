import { useState, useEffect } from "react"
import Alert from "./Alert"
import Todo from "./Todo"
function App() {
  const getLocalStorage = () => {
    let list = localStorage.getItem("todos")
    if (list) {
      return (list = JSON.parse(localStorage.getItem("todos")))
    } else {
      return []
    }
  }
  const [currentTodo, setCurrentTodo] = useState("")
  const [todos, setTodos] = useState(getLocalStorage())
  const [editing, setEditing] = useState(false)
  const [editIndex, setEditIndex] = useState()
  const [deleted, setDeleted] = useState(false)
  //functions
  //delete function
  const deleteTodo = (todoIndex) => {
    setTodos((prevTodos) =>
      prevTodos.filter((el, index) => {
        return index !== todoIndex
      })
    )
    setDeleted(true)
    setTimeout(()=>{setDeleted(false)},1000)
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    console.log(localStorage.getItem("todos"))
  }, [todos])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
        {(editing||deleted) && <Alert message={`${editing?"editing":"item deleted"}`} editing={editing} deleted={deleted}/>}
      </header>
      <main>
        {
          //take input and save to an array of todos
          //generate a todo component for each todo with input prop and delete+edit features
          //delete removes from array
          //edit changes form to edit mode and alters current todo when you click the button finally
          //how to edit?
          //edit button in todo component, this activates "edit mode" where in the input box contents is the text from the todo being edited. the button will change the todo when clicked and then we go back to "add todo" mode where the button switches back to adding function
          //how do we achieve this?
          //in the todo component
          //we have an edit button, this button will activate "edit mode" and supply the index to be edited
          //in the app
          //we are put in edit mode by the edit component the add button becomes an edit button and can now carry out the edit on the selected index, that is it will take all todo values
        }
        <form>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Description"
            value={currentTodo}
            onChange={(e) => {
              //typing edits button resets mode
              setCurrentTodo(e.target.value)
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              if (editing) {
                if (editIndex) {
                  //edit todo function
                  //edit todo with passed currenttodo value
                  setTodos((prevTodos) => {
                    let newTodos = [...prevTodos]
                    newTodos[editIndex] = currentTodo
                    return newTodos
                  })
                }
                setCurrentTodo("")
                setEditing(false)
                setEditIndex()
              } else {
                //add todo function
                setTodos((prevTodos) => {
                  return [...prevTodos, currentTodo]
                })
                setCurrentTodo("")
              }
            }}
          >
            {editing ? "Save Changes" : "Add item"}
          </button>
        </form>
        <section>
          {
            //map todos
            todos.map((el, index) => {
              return (
                <Todo
                  key={index}
                  todoData={el}
                  todoIndex={index}
                  setEditIndex={setEditIndex}
                  setEditing={setEditing}
                  deleteTodo={deleteTodo}
                  // editTodo={editTodo}
                  setCurrentTodo={setCurrentTodo}
                  editing={editing}
                />
              )
            })
          }
        </section>
      </main>
    </div>
  )
}

export default App
