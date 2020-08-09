import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Slider from "./components/ImageSlider";

class App extends Component {
  state = {
    isHeaderHidden: false,
    isVisible: true,
    pagenum: 0,
  };

  hideSlider = () => {
    this.setState({
      isVisible: false,
    });
  };

  render() {
    const txt = this.state.isVisible ? "Estou Escondido!" : "Apareci!";

    if (this.state.pagenum === 0) {
      return (
        <div className="App">
          <div className={!this.state.isHeaderHidden ? "shown" : "hidden"}>
            <Header />  
          </div>
          <br />
          <button onClick={this.hideSlider}>Mostrar Counter</button>
          <button
            onClick={() => {
              this.setState({ isVisible: true });
            }}
          >
            Mostrar Slider
          </button>
          <div>{txt}</div>
          {this.state.isVisible ? <Slider /> : <Counter initialCount={1000} />}

          <button
            onClick={() => {
              this.setState({
                pagenum: (this.state.pagenum += 1), 
              });
            }}
          >
            Mudar de página
          </button>
        </div>
      );
    } else if (this.state.pagenum === 1) {
      return <div className="App">
        Página 1
        
        <button
            onClick={() => {
              this.setState({
                pagenum: (this.state.pagenum = 0), 
              });
            }}
          > Mudar de página
        </button>
      </div>;
    }
    return null;
  }
}

export default App;

//Functions do not have a state
