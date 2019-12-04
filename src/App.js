import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import '../src/components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(props) {
    super(props)
    this.state = {
      myTodos: [
      {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false,
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false,
      }
    ],
    formValue: {
      task: '',
    }}
  }

  change = (e) => {
    e.preventDefault()
    this.setState({
      formValue: {
        ...this.state.formValue,
        task: e.target.value,
      }
    })
  }

  done = id => {
    
    this.setState({
      myTodos: this.state.myTodos.map(todo => {
        if (todo.id === id) {
          console.log(this.state.myTodos);
          return {
            ...todo,
            completed: !todo.completed
          }
          } else {
            return todo
            console.log(this.state.myTodos);
          }
      })
    })
  }

  add = (e) => {
    e.preventDefault()

    const newTodo = {
      task: this.state.formValue.task,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      myTodos: [...this.state.myTodos, newTodo]
    })
  }

  clearComplete = (e) => {
    e.preventDefault()

    let oldArray = this.state.myTodos
    let newArray = oldArray.filter((currentItem, index) => {
      return currentItem.completed === false
    })
    this.setState({
      ...this.state,
      myTodos: newArray
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.myTodos} done={this.done} clearComplete={this.clearComplete} add={this.add} change={this.change} />
      </div>
    );
  }
}

export default App;
