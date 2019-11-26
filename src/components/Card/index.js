import React, { Component } from 'react';

import { Container, Front, Back } from './styles';

export default class Card extends Component{

  render() {

    console.log(this.props);

    return (
      <Container >
        <Front>
          FRONT: { this.props.flip }
        </Front>
        <Back>
          Value : { this.props.value }
        </Back>
      </Container>
    );
  }
}
