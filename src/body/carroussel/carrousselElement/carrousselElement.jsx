import './carrousselElement.css'


import React from 'react'

function carrousselElement({text}) {
  return (
   <div className="carrousselElement">
      {text && <p>{text}</p>}
    </div>
  )
}

export default carrousselElement