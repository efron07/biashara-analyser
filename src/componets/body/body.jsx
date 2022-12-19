import React from 'react'
import Navbar from '../navbar/Navbar'
import './body.css'
import Home from '../../pages/home/home'
import DashbordBar from '../mostUsed/dashbordBar/dashbordBar'

const body = () => {
  return (
    <div className='mainContent'>

       <Navbar/>
        <DashbordBar/>
        <Home/>

    </div>
  )
}

export default body 