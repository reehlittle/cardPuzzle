import React, {Component} from 'react';

import { Container, Moviments } from './styles';
import Card from '../Card';

export default class Dashboard extends Component {
  state = {
    moviments: 0,
    flip: false,
  };

  flipCard= async e =>{
    console.log('Flip:' + this.state.flip);

    this.setState({
      flip: true
    })
  }

  render() {
    const { moviments, flip } = this.state;
    const value = 'CARD 1';

    return (
      <Container>
        <Moviments>
          Movements: {moviments}
        </Moviments>
        <div onClick={this.flipCard}>
          <Card value={value} flip={flip}></Card>
        </div>
        <Card value={'CARD 2'} flip={true}></Card>
      </Container>
    );
  }
}
