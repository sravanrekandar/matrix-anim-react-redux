/* eslint max-len: [2, 800, 2]*/ // maximum length of 800 characters
import React from 'react'
import GitIcon from './GitIcon'

module.exports = (props) => {
  return (
    <div>
      <h1 className='text-center'>
        Matrix Anim using React and Redux
        {' '}
        <a id='git-link' target='blank' href='https://github.com/sravanrekandar/matrix-anim-jquery'>
          <GitIcon />
        </a>
      </h1>
      <div className='text-center'>
        This is one of the series of exercises to understand the <strong> Data state management using different JS frameworks / libs</strong> This exercise uses React and Redux
      </div>
    </div>
  )
}
