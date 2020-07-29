import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor(){
    super();
    this.signs = ['rock', 'scissors', 'paper']
    this.state = {
      playerOne: 'rock',
      playerTwo: 'rock',
      madeChoice: true,
      pickCard: () => {
    if(this.state.madeChoice){
      return(
        <div className='player1'>
          <h1>You</h1>
          <button type='button' onClick={() => this.playGame('rock')}>Rock</button>
          <button type='button' onClick={() => this.playGame('paper')}>Paper</button>
          <button type='button' onClick={() => this.playGame('scissors')}>Scissors</button>
        </div>
      )
    }
    if(!this.state.madeChoice){
      return(
        <div className='player1'>
          <h1>You Picked</h1>
          <PlayerCard sign={this.state.playerOne}></PlayerCard>
        </div>
    )
    }
  }
    }
  }

  playGame = (choice) => {

    this.setState({
      playerOne: (choice !== undefined) ? choice : this.signs[Math.floor(Math.random() * 3)],
      playerTwo: this.signs[Math.floor(Math.random() * 3)],
      madeChoice: !this.state.madeChoice,
    })
  }

  decideWinner = () => {
    const {playerOne, playerTwo} = this.state;
    let who = '';
    if(playerOne === 'rock' && playerTwo === 'scissors'){
      who = 'You Won';
    } else if(playerOne === 'scissors' && playerTwo === 'paper'){
      who = 'You Won';
    } else if(playerOne === 'paper' && playerTwo === 'rock'){
      who = 'You Won';
    } else if(playerOne === playerTwo){
      who = 'Its a Tie';
    } else {
      who = 'Player 2 Wins';
    }
    return who;
  }

  

  render() {
    return(
      <div>
        <div className='players'>
          {this.state.pickCard()}
          <div className='player2'>
            <h1>Player 2</h1>
            <PlayerCard sign={this.state.playerTwo}></PlayerCard>
          </div>
        </div>
        <div className='winner'><h1>{this.decideWinner()}</h1></div>
        <button type='button' onClick={this.playGame}>Play the Game</button>
      </div>
    )
  }
}

export default Game;