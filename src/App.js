import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'React'},
    {id: 2, completed: false, title: 'Redux'},
    {id: 3, completed: false, title: 'Hooks'},
    {id: 4, completed: false, title: 'React JS + TypeScript(+ React Router DOM)'},
    {id: 5, completed: false, title: 'React Native'}
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  function removeTodo (id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo: removeTodo}}>
        <div className="wrapper">
          <h1>React practice</h1>
          <AddTodo onCreate={addTodo} />
          {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>no todos </p>}
          

        </div>
      </Context.Provider>
  );
}

export default App;
