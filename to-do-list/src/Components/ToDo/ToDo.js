import React from 'react'
import './styles/ToDo.css'
class ToDo extends React.Component {
    render(props) {
        return (
            <div className="to-do">
                <div className="text">
                    <p className={this.props.todo.completed ? 'completed' : null}>{this.props.todo.task}</p>
                </div>
                <div className="btns">
                    <button className="complete">Complete</button>
                    <button className="delete" onClick={(event) => this.props.deleteToDo(this.props.todo.id)}>Delete</button>
                </div>
            </div>
        )
    }
}

export default ToDo