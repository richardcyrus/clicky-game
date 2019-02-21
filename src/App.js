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
    this.handleMessageAnimationEnd = this.handleMessageAnimationEnd.bind(this);
    this.state = {
      score: 0,
      topScore: 0,
      shake: false,
      message: 'Click an image to begin play!',
      flash: false,
      characters: this.shuffle(characters)
    };
  }

  alreadyChosen = [];

  /**
   * Fisher-Yates shuffle.
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
    const characters = this.shuffle(this.state.characters);
    let highScore = this.state.topScore;

    if (this.alreadyChosen.includes(id)) {
      this.alreadyChosen.splice(0);
      return this.setState({
        score: 0,
        shake: true,
        characters: characters,
        message: 'You guessed incorrectly.',
        flash: 'incorrect'
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
        message: 'You guessed correctly!',
        flash: 'correct'
      });
    }
  }

  handleMessageAnimationEnd() {
    this.setState({
      flash: false
    });
  }

  render() {
    const { shake } = this.state;

    return (
      <div className="clicky-game">
        <Navbar
          message={this.state.message}
          currentScore={this.state.score}
          topScore={this.state.topScore}
          flash={this.state.flash}
          onNavbarAnimationEnd={this.handleMessageAnimationEnd}
        />
        <Jumbotron />
        <Container>
          <div className={'card-flex' + (shake ? ' shake' : '')}>
            {this.state.characters.map((character) => (
              <Card
                handleClick={this.handleClick}
                id={character.id}
                key={character.id}
                image={character.image}
              />
            ))}
          </div>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
