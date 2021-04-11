import React, {Component} from 'react'
import './App.css'
import Card from'./components/layout/Card'
import Propriedades from './components/basico/Propriedades'
import Mundo from './components/basico/Mundo'

class App extends Component {
  render() {
    return(
      <div className='App'>
      <h1>Exemplos de React</h1>
    
      <div className='Cards'>

          <Card titulo='Propriedades'>
              <Propriedades nome="Homer" sobrenome="jay Simpson" idade={38}/>
          </Card>
    
          <Card titulo='Olá mundo!'>
              <Mundo />
          </Card>
    
    </div>
  </div>
    ) 
  }
}
export default App;