const Course = ({courses}) => {
    return(
      <div>
     { courses.map(course=>{
        return (
            <div>
        <Header text={course.name}></Header>
        <Content parts={course.parts}></Content>
        </div>
        )
      })}
          
      </div>
    )
  }


  const Header = ({text}) => {
    console.log({text})
    return (
      <div>
        <h1> {text} </h1>
      </div>
    )
  }

  const Content = ({parts}) => {
    return(
      <div>
      {parts.map(part => <p key={part.id}><Part part={part}/></p>)}
      <Total parts = {parts}/>
      </div>
    )
    
  }
  const Part = ({part}) => {
    return(
      <p>{part.name} {part.exercises}</p>
    )
  }

  const Total = ({parts}) => {
    let num_ex = parts.map(part=> part.exercises)
    
    return(
      <p><b>Total of {num_ex.reduce((a,b)=>a+b,0)} exercises</b></p>
    )
  }

export default Course