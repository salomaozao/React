import React, { Component } from "react";

export default class NumbersSlider extends React.Component {
    state = {
        name: "Bob",
        age: "21",
        height: "180",
        check: false
    };

    Show = () => { console.log(this.state) }

    HandleInput = (event) => {
      console.log(event.target.name, event.target.value);
      
      if(event.target.name === "name"){
        this.setState({ name: event.target.value});
      } else if(event.target.name === "age"){
        this.setState({ age: event.target.value})
      } else if(event.target.name === "height"){
        this.setState({ height: event.target.value})
      }
    }

  render() {
    return (
      <div>
        Nome: <input name="name" onChange={this.HandleInput} />
        Idade: <input name="age" onChange={this.HandleInput} />
        Altura: <input name="height" onChange={this.HandleInput} /> <br />
        Mantenha me postado <input type="checkbox" onClick={this.HandleInput} />

        <br />
        {this.state.name}
        <br />
        {this.state.age}
        <br />
        {this.state.height}
        <br />
        {this.state.check}
        <br />

        <button>Enviar!</button>
      </div>
    );
  }
}
