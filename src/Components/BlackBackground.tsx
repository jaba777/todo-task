import React from 'react'
import './BlackBackground.scss'

const BlackBackground = ({children}:any) => {
  return (
    <div className='black'>
      {children}
    </div>
  )
}

export default BlackBackground
