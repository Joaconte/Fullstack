import { useState } from 'react'

const App2 = () => {
  const [value, setValue] = useState(10)

  /* Para pasar parametros a una funcion, la cual a su vez es 
  pasada como parámetro, se tiene que hacer una funcion que 
  devuelve otra función */

  const hello = (who) => {
    const handler = () => {
      console.log('hello', who)
    }
    return handler
  }

  // O simplificada 
  
  const hello2 = (who) => () => {
    console.log('hello', who)
  }

  return (
    <div>
      {value}
      <button onClick={hello('world')}>world</button>
      <button onClick={hello('react')}>react</button>
      <button onClick={hello('function')}>function</button>
    </div>
  )
}

//Con setters

const App = () => {
    const [value, setValue] = useState(10)
  
    const setToValue = (newValue) => () => {
      console.log('value now', newValue)  // imprime el nuevo valor en la consola
      setValue(newValue)
    }
  
    return (
      <div>
        {value}
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(0)}>reset</button>
        <button onClick={setToValue(value + 1)}>increment</button>
      </div>
    )
  }

export default App