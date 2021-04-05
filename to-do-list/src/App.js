import React from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Container from './Components/Container/Container'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentText: '',
      index: 0,
      toDos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
  }

  //updates text in state (used for new todo when added)
  handleChange(e) {
    const text = e.target.value 
    this.setState(prevState => {
      return {...prevState, currentText: text}
    })
  }

  // update state with new array including new todo object
  handleSubmit(e) {
    e.preventDefault()
    let text = this.state.currentText
    this.setState(prevState => {
      const newToDo = {
        id: this.state.index,
        task: text,
        completed: false
      }
      const updatedToDos = prevState.toDos.concat(newToDo)
      return {...prevState, toDos: updatedToDos, index: prevState.index + 1}
    })
  }

  deleteToDo(id) {
    this.setState(prevState => {
      const filteredToDos = prevState.toDos.filter(prevToDo => prevToDo.id !== id)
      return {...prevState, toDos: filteredToDos}
    })
  }

  toggleComplete(id) {
    console.log(id)
    this.setState(prevState => {
      console.log(prevState.toDos)
      const updatedToDos = prevState.toDos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      console.log(updatedToDos)
      return {...prevState, toDos: updatedToDos}
    })
  }


  render() {
    return (
      <div>
        <Header/>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <Container 
          toDos={this.state.toDos} 
          deleteToDo={this.deleteToDo}
          toggleComplete={this.toggleComplete}
        />
      </div>
    )
  }
}

export default App;
