import React, { Component } from "react";

export default class Yasam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deger: 1071,
    };
    console.log("Türkiye");
  }

  componentDidMount = () => {
    console.log("componentDidMount = Mount islemi tamamlandi");
    this.setState({
      deger: 1453,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("Update metodu state'in guncellemesi bitince calisti");
  };
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate calisti");
    return true;
  }

  render() {
    console.log("Mount işlemi render ile yapilirken");
    return <div></div>;
  }
}
