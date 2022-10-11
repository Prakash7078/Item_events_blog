import React from 'react'
import event from './event.jpg'
import { Link } from 'react-router-dom'
import './header.css'
import Asider from './Asider'
function Header() {
  return (
    <div className='headers'>
        <img src={event} style={{width:'90px',height:'90px',marginLeft:'15px'}}alt="event"/>
        <ul className='hlist'>
            <li ><a className='home' href="./">HOME</a></li>
            <li><Link to='/About' className='home'>About</Link></li>
        </ul>
    </div>
  )
}

export default Header