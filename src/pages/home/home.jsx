import React from 'react'
import './home.css'
import Card from '../../componets/mostUsed/card/card'
import Dashtable from '../../componets/dashtable/Dashtable'
import Barchat from '../../componets/barchat/Barchat'

const home = () => {
    return (
        <div className='home'>
            <div className='cardss'>
                <Card title='Today Sales' money='150000'/>

                <Card title='Today profit' money='75000'/>
            </div>

            <div className="home-mainbody">

              
                    <Barchat/>
              

                

            </div>

        </div>
    )
}

export default home