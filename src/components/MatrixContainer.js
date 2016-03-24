import React, { Component, PropTypes } from 'react'

import Cell from './Cell'

export default class MatrixContainer extends Component {
  static propTypes = {
    cells: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  };
  render () {
    const { width, height, cells } = this.props
    const containerStyle = {
      width: `${width}px`,
      height: `${height}px`
    }
    return (
      <div className='matrix-container' style={containerStyle}>
        {
          cells.map((cell, idx) => {
            const { id, coordinates, text } = cell
            const key = `cell-${id}`
            return <Cell key={key} text={text} coordinates={coordinates} />
          })
        }
      </div>
    )
  }
}
