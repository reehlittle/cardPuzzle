import React, { Component } from 'react';

import { Container, CardFlip, Front, Back } from './styles';

export default class Card extends Component{
  state = {
    match: false,
    flip: false
  }

  componentDidUpdate(prevProps) {
    const match = this.state.match;

    //If it is the 3th and its not a macth, wait for 1,5 s and close
    if (this.props.steps >= 2 && !match) {
      setTimeout(() => {
        this.props.clearAll();
        this.setState({
          flip: false
        });
      }, 1500);
    }
  }

  handleFlip = e => {
    const { match, flip} = this.state;
    const steps = this.props.steps;

    //it is already a match or its already fliped ?
    if(!match && !flip && steps <= 1){
      this.setState({
        flip: true
      });
      //do the match herer
      this.props.incrementMoviment();
     
    }
    return;
  }

  render() {
    const { flip } = this.state;

    return (
      <Container onClick={this.handleFlip}>
        <CardFlip className={ flip ? "rotate" : ""}>
          <Front>
            FRONT: { flip }
          </Front>
          <Back>
            Value : { this.props.value }
          </Back>
        </CardFlip>
      </Container>
    );
  }
}
