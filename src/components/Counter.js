import React from 'react';

export class Counter extends React.Component {
  state = {
    counter: 0
  }

  doIncrementer = amount => this.setState({ counter: this.state.counter + amount });

  increment = () => this.doIncrementer(1);
  decrement = () => this.doIncrementer(-1);
  
  render() {
    return(
      <React.Fragment>
        <button onClick={this.increment}>+</button>
        <p>{this.state.counter}</p>
        <button onClick={this.decrement}>-</button>
      </React.Fragment>
    );
  }
}
  
