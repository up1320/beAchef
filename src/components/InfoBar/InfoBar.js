import React from 'react'
import onlineIcon from "../images/onlineIcon.png"
import closeIcon from "../images/closeIcon.png"

import "./InfoBar.css"
function InfoBar({room}) {
  return (
      <div className='infoBar'>
          <div className='leftInnerContainer'>
              <img className='onlineIcon' src={onlineIcon}  alt="online image"/> 
              <h3>{room }</h3>
          </div>
          <div className='rightInnerContainer'>
              <a href='/foodConnect'><img src={closeIcon} alt="close image" /></a>
          </div>
    </div>
  )
}

export default InfoBar