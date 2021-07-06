import React, {useState} from 'react';
import './App.css';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
      setGood(good+1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
}

const handleBadClick = () => {
  setBad(bad+1)
}

const average = (good+bad+neutral)/3
const posPercent = (100*good)/(good+bad+neutral)

const Statistics = (props) => {
  if(!props.good & !props.bad & !props.neutral){
    return (
      <div>No feedback given</div>
    )
  }

  return (
    <div>
    <h2>Statistics</h2>
    <table cellPadding="5" width="100%">
      <Statistic text="Good" value={props.good}/>
      <Statistic text="Neutral" value={props.neutral}/>
      <Statistic text="Bad" value={props.bad}/>
      <Statistic text="All" value={props.good+props.neutral+props.bad}/>
      <Statistic text="Average" value={props.average}/>
      <Statistic text="Positive" value={props.posPercent+"%"}/>
      </table>
    </div>
  )
}

const Statistic = (props) => {
  return(
  <div>
  <tr>
  <td>{props.text}</td> 
  <td >{props.value}</td>
  </tr>
  </div>
  )
}

const Button = (props) => {
  return(
    
      <button onClick={props.handleClick}>{props.text}</button>
    
  )
  
}

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text = "Good" handleClick={handleGoodClick}></Button>
      <Button text = "Neutral" handleClick={handleNeutralClick}></Button>
      <Button text = "Bad" handleClick={handleBadClick}></Button>
      <Statistics good={good} bad={bad} neutral={neutral} average={average} posPercent={posPercent}></Statistics>
      
    </div>
  )
}

export default App;
