import React from 'react'

export const Content = ({ person }) => {

  const handleClick = () => {
    console.log("Button Clicked!")
  }

  const handleClick2 = (dude) => {
    console.log(`You clicked on ${dude}`)
  }

  return (
    <main>
      <p>Hello {person}!</p>
      <button onClick={handleClick}>Button1</button>
      <button onClick={() => {handleClick2('Jesse')}}>Button2</button>
    </main>
  )
}
