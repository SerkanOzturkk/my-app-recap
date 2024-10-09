import React, { Component } from "react";
import Fonksiyonel from "./Bilesenler/Fonksiyonel";
import KullaniciY from "./Bilesenler/KullaniciY";
import "./App.css";
import UyeEkle from "./Bilesenler/UyeEkle";
import Yasam from "./Bilesenler/Yasam";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Yasam yasam="test" />
        <hr />
        <UyeEkle />
        <hr />
        <KullaniciY />
      </div>
    );
  }
}
