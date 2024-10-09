import React, { Component } from "react";
import PropTypes from "prop-types";
import PropKullanimiConsumer from "./context";

export default class PropKKullanimi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  ilkEvent = (sayi, event) => {
    //console.log(this);
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  ilkSil = (dispatch, event) => {
    const { id } = this.props;
    console.log(this);
    console.log(id);
    dispatch({ type: "SIL", payload: id });
  };

  componentWillUnmount() {
    console.log("Unmount islemi yapildi");
  }

  render() {
    const { id, bir, iki, uc } = this.props;
    const { isVisible } = this.state;
    return (
      <PropKullanimiConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-7 mb-3">
              <div
                className="card"
                style={
                  isVisible
                    ? { backgroundColor: "#bacf91", color: "white" }
                    : null
                }
              >
                <div className="card-header d-flex justify-content-between">
                  <h2
                    className="d-inline"
                    onClick={this.ilkEvent.bind(this, 1071)}
                  >
                    {bir}
                  </h2>
                  <i
                    onClick={this.ilkSil.bind(this, dispatch)}
                    className="far fa-trash-alt"
                    style={{ cursor: "pointer" }}
                  ></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">{iki}</p>
                    <p className="card-text">{uc}</p>
                  </div>
                ) : (
                  <p className="card-text">"Visible kismi false"</p>
                )}
              </div>
            </div>
          );
        }}
      </PropKullanimiConsumer>
    );
  }
}

PropKKullanimi.propTypes = {
  bir: PropTypes.string.isRequired,
  iki: PropTypes.string.isRequired,
  uc: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

PropKKullanimi.defaultProps = {
  bir: "String deger gir lütfen!!!",
  iki: "String deger gir lütfen!!!",
  uc: "String deger gir lütfen!!!",
};
