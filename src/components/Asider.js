import React from 'react'
import './Asider.css'
import Content from './Content'
import Footer from './Footer'
function Asider() {
  return (
    <div className='asider'>
       <aside className='aside'>
          <a href='#Global'>Global Events</a><br/>
          <a href='#Window'>Window Events</a><br/>
          <a href='#Form'>Form Events</a><br/>
          <a href='#Keyboard'>Keyboard Events</a><br/>
          <a href='#Mouse'>Mouse Events</a><br/>
          <a href='#Drag'>Drag Events</a><br/>
          <a href='#Clipboard'>Clipboard Events</a><br/>
          <a href='#Media'>Media Events</a><br/>
          <a href='#Misc'>Misc Events</a><br/>
       </aside>    
       <Content/>
    </div>
  )
}

export default Asider