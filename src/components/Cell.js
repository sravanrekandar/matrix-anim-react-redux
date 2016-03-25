import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'

export default class Cell extends Component {
  static propTypes = {
    coordinates: PropTypes.object.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired
  };
  static animationPreset = {
    stiffness: 190,
    damping: 25
  };
  constructor (props) {
    super(props)
    this.getCellStyle = this.getCellStyle.bind(this)
  }
  render () {
    const { coordinates, text } = this.props
    const { getCellStyle } = this
    const style = getCellStyle(coordinates.x, coordinates.y)

    return (
      <Motion defaultStyle={{top: 0, left: 0}} style={style}>
        {
          (interpolated) => {
            return (
              <div className='cell' style={interpolated}>
                {text}
              </div>
            )
          }
        }
      </Motion>
    )
  }
  getCellStyle (x, y) {
    const { animationPreset } = this
    return ({
      top: spring(x, animationPreset),
      left: spring(y, animationPreset)
    })
  }
}
