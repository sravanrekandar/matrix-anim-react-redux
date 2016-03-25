import React, { Component, PropTypes } from 'react'

import Cell from './Cell'

export default class MatrixContainer extends Component {
  static propTypes = {
    cells: PropTypes.object.isRequired,
    containerMeasurements: PropTypes.object.isRequired
  };
  render () {
    const { containerMeasurements, cells } = this.props
    const containerStyle = {
      width: `${containerMeasurements.get('width')}px`,
      height: `${containerMeasurements.get('height')}px`
    }
    
    return (
      <div className='matrix-container' style={containerStyle}>
        {
          cells.toJS().map((cell, idx) => {
            const { id, coordinates, text } = cell
            const key = `cell-${id}`
            return <Cell key={key} text={text} coordinates={coordinates} />
          })
        }
      </div>
    )
  }
}
