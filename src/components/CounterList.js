import React from 'react';
import {Counter} from './Counter';

const rangeGenerator = num => Array.from(Array(num).keys());

export const CounterList = props => {
  
  return(
    <ul>
      {
        rangeGenerator(props.counters).map((counter, i)=>(
          <li key={i}><Counter {...props}/></li>
        ))
      }
    </ul>
  );
};