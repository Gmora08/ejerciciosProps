import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Comida extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <img src="" alt=""/>
        <p>Platillo: </p>
        <h3>Costo: </h3>
      </div>
    );
  }

}
