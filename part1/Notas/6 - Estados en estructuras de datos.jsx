import { useState } from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  // { ...clicks } crea un nuevo objeto que tiene 
  // copias de todas las propiedades del objeto clicks
  // y si especificás, esa propiedad va a tener un 
  // valor en particular
  
  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  //SIMPLIFICADO
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App