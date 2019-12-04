import React from 'react'

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render (props) {
        return(
            <>
            <form>
                <input onChange={this.props.change} type='text' name='todo-text' placeholder='New Todo'>
                
                </input>

                <button type='submit' onClick={this.props.add}>Add todo</button>
                <button onClick={this.props.clearComplete} >Clear completed</button>
            </form>
            </>
        )
    }
}