import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Persona extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <p>Name: </p>
        <p>Age: </p>
        <button onClick={() => ('')}>Dí Hola</button>
      </div>
    );
  }

}
