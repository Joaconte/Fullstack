import { useState } from 'react'

const App = () => {

  const [ counter, setCounter ] = useState(0)


  /*Cuando se llama a la función de modificación de estado setCounter, 
  React vuelve a renderizar el componente, lo que significa que el 
  cuerpo de la función del componente se vuelve a ejecutar:*/
  
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  /*Cada vez que setCounter modifica el estado, hace que el componente se vuelva
   a renderizar. El valor del estado se incrementará nuevamente después de un 
   segundo y esto continuará repitiéndose mientras la aplicación esté en ejecución.*/

   console.log('rendering...', counter)
   
  return (
    <div>{counter}</div>
  )
}

export default App