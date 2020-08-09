import React from "react";
//ToDo:
// fix this logic

export default class Counter extends React.Component {
  state = {
    imgs: [
      "https://www.telegraph.co.uk/content/dam/health-fitness/2019/02/08/pinchinghand_trans_NvBQzQNjv4BqdODRziddS8JXpVz-XfUVR2LvJF5WfpqnBZShRL_tOZw.jpg?imwidth=1400",
      "https://a-static.mlcdn.com.br/618x463/celular-galaxy-a-30-s-64gb-dual-sm-a07gzkrzto-samsung/gazinshop/7546/6cfc3104661299b8bdc5ea6b7de34b4b.jpg",
      "https://image.freepik.com/fotos-gratis/muitos-baloes-coloridos-no-ceu-azul-conceito-de-amor-no-verao-e-namorados-lua-de-mel-de-casamento-imagens-de-estilo-de-efeito-vintage_1253-1119.jpg",
    ],
    idx: 0,
  };

  nextImg = () => {
    var img = this.state.idx;

    if (img === 2) {
      img = 0;
    } else {
      img += 1;
    }

    this.setState({
      idx: img,
    });
  };

  previousImg = () => {
    var img = this.state.idx;

    if (img === 0) {
      img = 2;
    } else {
      img -= 1;
    }

    this.setState(
      {
        idx: img,
      },
      () => {}
    );
  };

  render() {
    return (
      <div>
        <p>count: {this.state.idx}</p>
        <button onClick={this.nextImg}>Próxima imagem</button>
        <button onClick={this.previousImg}>Imagem Anterior</button>
        <br />
        <img src={this.state.imgs[this.state.idx]} width={100} height={100} />
      </div>
    );
  }
}
