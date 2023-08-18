import './side_option.css'


import React from 'react'

function side_option({avatar, icon, title}) {
  return (
    <div className='side_option'>
      {icon ?? icon}
      {avatar ?? avatar}
      <p>{title}</p>
    </div>
  )
}

export default side_option