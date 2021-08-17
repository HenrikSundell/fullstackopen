import React, { useState } from 'react'

const getMaxIndex = (arr) => arr.indexOf(arr.reduce((acc, item) => (item > acc ? item : acc), arr[0]))

const getRandomInt = (min, max) =>
  {
    return Math.floor(Math.random() * (max - min)) + min
  }

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const mostVotedIndex = getMaxIndex(votes)
  const selectNew = () => setSelected(getRandomInt(0, anecdotes.length))

  const voteSelected = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  return (
    <div>
    
      <h1>Anectdote of the day</h1>
      <p>{anecdotes[selected]}<br/>has {votes[selected]} votes</p>
      <button onClick={voteSelected}>vote</button>
      <button onClick={selectNew}>next Anectdote</button>
      
      <h1>Anectdote with most votes</h1>
      <p> {anecdotes[mostVotedIndex]}<br/>has {votes[mostVotedIndex]} votes</p>
    </div>
  )
}

export default App