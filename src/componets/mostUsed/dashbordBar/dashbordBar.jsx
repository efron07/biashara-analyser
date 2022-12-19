import React from 'react'
import './dashbordBar.css'

const dashbordBar = () => {
  return (
    <div className='bar'>
        <div className='barRight'>
          <span className='barTitle'>Dashbord</span>
          <span> Sales</span>
        </div>
        <div className='barLeft'>
          <span>WELCOME</span>
          <span> November 1 2022</span>
        </div>
    </div>
  )
}

export default dashbordBar