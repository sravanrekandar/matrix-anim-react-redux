/* eslint max-len: 0 */
import React from 'react'

const matrix3x3 = `
1  2  3
4  5  6
7  8  9
`
const matrixStates = `
1  2  3      4  1  2      7  4  1
4  5  6  =>  7  5  3  =>  8  5  2
7  8  9      8  9  6      9  6  3
`
const formDescription = `
Rows: 5 [ + Increase rows]    Columns: 5 [ + Increase columns]
        [ - Decrease rows]    Columns: 5 [ + Decrease columns]
`
export default function (props) {
  const listStyle = {
    maxWidth: '320px',
    display: 'inline-block',
    listStyle: 'none',
    textAlign: 'left'
  }

  return (
    <div className='description'>
      <div className='text-center'>
        <h2 className='h2'>Impelementations</h2>
        <ul style={listStyle}>
          <li>jQuery <a href='http://sravanrekandar.com/s/matrix-anim/'>View Demo</a> (<a href='https://github.com/sravanrekandar/matrix-anim-jquery'>View on Github</a>)</li>
          <li>React + Redux (This page) (<a href='https://github.com/sravanrekandar/matrix-anim-react-redux'>View on Github</a>)</li>
          <li>AngularJS</li>
          <li>Angular + Redux</li>
          <li>Angular2</li>
        </ul>
      </div>
      <div className='text-center'>
        <h2 className='h2'>Requirements</h2>
        <p>1. Generate a <strong>m</strong> x <strong>n</strong> matrix (say 3x3 for example)</p>
        <pre>
        {matrix3x3}
        </pre>
        <p>2. We have to render the values on a webpage and animate the cells to their next positions clock wise for every second</p>
        <pre>
          {matrixStates}
        </pre>
        <p>3. Give controls to user (a form) to change the rows/columns counts</p>
        <pre>
          {formDescription}
        </pre>
        <p>4. On receiving user input, generate the matrix according to new row/column counts, render the cells and start animating</p>
      </div>
    </div>
  )
}
