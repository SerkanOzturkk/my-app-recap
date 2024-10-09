import React, { Component } from "react";
import posed from "react-pose";
import uniqid from "uniqid";
import PropKullanimiConsumer from "./context";

const Box = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: "block",
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: "none",
    },
  },
});

export default class UyeEkle extends Component {
  state = {
    visible: true,
    ad: "",
    soyad: "",
    yas: "",
  };
  gorunurlukDegistir = (e) => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  degerDegistir = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  uyeTamKayit = (dispatch, e) => {
    e.preventDefault();
    const { ad, soyad, yas } = this.state;
    const yeniUye = {
      id: uniqid(),
      bir: ad,
      iki: soyad,
      uc: yas,
    };
    dispatch({ type: "UYE_EKLE", payload: yeniUye });
  };

  render() {
    const { visible, ad, soyad, yas } = this.state;
    return (
      <PropKullanimiConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div>
              <div className="col-md-8 mb-3">
                <button
                  onClick={this.gorunurlukDegistir}
                  className="btn btn-danger mb-3"
                >
                  {visible ? "Formu Gizle" : "Formu Göster"}
                </button>
                <Box pose={visible ? "visible" : "hidden"}>
                  <div className="card">
                    <div className="card-header">
                      <h2>Uye Ekle</h2>
                    </div>

                    <div className="card-body">
                      <form onSubmit={this.uyeTamKayit.bind(this, dispatch)}>
                        <div className="form-group">
                          <label htmlFor="ad">Ad</label>
                          <input
                            type="text"
                            name="ad"
                            id="idAd"
                            placeholder="Adinizi Giriniz"
                            className="form-control"
                            value={ad}
                            onChange={this.degerDegistir}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="soyad">Soyad</label>
                          <input
                            type="text"
                            name="soyad"
                            id="idSoyad"
                            placeholder="Soyadinizi Giriniz"
                            className="form-control"
                            value={soyad}
                            onChange={this.degerDegistir}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="yas">Yas</label>
                          <input
                            type="text"
                            name="yas"
                            id="idYas"
                            placeholder="Yasinizi Giriniz"
                            className="form-control"
                            value={yas}
                            onChange={this.degerDegistir}
                          />
                        </div>
                        <button className="btn btn-primary" type="submit">
                          Kaydet
                        </button>
                      </form>
                    </div>
                  </div>
                </Box>
              </div>
            </div>
          );
        }}
      </PropKullanimiConsumer>
    );
  }
}
