import React from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Container from './Components/Container/Container'
import ToDo from './Components/ToDo/ToDo'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentText: '',
      toDos: [
        {
        id: 0,
        task: 'drink coffee',
        completed: true
      },
      {
        id: 1,
        task: 'learn React',
        completed: false
      },
      {
        id: 2,
        task: 'Go for a walk',
        completed: false
      }
    ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const text = e.target.value 
    console.log(text)
    this.setState(prevState => {
      return {...prevState, currentText: text}
    })
  }


  // update state with new array including new todo
  handleSubmit(e) {
    e.preventDefault()
    let text = this.state.currentText
    this.setState(prevState => {
      const newToDo = {
        id: 5,
        task: text,
        completed: false
      }
      console.log(newToDo)
      const updatedToDos = prevState.toDos.concat(newToDo)
      console.log(updatedToDos)
      return {...prevState, toDos: updatedToDos}
    })
  }


  render() {
    return (
      <div>
        <Header/>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <Container toDos={this.state.toDos}/>
      </div>
    )
  }
}

export default App;
