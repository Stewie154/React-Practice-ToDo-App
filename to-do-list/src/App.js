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

  }

  //update state with new array including new todo
  // handleSubmit(e) {
  //   let text = e.target.value
  //   this.setState(prevState => {
  //     const updatedToDos = prevState.map(toDo => {
        
  //     })
  //   })
  // }


  render() {
    return (
      <div>
        <Header/>
        <Form/>
        <Container toDos={this.state.toDos}/>
      </div>
    )
  }
}

export default App;
