import React, { Component } from 'react';
import PokemonContainer from './PokemonContainer';
import SelectedPokemonContainer from './SelectedPokemonContainer';
import ActivePokemonContainer from './ActivePokemonContainer';


class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      allPokemon: [],
      selectedPokemon: null,
      activePokemon: null
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(pokemon => this.setState({
      allPokemon: pokemon.results
    }))
  }

  handlePokeClick = (pokeObj) => {
    fetch(pokeObj.url)
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        selectedPokemon: pokemon
      })
    })
  }

  handleCatch = (pokeObj) => {
    this.setState({
      selectedPokemon: null, 
      activePokemon: pokeObj
    })

  }

  handleRun = () => {
    console.log('fuck this poke')
    this.setState({
      selectedPokemon: null
    })
  }

  handleRelease = () => {
    this.setState({
      activePokemon: null
    })
  }


  render() { 
    return ( 
      <div>
       
        {this.state.selectedPokemon ? 
        <SelectedPokemonContainer 
          pokemon={this.state.selectedPokemon}
          handleCatch={this.handleCatch}
          handleRun={this.handleRun}
        />
        : null }
        
        {this.state.activePokemon ?
        <ActivePokemonContainer 
          pokemon={this.state.activePokemon}
          handleRelease={this.handleRelease}
        />
        : 
        <PokemonContainer 
          allPokemon={this.state.allPokemon}
          handlePokeClick={this.handlePokeClick}
        />
      }
      </div>
        
     );
  }
}
 
export default MainContainer;