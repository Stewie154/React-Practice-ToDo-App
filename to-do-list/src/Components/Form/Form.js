import React from 'react'
import './styles/Form.css'
class Form extends React.Component {
    render(props) {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="container">
                    <input onChange={this.props.handleChange} name="task" id="task" type="text" placeholder="Enter your task..."/>
                    <input id="submit-btn" type="submit" value="Add To-do"/>
                </div>
            </form>
        )
    }
}

export default Form
