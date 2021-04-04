import React from 'react'
import './styles/ToDo.css'
class ToDo extends React.Component {
    render(props) {
        return (
            <div className="to-do">
                <div className="text">
                    <p className={this.props.completed ? 'completed' : null}>{this.props.task}</p>
                </div>
                <div className="btns">
                    <button className="complete">Complete</button>
                    <button className="delete">Delete</button>
                </div>
            </div>
        )
    }
}

export default ToDo