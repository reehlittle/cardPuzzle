import React, { Component } from 'react';

import { Container, CardFlip, Front, Back } from './styles';

export default class Card extends Component{
  state = {
    flip: false
  }

  componentDidUpdate(prevProps) {
    //If it is the 3th and its not a macth, wait for 1,5 s and close
    if (this.props.steps >= 2) {
      setTimeout(() => {
        this.props.clearAll();
        this.setState({
          flip: false
        });
      }, 1005);
    }

    //look on matchs array, see if it is in there
    const charExist = this.props.matchs.filter(value => {
      return value === this.props.value;
    });

    if(charExist.length && !this.state.flip) {
      this.setState({
        flip: true,
      });
    };
  }

  handleFlip = e => {
    const { flip} = this.state;
    const { steps, value, prevValue }  = this.props;

    //it is already fliped ?
    if(!flip && steps <= 1){
      this.setState({
        flip: true
      });
      //is ti a match?
      if(value === prevValue) {
        this.props.valueMatch(value);
      }
      this.props.incrementMoviment(value);
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
