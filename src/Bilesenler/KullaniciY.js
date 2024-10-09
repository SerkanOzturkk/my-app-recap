import React, { Component } from "react";
import PropKKullanimi from "./PropKKullanimi";
import PropKullanimiConsumer from "./context";

export default class KullaniciY extends Component {
  render() {
    return (
      <PropKullanimiConsumer>
        {(value) => {
          const { kullaniciY } = value;
          return (
            <div>
              {kullaniciY.map((propKullanimi) => {
                return (
                  <PropKKullanimi
                    id={propKullanimi.id}
                    bir={propKullanimi.bir}
                    iki={propKullanimi.iki}
                    uc={propKullanimi.uc}
                  />
                );
              })}
            </div>
          );
        }}
      </PropKullanimiConsumer>
    );
  }
}
