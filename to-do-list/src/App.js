import React from 'react'
import './App.css';
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import Container from './Components/Container/Container'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      toDos: []
    }
    
  }



  render() {
    return (
      <div>
        <Header/>
        <Form/>
        <Container>

        </Container>
      </div>
    )
  }
}

export default App;
