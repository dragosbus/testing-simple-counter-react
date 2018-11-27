import React from "react";
import ReactDOM from "react-dom";
import {CounterList} from './components/CounterList';

import "./styles.css";

class App extends React.Component {
  state = {
    counters: 1
  }

  addCounter = () => this.setState({counters: this.state.counters + 1});

  render() {
    return(
      <div className="app">
        <button onClick={this.addCounter}>Add Counter</button>
        <CounterList
          {...this.state}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
