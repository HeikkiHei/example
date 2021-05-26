import React, { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.title}
    </button>
  )
}


const Display = props => <div>{props.value}</div>


const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} title='thousand' />
      <Button handleClick={() => setToValue(0)} title='reset' />
      <Button handleClick={() => setToValue(value + 1)} title='increment' />
    </div>
  )
}

export default App