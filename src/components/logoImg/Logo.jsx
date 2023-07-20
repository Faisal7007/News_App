import React from 'react'
import abc_logo from './abc_news_logo.png'
//  abcNEWS Logo ==>  https://www.pngitem.com/pimgs/m/65-656029_abc-news-news-logo-clear-background-hd-png.png

function Logo() {
  return (
    <div className='logo'>
        <img style={{height:'60px'}} src={abc_logo} alt="news_logo" />
    </div>
  )
}

export default Logo
