import React from "react";
import ReactDOM from "react-dom";
import {Counter} from './components/Counter';

import "./styles.css";

class App extends React.Component {
  state = {
    counter: 0
  }

  render() {
    return(
      <div className="app">
        <Counter {...this.state}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
