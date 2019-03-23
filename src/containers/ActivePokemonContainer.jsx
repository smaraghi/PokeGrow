import React, { Component } from 'react';
import PokeForm from '../components/PokeForm';


class ActivePokemonContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      nickname: this.props.pokemon.name,
      stats: this.props.pokemon.stats,
      enemyPokemon: null
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      nickname: e.target.parentElement.firstChild.value
    })
  }

  handleTrain = () => {
    let arr = [...this.state.stats]
   
    for(let i = 0; i < 6; i++){
      let stat = this.state.stats[i]
      stat.base_stat += 2
      arr.splice(i, 1, stat)
    }

    this.setState({
      stats: arr
    })
  }

  handleEnemyPokemon = () => {
    let num = Math.floor(Math.random() * (151 - 1)) + 1
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
    .then(res => res.json())
    .then(pokemon => this.setState({enemyPokemon: pokemon}))
  }

  gameLogic = () => {
    let userScore = this.state.stats.reduce( (total, s) => total + s.base_stat)
    let enemyScore = this.state.enemyPokemon.stats.reduce((total, s) => total + s.base_stat)
    return userScore > enemyScore ? true : false
  }

  render() {
    const poke = this.props.pokemon
    return (
      <React.Fragment>
      <div className="active-pokemon">
        <div>
          <h3>{this.state.nickname}</h3>
        </div>
        <div>
          <img alt="pokemon" src={poke.sprites.front_default} />
        </div>
        <div>
          <ul>{this.state.stats.map((s, index) => <li> {s.stat.name} {s.base_stat}</li>)}</ul>
        </div>
        <br/>
        <div>
        <button onClick={this.handleTrain}>Train</button>
        </div>
        <button onClick={this.handleEnemyPokemon}>Battle</button>
        <br/>
        <PokeForm 
          nickname={this.state.nickname} 
          handleSubmit={this.handleSubmit}
        />
        <div>
          <br/><br/>
          <button onClick={this.props.handleRelease}>Release!</button>
        </div>
      </div>
      {this.state.enemyPokemon ? 
      <div className="enemy-pokemon">
        <div>
          <h3>{this.state.enemyPokemon.name}</h3>
        </div>
        <div>
          <img alt="pokemon" src={this.state.enemyPokemon.sprites.front_default} />
        </div>
        <div>
          {this.gameLogic() ? 
          <div>You Win!</div> : 
          <div>You Lose!</div>}
        </div>
      </div>
      : null }
      </React.Fragment>
    );
  }
}
 
export default ActivePokemonContainer;