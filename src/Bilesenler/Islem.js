import React, { Component } from "react";

export default class Islem extends Component {
  render() {
    return (
      <div>
        <label>
          Adiniz: <input name="ad" />
        </label>
        <hr />
        <p>
          Radio Button Kullanimi:
          <br />
          Cinsiyet:
          <label>
            <input type="radio" name="kadin" value="Kadin" />
            Kadin
          </label>
          <label>
            <input type="radio" name="erkek" value="Erkek" />
            Erkek
          </label>
        </p>
      </div>
    );
  }
}
