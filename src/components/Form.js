import React, { Component, PropTypes } from 'react'
export default class Form extends Component {
  static propTypes = {
    rowCount: PropTypes.number.isRequired,
    columnCount: PropTypes.number.isRequired,
    onRowCountChange: PropTypes.func.isRequired,
    onColumnCountChange: PropTypes.func.isRequired,
    onStartOver: PropTypes.func.isRequired
  };
  constructor (props) {
    super(props)

    this.changeHandler = this.changeHandler.bind(this)
    this.rowChangeHandler = this.rowChangeHandler.bind(this)
    this.columnChangeHandler = this.columnChangeHandler.bind(this)
  }

  render () {
    const {
      rowCount,
      columnCount,
      onStartOver
    } = this.props

    const { rowChangeHandler, columnChangeHandler } = this
    return (
      <div className='text-center'>
        <label>
          Rows:{' '}
          <input
            type='number'
            min='1'
            ref='rowCount'
            defaultValue={rowCount}
            onChange={rowChangeHandler} />
        </label>
        {' '}
        <label>
          Columns:{' '}
          <input
            type='number'
            min='1'
            ref='columnCount'
            defaultValue={columnCount}
            onChange={columnChangeHandler} />
        </label>
        {' '}
        <button
          ref='reset'
          onClick={onStartOver}>Start Again</button>
      </div>
    )
  }

  changeHandler (refName) {
    const { onRowCountChange, onColumnCountChange } = this.props
    const value = Number(this.refs[refName].value)
    if (refName === 'rowCount') {
      onRowCountChange(value)
    } else if (refName === 'columnCount') {
      onColumnCountChange(value)
    }
  }

  rowChangeHandler () {
    this.changeHandler('rowCount')
  }

  columnChangeHandler () {
    this.changeHandler('columnCount')
  }
}
