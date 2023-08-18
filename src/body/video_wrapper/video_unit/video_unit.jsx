import React from 'react'
import YoutubeInfos from './getInfos'
import './video_unit.css'
import { Avatar } from '@mui/material'

function video_unit() {
  const videosId = [
    "tBcPji_jRDc",
    "L0gol4CVtEk",
    "Gzdb8atYtSY",
    "Y4J_NYAQQEQ",
    "83P5vNLm1lc",
    "vIBFoBladhg",
    "n-Xn4zk6Kto",
    "NSCZ5awmH1U",
    "mP_fnttJ5g0",
    "60sxo-8E1rc",
    "JQbjS0_ZfJ0",
    "hQsZUVMwEls",
    "QK7JQl9jNzM",
    "tNjOtzy-0n4",
    "5tjkUvZfQRc",
    "4o8Qk1NUiyQ"
  ]
  return (
    <>
      {
        videosId.map(item=>{
          let {thumbnailUrl, title, channelTitle} = YoutubeInfos(item);
          return <div className='video_showcase' key={item}>
            <div className='video_showcase_top'><img src={thumbnailUrl} alt=""/></div>
            <div className='video_showcase_bottom'>
              <div className="avatar">
                <Avatar>CH</Avatar>
              </div>
              <div className="bottom_right">
                <h4>{title}</h4>
                <p>{channelTitle}</p>
              </div>
            </div>
          </div>
        })
      }
    </>
  )
}

export default video_unit