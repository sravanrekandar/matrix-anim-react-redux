export function generateMatrix (ROWS, COLUMNS) {
  const matrix = []
  let count = 0
  for (let i = 0; i < ROWS; i++) {
    const row = []
    for (let j = 0; j < COLUMNS; j++) {
      row.push(++count)
    }
    matrix.push(row)
  }

  return matrix
}

export function stringifyMatrix (matrix) {
  let str = ''
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      str += `\t${matrix[i][j]}`
    }
    str += '\n'
  }

  return str
}
