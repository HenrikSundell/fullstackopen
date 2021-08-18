import React from 'react'

const Header = (props) => {
    return (
        <h1>{props.course.name}</h1>
    )
  }
  
  const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercises}</p>
    )
  }
  
  const Content = (props) => {
    return (
      <div>
        {props.course.parts.map((part)=> <Part key={part.id} part={part}/>)}
      </div>
    )
  }
  
  const Total = (props) => {
    const sum = (props.course.parts.map((part) => part.exercises).reduce((sum, part) => sum + part))
    return (
      <div>
        <h4>Number of exercises {sum} </h4>
      </div>
    )
  }
  
  const Course = (props) => {
  
    return (
      <div>
        <Header course={props.course} />
        <Content course={props.course}/>
        <Total course={props.course}/>
      </div>
    )
  }

  export default Course