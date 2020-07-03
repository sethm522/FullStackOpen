import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
      <p>You are {props.age}</p>
    </div>
  )
}

const App = () => {
  const name = 'Seth'
  const age = 30
  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name="Seth" age="30"/>
      <Hello name={name} age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))