import { TICK_INTERVAL, MAX_TICK_COUNT } from '../constants'
export const ROW_COUNT_CHANGE = 'ROW_COUNT_CHANGE'
export const COLUMN_COUNT_CHANGE = 'COLUMN_COUNT_CHANGE'
export const START_OVER = 'START_OVER'
export const NEXT_TICK = 'NEXT_TICK'

let timerInterval
let tickCount = 0

function stopTimer () {
  clearInterval(timerInterval)
  tickCount = 0
}

function startTimer (dispatch) {
  stopTimer()

  timerInterval = setInterval(() => {
    if (MAX_TICK_COUNT < ++tickCount) {
      stopTimer()
    }

    dispatch(nextTick())
  }, TICK_INTERVAL)
}

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

export function startOver (dispatch) {
  startTimer(dispatch)
  return {
    type: START_OVER
  }
}

export function nextTick () {
  return {
    type: NEXT_TICK
  }
}
