import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import Card from './components/Card';
import Footer from './components/Footer';
import characters from './characters';

class App extends Component {
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
  render() {
    return <div className="App" />;
  }
}

export default App;
