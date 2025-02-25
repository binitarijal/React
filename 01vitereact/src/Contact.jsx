import React from 'react'

const Contact = (props) => {
    const{title="yoyo",paragraph="kitkit"}=props
  return (
    <>
    <div>
        <h1>{title}</h1>
        <h3>{paragraph}</h3>
    </div>
    </>
  )
}

export default Contact