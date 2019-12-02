import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'

class TodoList extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div>
          <Todo todos={this.props.todos} done={this.props.done}/>
          <TodoForm add={this.props.add} change={this.props.change} clearComplete={this.props.clearComplete} />
        </div>
      );
    }
  }
  
  export default TodoList;
  
