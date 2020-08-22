import React from 'react'
import TodoList from './Todo/TodoList'

function App() {
  const todos = [
    {id: 1, completed: false, title: 'React'},
    {id: 2, completed: false, title: 'Redux'},
    {id: 3, completed: false, title: 'Hooks'}
  ]

  return (
      <div className="wrapper">
        <h1>React practice</h1>

        <TodoList todos={todos} />

      </div>
  );
}

export default App;
