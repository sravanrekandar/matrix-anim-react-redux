import {
  generateMatrix,
  generateViewModel,
  getContainerMeasurements,
  getCellCoordinatesInPixels
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
  START_OVER
} from '../actions/matrix'

let rowCount = DEFAULT_ROWS
let columnCount = DEFAULT_COLUMNS

const getFreshState = () => {
  const matrix = generateMatrix(rowCount, columnCount)
  const cells = generateViewModel(matrix)
  const containerMeasurements = getContainerMeasurements(rowCount, columnCount, CELL_SIZE, GUTTER)

  cells.forEach((cell) => {
    cell.coordinates = getCellCoordinatesInPixels(cell.position, CELL_SIZE, GUTTER)
  })

  return {
    rowCount,
    columnCount,
    cells,
    containerMeasurements
  }
}

const matrixApp = (state = getFreshState(), action) => {
  switch (action.type) {
    case ROW_COUNT_CHANGE:
      rowCount = action.count
      return getFreshState()

    case COLUMN_COUNT_CHANGE:
      columnCount = action.count
      return getFreshState()

    case START_OVER:
      return getFreshState()
    default:
      return state
  }
}

export default matrixApp
