import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
    const {name="default"}=props
  return (
   <>
   <button>{name}</button>
   </>
  )
}
 
// Button.defaultProps={
//     name:"default",
// }
Button.propTypes={
    name:PropTypes.string,
}
export default Button;