import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import Card from './components/Card';
import Footer from './components/Footer';
import characters from './characters';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    score: 0,
    topScore: 0,
    shake: false,
    userMessage: {
      message: 'Click an image to begin play!',
      correct: false,
      incorrect: false
    },
    characters: this.shuffle(characters)
  };

  alreadyChosen = [];

  /**
   * A Fisher-Yates shuffle to ensure that grid is unique on each shuffle.
   *
   * @see https://bost.ocks.org/mike/shuffle/
   * @see https://www.frankmitchell.org/2015/01/fisher-yates/
   *
   * @param list
   * @returns {*}
   */
  shuffle(list) {
    let pick;
    let current;
    let remaining = list.length;

    while (remaining !== 0) {
      pick = Math.floor(Math.random() * remaining--);

      current = list[remaining];
      list[remaining] = list[pick];
      list[pick] = current;
    }

    return list;
  }

  handleClick(id) {
    console.log('App.handleClick() id:', id);
    const characters = this.shuffle(this.state.characters);
    let highScore = this.state.topScore;

    if (this.alreadyChosen.includes(id)) {
      this.alreadyChosen.splice(0);
      return this.setState({
        score: 0,
        shake: true,
        characters: characters,
        userMessage: {
          message: 'You guessed incorrectly!',
          correct: false,
          incorrect: true
        }
      });
    } else {
      this.alreadyChosen.push(id);

      const currentScore = this.state.score + 1;

      if (currentScore > highScore) {
        highScore = currentScore;
      }

      return this.setState({
        score: currentScore,
        shake: false,
        topScore: highScore,
        characters: characters,
        userMessage: {
          message: 'You guessed correctly!',
          correct: true,
          incorrect: false
        }
      });
    }
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
