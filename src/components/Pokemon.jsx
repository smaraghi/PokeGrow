import React from 'react'

const Pokemon = (props) => {
  return (
    <div className="ui column">
      <div className="ui card" onClick={() => props.handlePokeClick(props.pokemon)}>
        {props.pokemon.name} 
        
      </div>
    </div>
  )
}

export default Pokemon