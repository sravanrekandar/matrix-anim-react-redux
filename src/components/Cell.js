import React, { Component, PropTypes } from 'react'

export default class Cell extends Component {
  static propTypes = {
    coordinates: PropTypes.object.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  };
  render () {
    const { coordinates, text } = this.props
    return (
      <div className='cell' style={coordinates}>
        {text}
      </div>
    )
  }
}
