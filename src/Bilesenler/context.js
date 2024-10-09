import React, { act, Component } from "react";
import axios from "axios";
const PropKullanimiContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SIL":
      return {
        ...state,
        kullaniciY: state.kullaniciY.filter(
          (PropKullanimi) => action.payload !== PropKullanimi.id
        ),
      };
    case "UYE_EKLE":
      return {
        ...state,
        kullaniciY: [...state.kullaniciY, action.payload],
      };
    default:
      return state;
  }
};

export class PropKullanimiprovider extends Component {
  state = {
    kullaniciY: [],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  componentDidMount = async () => {
    const cevap = await axios.get("http://localhost:3000/uyeler");
    this.setState({
      kullaniciY: cevap.data,
    });
  };

  render() {
    return (
      <PropKullanimiContext.Provider value={this.state}>
        {this.props.children}
      </PropKullanimiContext.Provider>
    );
  }
}

const PropKullanimiConsumer = PropKullanimiContext.Consumer;

export default PropKullanimiConsumer;
