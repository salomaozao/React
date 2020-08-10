import React, { Component } from "react";

export default class NumbersSlider extends React.Component {
    state = {
        name: "Bob",
        age: "21",
        height: "180",
        rememberMe: false
    };

    HandleInput = (event) => {
      console.log(event.target.name, event.target.value);
      
      if(event.target.name === "name"){
        this.setState({ name: event.target.value})
      } else if(event.target.name === "age"){
        this.setState({ age: event.target.value})
      } else if(event.target.name === "height"){
        this.setState({ height: event.target.value})
      } else if(event.target.name === "rememberMe"){
        this.setState({ rememberMe: event.target.isChecked})
      }
    }

    HandleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state)
    }

  render() {
    return (
      <form method="GET" onSubmit={this.HandleSubmit}>
        Nome: <input type="input" name="name" 
          value={this.state.name} onChange={this.HandleInput} />

        Idade: <input type="number" name="age" 
          value={this.state.age} onChange={this.HandleInput} />

        Altura: <input type="number" name="height" value={this.state.height} onChange={this.HandleInput} /> <br />
        Mantenha me postado <input type="checkbox" name="rememberMe" value={this.state.rememberMe} onChange={this.HandleInput} />

        <br />
        {this.state.name}
        <br />
        {this.state.age}
        <br />
        {this.state.height}
        <br />
        {this.state.rememberMe}
        <br />

        <button type="submit">Enviar!</button>
      </form>
    );
  }
}
