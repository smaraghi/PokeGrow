import React from 'react'

const PokeForm = (props) => {
  return (
    <form>
    <input type="text" />
    <button type="submit" onClick={props.handleSubmit} >Name Your Poke!</button>
    </form>
  )
}

export default PokeForm;