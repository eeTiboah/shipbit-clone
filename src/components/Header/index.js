import React from 'react'
import './Header.css'

const Header = ()=>{
    return (
        <div className="header">
            <div className="header_width">
                <a href="/" className="header_a">
                    <div className="header_logo">
                        <img src="images/logo-192_2.webp" className="header_img" alt="shipbit-logo"/>
                        <img src="images/logo-192_1.webp" className="header_img" alt="shipbit-logo"/>
                        <img src="images/logo-192_3.webp" className="header_img" alt="shipbit-logo"/>
                        <img src="images/logo-192_4.webp" className="header_img" alt="shipbit-logo"/>
                        <img src="images/logo-192_5.webp" className="header_img" alt="shipbit-logo"/>
                    </div>
                    <h3>SHIPBIT</h3>
                </a>
                <ul className="header_links__ul">
                    <li className="header_links__li">
                        <a className="header_links__a" href="/home" data-hover="home"><span>HOME</span></a>
                    </li>
                    <li className="header_links__li">
                        <a className="header_links__a" href="/work" data-hover="work"><span>WORK</span></a>
                    </li>
                    <li className="header_links__li">
                        <a className="header_links__a" href="/service" data-hover="service"><span>SERVICE</span></a>
                    </li>
                    <li className="header_links__li">
                        <a className="header_links__a" href="/about" data-hover="about"><span>ABOUT</span></a>
                    </li>
                    <li className="header_links__li">
                        <a className="header_links__a" href="/jobs" data-hover="jobs"><span>JOBS</span></a>
                    </li>
                    <li className="header_links__li">
                        <a className="header_links__a" href="/contact" data-hover="contact"><span>CONTACT</span></a>
                    </li>
                    <li className="header_links__li">
                        <a className="header_links__a" href="/blog" data-hover="blog"><span>BLOG</span></a>
                    </li>  
                </ul>
            </div>
        </div>
    )
}


export default Header