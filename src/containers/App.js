import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Header, Footer, Form, MatrixContainer, Description } from '../components'
import { startOver, rowCountChange, columnCountChange } from '../actions/matrix'

class App extends Component {
  static propTypes = {
    rowCount: PropTypes.number.isRequired,
    columnCount: PropTypes.number.isRequired,
    cells: PropTypes.object.isRequired,
    containerMeasurements: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };
  constructor (props) {
    super(props)

    this.onRowCountChange = this.onRowCountChange.bind(this)
    this.onColumnCountChange = this.onColumnCountChange.bind(this)
    this.onStartOver = this.onStartOver.bind(this)
  }
  componentDidMount () {
    const { dispatch } = this.props
    dispatch(startOver(dispatch))
  }
  render () {
    const { onRowCountChange, onColumnCountChange, onStartOver } = this
    const { cells, rowCount, columnCount, containerMeasurements } = this.props

    return (
      <div>
        <Header />
        <Form
          rowCount={rowCount}
          columnCount={columnCount}
          onRowCountChange={onRowCountChange}
          onColumnCountChange={onColumnCountChange}
          onStartOver={onStartOver}/>
        <MatrixContainer
          cells={cells}
          containerMeasurements={containerMeasurements}/>

        <Description />
        <hr />
        <Footer />
      </div>
    )
  }
  onRowCountChange (rowCount) {
    const { dispatch } = this.props
    dispatch(rowCountChange(rowCount))
  }
  onColumnCountChange (columnCount) {
    const { dispatch } = this.props
    dispatch(columnCountChange(columnCount))
  }
  onStartOver () {
    const { dispatch } = this.props
    dispatch(startOver(dispatch))
  }
}

const mapStateToProps = (state, ownProps) => {
  const { matrix } = state
  const cells = matrix.get('cells')
  const containerMeasurements = matrix.get('containerMeasurements')
  const rowCount = matrix.get('rowCount')
  const columnCount = matrix.get('columnCount')

  return { cells, containerMeasurements, rowCount, columnCount }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
