import React from 'react'
import ToDo from '../ToDo/ToDo'
import './styles/Container.css'
class Container extends React.Component {
    render () {
        return (
            <div className="to-dos-container">
                <ToDo 
                    task="Drink coffee and that"
                />
                <ToDo 
                    task="Feed the cat"
                />
                <ToDo 
                    task="Go for a walk"
                />
                <ToDo 
                    task="Watch some telly"
                />
                <ToDo 
                    task="Cook some dinner"
                />
            </div>
        )
    }
}

export default Container