import { fromJS, List } from 'immutable'

import {
  generateMatrix,
  generateViewModel,
  getNextViewModel,
  getContainerMeasurements,
  // getCellCoordinatesInPixels,
  getCellCoordinates
} from '../data-utils'

import {
  DEFAULT_ROWS,
  DEFAULT_COLUMNS,
  CELL_SIZE,
  GUTTER
} from '../constants'

import {
  ROW_COUNT_CHANGE,
  COLUMN_COUNT_CHANGE,
  START_OVER,
  NEXT_TICK
} from '../actions/matrix'

let rowCount = DEFAULT_ROWS
let columnCount = DEFAULT_COLUMNS

const getFreshState = () => {
  const matrix = generateMatrix(rowCount, columnCount)
  const cells = generateViewModel(matrix)
  const containerMeasurements = getContainerMeasurements(rowCount, columnCount, CELL_SIZE, GUTTER)

  cells.forEach((cell) => {
    // cell.coordinates = getCellCoordinatesInPixels(cell.position, CELL_SIZE, GUTTER)
    cell.coordinates = getCellCoordinates(cell.position, CELL_SIZE, GUTTER)
  })

  return fromJS({
    rowCount,
    columnCount,
    cells,
    containerMeasurements
  })
}

const matrixApp = (state = getFreshState(), action) => {
  let cells
  let nextState

  switch (action.type) {
    case ROW_COUNT_CHANGE:
      rowCount = action.count
      nextState = getFreshState()
      return nextState

    case COLUMN_COUNT_CHANGE:
      columnCount = action.count
      nextState = getFreshState()
      return nextState

    case START_OVER:
      nextState = getFreshState()
      return nextState

    case NEXT_TICK:
      const oldCells = state.get('cells').toJS()
      cells = getNextViewModel(oldCells)

      cells.forEach((cell) => {
        // cell.coordinates = getCellCoordinatesInPixels(cell.position, CELL_SIZE, GUTTER)
        cell.coordinates = getCellCoordinates(cell.position, CELL_SIZE, GUTTER)
      })

      nextState = state.set('cells', List(cells))
      return nextState

    default:
      return state
  }
}

export default matrixApp
