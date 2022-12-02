import React from 'react'
import './header.css'

export default function Header() {
    return(
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" 
                src="https://images.pexels.com/photos/15286/pexels-photo.jpg"
                alt=""
            />
        </div>
    )
}