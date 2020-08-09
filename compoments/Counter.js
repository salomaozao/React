import React from "react";

export default class Counter extends React.Component {
  state = {
    count: this.props.initialCount // Dificulty getting props or not
  };

  increment = () => {   
    this.setState({
      count: this.state.count + 10
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 10
    });
  };

  changeToZero = () => {
      this.setState({
          count: this.props.initialCount
      });
  }

  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.changeToZero}>ToInitial</button>
      </div>
    );
  }
}

//.setState() works very like .innerHTML