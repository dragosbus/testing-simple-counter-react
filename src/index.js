import React from "react";
import ReactDOM from "react-dom";
import {Counter} from './components/Counter';

import "./styles.css";

class App extends React.Component {
  state = {
    counter: 0
  }

  doIncrementer = amount => this.setState({counter: this.state.counter + amount});

  increment = () => this.doIncrementer(1);
  decrement = () => this.doIncrementer(-1);

  render() {
    return(
      <div className="app">
        <Counter 
          {...this.state}
          increment={this.increment}
          decrement={this.decrement}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
