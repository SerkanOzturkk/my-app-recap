import React from "react";
import PropTypes from "prop-types";

function Fonksiyonel(props) {
  return (
    <div>
      <h1>Merhaba Türkiye!!</h1>
      <br />
      <h4>{props.baslik}</h4>
    </div>
  );
}

Fonksiyonel.propTypes = {
  baslik: PropTypes.string.isRequired,
};

Fonksiyonel.defaultProps = {
  baslik: "Baslik Girmeyi Unuttun",
};

export default Fonksiyonel;
