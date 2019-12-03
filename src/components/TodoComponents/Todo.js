import React, { useState } from 'react';


export default class Todo extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div>
        {this.props.todos.map(todo => (
            <div className='todo-card' key={todo.id} style={todo.completed ? { textDecoration: 'line-through' } : null}>
                <a href='#' key={todo.id} onClick={ () => this.props.done(todo.id)}>
                    {todo.task}
                </a>
            </div>
        ))}
        </div>
      )
    }
}
