import React from 'react'
import './styles/ToDo.css'
class ToDo extends React.Component {
    render(props) {
        return (
            <div className="to-do">
                <div className="text">
                    <p className={this.props.todo.completed ? 'completed' : ''}>{this.props.todo.task}</p>
                </div>
                <div className="btns">
                    <button 
                        onClick={() => this.props.toggleComplete(this.props.todo.id)}
                        className="complete"
                    >{this.props.todo.completed ? 'Uncheck' : 'Check'}</button>
                    <button className="delete" 
                        onClick={() => this.props.deleteToDo(this.props.todo.id)}
                    >Delete</button>
                </div>
            </div>
        )
    }
}

export default ToDo