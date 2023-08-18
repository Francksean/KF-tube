import './video_wrapper.css'
import React from 'react'
import VideoUnit from './video_unit/video_unit'

function video_wrapper() {
  return (
    <div className='VideoUnitWrapper'>
      <VideoUnit/>
    </div>
  )
}

export default video_wrapper