import { useState } from 'react'

export const Content = ({ person }) => {

  const [ name, setName ] = useState('Jesse');
  const [ count, setCount ] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count)
  }

  const handleClick2 = (dude) => {
    console.log(`You clicked on ${dude}`)
  }

  return (
    <main>
      <p>Hello {name}!</p>
      <button onClick={handleClick}>Button1</button>
      <button onClick={() => {handleClick2('Jesse')}}>Button2</button>
    </main>
  )
}
