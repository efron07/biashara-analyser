import React from 'react'
import './card.css'

const card = (props) => {
  return (
    <div className='infor'>
          <div className='inforItem'>
            <span className='inforTitle'>{props.title}</span> 
               <div className='informaoneyContainer'>
                <span className='moneyInfor'>Tshs</span>
                <span className='money'>{props.money}</span>
               </div>         
          </div>
    </div>
  )
}

export default card