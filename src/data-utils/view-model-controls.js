import R from 'ramda'

function addElementToList (list, row, column, matrix) {
  const hasElement = list.find((el) => (el.id === `cell-${row}-${column}`))
  if (!hasElement) {
    list.push({
      id: `cell-${row}-${column}`,
      text: matrix[row][column],
      position: {
        x: row,
        y: column
      }
    })
  }
}

export function generateViewModel (matrix) {
  const ROWS = matrix.length
  const COLUMNS = matrix[0].length

  const numberOfCircles = Math.ceil(Math.min(ROWS, COLUMNS) / 2)

  let allCircleElements = []
  let row
  let column

  for (let circle = 0; circle < numberOfCircles; circle++) {
    const circleElements = []

    // Top Edge
    /*
      ,________________,
      |  00    01   02 |  03
      '----------------'
         10    11   12    13
         20    21   22    23
         30    31   32    33
    */
    row = circle
    for (column = circle; column < COLUMNS - circle - 1; column++) {
      addElementToList(circleElements, row, column, matrix)
    }

    // Right Edge
    /*
                      ,_____,
      00    01   02   |  03 |
      10    11   12   |  13 |
      20    21   22   |  23 |
                      `-----'
      30    31   32    33
    */
    column = COLUMNS - circle - 1
    for (row = circle; row < ROWS - circle - 1; row++) {
      addElementToList(circleElements, row, column, matrix)
    }

    // Bottom Edge
    /*
      00    01   02    03
      10    11   12    13
      20    21   22    23
          ,________________,
      30  |  31   32    33 |
          `----------------'
    */
    row = ROWS - circle - 1
    for (column = COLUMNS - circle - 1; column > circle; column--) {
      addElementToList(circleElements, row, column, matrix)
    }

    // Left Edge
    /*
        00     01   02    03
      ,____,
      | 10 |   11   12    13
      | 20 |   21   22    23
      | 30 |   31   32    33
      '----'
    */
    column = circle
    for (row = ROWS - circle - 1; row > circle; row--) {
      addElementToList(circleElements, row, column, matrix)
    }

    // Center cell
    if (ROWS === COLUMNS && ROWS % 2 === 1 && circle === numberOfCircles - 1) {
      addElementToList(circleElements, row, column, matrix)
    }

    // Mapping next and prev nodes
    circleElements.forEach((el, idx) => {
      const cell = el
      if (cell.disbleAnimations) {
        cell.nextPosition = el.position
        cell.prevPosition = el.position
      }

      cell.nextPosition = circleElements[(idx + 1) % circleElements.length].position
      cell.prevPosition = circleElements[Math.abs(circleElements.length + idx - 1) % circleElements.length].position
    })

    allCircleElements = allCircleElements.concat(circleElements)
  }

  return allCircleElements
}

export function getNextViewModel (model) {
  const nextModel = model.map((item) => {
    let nextElement = model.find((el) => (R.equals(el.position, item.nextPosition)))
    nextElement = R.clone(nextElement)
    nextElement.text = item.text
    nextElement.id = item.id
    return nextElement
  })

  return nextModel
}

export function getContainerMeasurements (ROWS, COLUMNS, CELL_SIZE, GUTTER) {
  return {
    width: ((COLUMNS * CELL_SIZE) + ((COLUMNS + 1) * GUTTER)),
    height: ((ROWS * CELL_SIZE) + ((ROWS + 1) * GUTTER))
  }
}

export function getCellCoordinatesInPixels (position, CELL_SIZE, GUTTER) {
  const top = (CELL_SIZE * position.x) + ((position.x + 1) * GUTTER)
  const left = (CELL_SIZE * position.y) + ((position.y + 1) * GUTTER)
  return {
    top: `${top}px`,
    left: `${left}px`
  }
}
