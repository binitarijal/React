import React from 'react'
import Button from './Button'
import Contact from './Contact'
const Home = () => {
  return (
    <div>

        <h1>i am home</h1>
        <p>home paragraph</p>
        <Button name="Home Button"/>
        <Button name="login"/>
        <Button name="hi"/>
        <Button />
        <Button name={2}/>
        <Button name={3}/>
        <Contact  title="i am  home page title" paragraph="imma paragraph"/>
        <Contact  title="i am  home  title" paragraph="paragraph"/>
        <Contact />
    </div>
  )
}

export default Home