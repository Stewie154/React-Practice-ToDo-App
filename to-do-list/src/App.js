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
      index: 0,
      toDos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  //updates text in state (used for new todo when added)
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
        id: this.state.index,
        task: text,
        completed: false
      }
      const updatedToDos = prevState.toDos.concat(newToDo)
      console.log(this.state.index)
      console.log(this.state.index)
      return {...prevState, toDos: updatedToDos, index: prevState.index + 1}
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
