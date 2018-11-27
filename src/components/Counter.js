import React from 'react';

export const Counter = props => (
  <React.Fragment>
    <button onClick={props.increment}>+</button>
    <p>{props.counter}</p>
    <button onClick={props.decrement}>-</button>
  </React.Fragment>
)