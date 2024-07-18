import { useState } from 'react'

const Button = ({text, handleClick}) =>{
  return ( 
    <button onClick = {handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) =>{
  return ( 
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const StatisticsHead = () =>{
  return ( 
    <h1>statistics</h1>
  )
}

const Statistics = ({good, neutral, bad, all, average, positive}) => {
  
  const StatisticsBody = () =>{
  
    if (all == 0) return(
      <div>No feedback given</div> 
    )
  
    else return ( 
      <table>
        <tbody>
          <StatisticLine value = {good} text = 'good'/>
          <StatisticLine value = {neutral} text = 'neutral'/>
          <StatisticLine value = {bad} text = 'bad'/>
          <StatisticLine value = {all} text = 'all'/>
          <StatisticLine value = {average} text = 'average'/>
          <StatisticLine value = {positive + '%'} text = 'positive'/>
        </tbody>
      </table>
    )
  }

  return(
    <div>
      <StatisticsHead/>
      <StatisticsBody/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const increseGood = () => {
    const newGood = good +1
    setGood(newGood)
    setAllAverageAndPositive(newGood, bad)
  
  }
  const increseNeutral = () => {
    setNeutral(neutral + 1)
    setAllAverageAndPositive(good, bad)
  }

  const increseBad = () => {
    const newBad = bad +1
    setBad(newBad)
    setAllAverageAndPositive(good, newBad)
  }

  function setAllAverageAndPositive (good, bad){
    const newAll = all +1
    setAll(newAll)
    setAverage(( good - bad )/ newAll)
    setPositive(100*good/newAll)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick = {increseGood} text = 'good' />
      <Button handleClick = {increseNeutral}  text = 'neutral' />
      <Button handleClick = {increseBad}  text = 'bad' />
      <Statistics good = {good} neutral = {neutral}
      bad = {bad} all = {all} average = {average}
      positive = {positive}
      />
    </div>
  )
}

export default App