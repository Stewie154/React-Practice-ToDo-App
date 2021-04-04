import React from 'react'
import ToDo from '../ToDo/ToDo'
import './styles/Container.css'
class Container extends React.Component {
    render (props) {
        const display = this.props.toDos.map(todo => {
            return <ToDo 
                todo={todo}
                key={todo.index}
                deleteToDo={this.props.deleteToDo}
            />
        })
        return (
            <div className="to-dos-container">
                {display}
            </div>
        )
    }
}

export default Container