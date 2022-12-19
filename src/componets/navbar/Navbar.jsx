import React from 'react'
import './navbar.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';

const navbar = () => {
  return (
    <div>
    <div className='navbar'>

        <div className='navbar__wrapper'>

            <div className='navbar__left'></div>
            <NotificationsNoneIcon className='navIcon'/>
            <div className='navbar-right'>

                <div className='navbarIcon'>
                    <NotificationsNoneIcon className='navIcon'/>
                </div>

                <div className='navbarIcon'>
                    <PersonIcon className='navIcon'/>
                </div>

            </div>

        </div>
    </div>
</div>
  )
}

export default navbar