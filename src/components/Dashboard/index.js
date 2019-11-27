import React, {Component} from 'react';

import { Container, Moviments } from './styles';
import Card from '../Card';

export default class Dashboard extends Component {
  state = {
    moviments: 0,
    steps: 0
  };

  handleSetMoviment = e =>{
    this.setState({
      moviments: this.state.moviments + 1,
      steps: this.state.steps +1
    });
  }

  clearAll = e => {
    this.setState({
      steps: 0,
    });
  }

  render() {
    const { moviments, steps } = this.state;

    return (
      <Container>
        <Moviments>
          Movements: {moviments}
          Steps: {steps}
        </Moviments>
          <Card value={"1"} steps={steps} 
          incrementMoviment={this.handleSetMoviment} clearAll={this.clearAll}/>
          <Card value={"2"} steps={steps} 
          incrementMoviment={this.handleSetMoviment} clearAll={this.clearAll}/>
          <Card value={"3"} steps={steps} 
          incrementMoviment={this.handleSetMoviment} clearAll={this.clearAll}/>
          <Card value={"4"} steps={steps} 
          incrementMoviment={this.handleSetMoviment} clearAll={this.clearAll}/>
      </Container>
    );
  }
}
