export const ROW_COUNT_CHANGE = 'ROW_COUNT_CHANGE'
export const COLUMN_COUNT_CHANGE = 'COLUMN_COUNT_CHANGE'
export const START_OVER = 'START_OVER'

export function rowCountChange (rowCount) {
  return {
    type: ROW_COUNT_CHANGE,
    count: rowCount
  }
}

export function columnCountChange (columnCount) {
  return {
    type: COLUMN_COUNT_CHANGE,
    count: columnCount
  }
}

export function startOver () {
  return {
    type: START_OVER
  }
}
