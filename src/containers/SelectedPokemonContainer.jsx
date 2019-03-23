import React, { Component } from 'react';

class SelectedPokemonContainer extends Component {
  render() { 
    return ( 
      <div>
        <div>
          <h3>{this.props.pokemon.name}</h3>
        </div>
        <div>
          <img alt="pokemon" src={this.props.pokemon.sprites.front_default} />
        </div>
        <div>
          <button onClick={() => this.props.handleCatch(this.props.pokemon)}>Catch!</button>
          <button onClick={this.props.handleRun}>Run Away!</button><br/>
        </div><br/>
      </div>
     );
  }
}
 
export default SelectedPokemonContainer;