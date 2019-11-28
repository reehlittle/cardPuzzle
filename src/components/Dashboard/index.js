import React, {Component} from 'react';

import { Container, Moviments, Game, RightBox } from './styles';
import Card from '../Card';

export default class Dashboard extends Component {
  state = {
    moviments: 0,
    steps: 0,
    prevValue: '',
    matchs: [],
    cards: []
  };

  getCards() {
    return  [
      {
        id:1,
        value: 1
      },
      {
        id:2,
        value: 2
      },
      {
        id:3,
        value: 3
      },
      {
        id:4,
        value: 4
      },
      {
        id:5,
        value: 1
      },
      {
        id:6,
        value: 2
      },
      {
        id:7,
        value: 3
      },
      {
        id:8,
        value: 4
      },
      {
        id:9,
        value: 5
      },
      {
        id:10,
        value: 6
      },
      {
        id:11,
        value: 5
      },
      {
        id:12,
        value: 6
      },
    ];
  }
  componentDidMount() {
    const cards = this.getCards();

    this.setState({
      cards
    });
  }

  componentDidUpdate() {
    if(this.state.matchs.length === this.state.cards.length/2 ) {
      setTimeout(function () {
        alert("YOU WIN!!");
      }, 1000);
      this.newGame();
    }
  }

  handleIncrementMoviment = e =>{
    this.setState({
      moviments: this.state.moviments + 1,
      steps: this.state.steps +1,
      prevValue: e
    });
  }

  handleFlipBackAll = e => {
    this.setState({
      steps: 0,
      prevValue: ''
    });
  }

  handleMatch = e => {
    const matchs = this.state.matchs;
    this.setState({
      matchs: [...matchs, e]
    });
  }

  newGame() {
    this.setState({
      moviments: 0,
      steps: 0,
      prevValue: '',
      matchs: [],
      cards: this.getCards()
    });
  }

  render() {
    const { cards,moviments, steps, prevValue, matchs } = this.state;

    return (
      <Container>
        <RightBox>

        </RightBox>
        <Game>
          {cards.map(card => (
            <Card key={card.id}
              value={card.value}
              prevValue={prevValue}
              matchs={matchs}
              steps={steps}
              incrementMoviment={this.handleIncrementMoviment}
              clearAll={this.handleFlipBackAll}
              valueMatch={this.handleMatch}
            />
          ))}
        </Game>
        <Moviments>
          <div class="box box-l">
            <p class="player">Moviments</p>
            <div id="playerOneCard" class="score-card">
              <p id="playerOneScore" class="score" content="0">{moviments}</p>
            </div>
          </div>
        </Moviments>
      </Container>
    );
  }
}
