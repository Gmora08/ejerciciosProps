import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Colors extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        {
          [].map((color) => (
            <p key={color}>{color}</p>
          ))
        }
      </div>
    );
  }

}
