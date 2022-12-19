import React from 'react'
import './home.css'
import Card from '../../componets/mostUsed/card/card'
import DashbordBar from '../../componets/mostUsed/dashbordBar/dashbordBar'
import Table from '../../componets/mostUsed/table/Table'
import UserForm from '../../componets/mostUsed/userForm/UserForm'


const home = () => {
  return (
    <div className ='home'>
    <DashbordBar/>
    <div className='topHome'>

        <div className='userForm'>
            <UserForm/>
        </div>

        <div className='cardss'>
            <Card title='Today Sales' money='150000'/>

            <Card title='Today profit' money='75000'/>
        </div>

    </div>

</div>
  )
}

export default home