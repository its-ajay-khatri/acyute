import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import SiteLogo from '../../../assets/images/header-logo.png'

const Header = ({showMenuPopup, setShowMenuPopup}) => {
    return(
        <>
                <header className="header">
                    <div className="container-fluid">
                        <div className="row" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <div className="offset-md-1 header-section-acyute-logo col-12 col-md-4">
                           <Link to='/'>
                                <img src={SiteLogo} style={{widows:'100px', height:'100px'}}/>
                           </Link>
                        </div>
                        <div className="header-section-acyute-menu-cancel offset-md-13 col-12 col-md-5">
                            <div className="header__menu">
                            <div className="header__menu-toggler" onClick={() => setShowMenuPopup(!showMenuPopup)}>
                                <span className="header__menu-text">
                                <span className="header__menu-inner d-none d-md-block">
                                    { 
                                        !showMenuPopup ? (
                                            <>
                                                <span className="header__menu-open">{ window.scrollY < 10 && 'Menu' }</span>
                                                <span className="header__menu-close" onClick={() => setShowMenuPopup(false)}>Close</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="header__menu-open">Close</span>
                                                
                                            </>
                                        )
                                    }
                                </span>
                                </span>
                                { !showMenuPopup ? (
                                    <span className="header__menu-icon">
                                    <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.9 45.9" style={{"enable-background":"new 0 0 45.9 45.9"}} xmlSpace="preserve">
                                        <path style={{"fill":"none","stroke":"#ffffff","stroke-width":"2"}} d="M23,1c1.7,0,3.5,0.7,4.8,2l15.2,15.2c2.6,2.6,2.6,6.9,0,9.6L27.7,42.9
                        c-2.6,2.6-6.9,2.6-9.6,0L3,27.7c-2.6-2.6-2.6-6.9,0-9.6L18.2,3C19.5,1.7,21.2,1,23,1" />
                                    </svg>
                                    <span className="header__menu-cross" />
                                    <span className="header__menu-cross" />
                                    </span>
                                ) : (
                                    <span className="header__menu-icon a">
                                <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45.9 45.9" style={{"enable-background":"new 0 0 45.9 45.9"}} xmlSpace="preserve">
                                    <path style={{"fill":"none","stroke":"#ffffff","stroke-width":"2"}} d="M23,1c1.7,0,3.5,0.7,4.8,2l15.2,15.2c2.6,2.6,2.6,6.9,0,9.6L27.7,42.9
                    c-2.6,2.6-6.9,2.6-9.6,0L3,27.7c-2.6-2.6-2.6-6.9,0-9.6L18.2,3C19.5,1.7,21.2,1,23,1" />
                                </svg>
                                <span className="header__menu-cross" />
                                <span className="header__menu-cross" />
                                </span>
                                ) }
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </header>
                    { showMenuPopup && <div className="menu u-pe-n" style={{pointerEvents:'all', position:'fixed', cursor:'pointer'}}>
                        <div className="menu__main u-nsb">
                            <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="offset-md-2 col-md-20">
                                <div className="menu__items u-list" style={{pointerEvents:'all'}}>
                                <Link to="/services" className="menu__item" style={{pointerEvents:'all'}}>
                                    <span className="menu__item-title">
                                        <span>Services</span>
                                    </span>
                                 </Link>
                                 <Link to="/about" className="menu__item" style={{pointerEvents:'all'}}>
                                    <span className="menu__item-title">
                                        <span>About Us</span>
                                    </span>
                                 </Link>
                                 <Link to="/web-design" className="menu__item" style={{pointerEvents:'all'}}>
                                    <span className="menu__item-title">
                                        <span>Our Projects</span>
                                    </span>
                                 </Link>
                                 <Link to="/contact" className="menu__item" style={{pointerEvents:'all'}}>
                                    <span className="menu__item-title">
                                        <span>Contact Us</span>
                                    </span>
                                 </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> }
        </>
    )
}

export default Header;