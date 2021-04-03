import React from 'react'
import './styles/Form.css'
class Form extends React.Component {
    render() {
        return (
            <form>
                <div className="container">
                    <input id="task" type="text" placeholder="Enter your task..."/>
                    <input id="submit-btn" type="submit"/>
                </div>
            </form>
        )
    }
}

export default Form
