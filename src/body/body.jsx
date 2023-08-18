import './body.css'
import Carrousssel from './carroussel/carrousssel'
import VideoWrapper from './video_wrapper/video_wrapper'

import React from 'react'

function body() {
  return (
    <div className='video_wrapper'>
      <Carrousssel/>
      <VideoWrapper/>
    </div>
  )
}

export default body