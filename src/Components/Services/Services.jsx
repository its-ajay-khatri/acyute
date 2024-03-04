import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import './services.css';
import '../CommonComponents/Header/header.css'
import '../animations.css'
import { Link } from "react-router-dom";
import SiteLogo from '../../assets/images/header-logo.png'
import FooterComponent from "../CommonComponents/Footer/footerComponent";

const Services = () => {
    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);

    useEffect(() => {
        setShowMenuPopup(false);
    }, [])

    const [disableLoader, setDisableLeader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setDisableLeader(false)
        }, 1100)
    }, [])
    return(
        <>
            <div className="services-outer-container">
            <header className="header splash-container">
                { disableLoader && <div class="water-splash"></div> }
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
                            { 
                                !showMenuPopup ? (
                                    <>
                                    <span className="header__menu-text">
                                        <span className="header__menu-inner d-md-block">
                                            <span className="header__menu-open">Menu</span>   
                                            </span>
                                        </span>                                    
                                    </>
                                ) : (
                                    <span className="header__menu-icon a">                                       
                                        <p className="cross-class-path">x</p>
                                    </span>
                                )
                            }
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
                                        <span>SERVICES</span>
                                    </span>
                                 </Link>
                                 <Link to="/about" className="menu__item" style={{pointerEvents:'all'}}>
                                    <span className="menu__item-title">
                                        <span>ABOUT US</span>
                                    </span>
                                 </Link>
                                 <Link to="/web-design" className="menu__item" style={{pointerEvents:'all'}}>
                                    <span className="menu__item-title">
                                        <span>OUR PROJECTS</span>
                                    </span>
                                 </Link>
                                 <Link to="/contact" className="menu__item" style={{pointerEvents:'all'}}>
                                    <span className="menu__item-title">
                                        <span>CONTACT US</span>
                                    </span>
                                 </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> }
                { !showMenuPopup &&
                    <>      <div className="services-heading-section">
                                <p className="services-heading">Services</p>
                            </div>
                             <div className="services-strategy-section-container">                                
                                <div className="it-consultancy-fifty-fifty-section">

                                    <Link to='/web-development' className="fifty-fifty-left-container">
                                        <div className="fifty-fifty-left-container">
                                            <p className="Service-name-heading">
                                                Software Development
                                            </p>
                                            <p className="Service-name-description">
                                                The Engine of Customization
                                            </p>
                                        </div>
                                    </Link>
                                    
                                    
                                    <Link to='/database-management' className="fifty-fifty-right-container">
                                        <div className="fifty-fifty-left-container">
                                            <p className="Service-name-heading">
                                                Database Development
                                            </p>
                                            <p className="Service-name-description">
                                                The Vault of your Digital Assets
                                            </p>
                                        </div>
                                        
                                    </Link>
                                </div>
                                <div className="it-consultancy-fifty-fifty-section">

                                    <Link to='/it-consultancy' className="fifty-fifty-left-container">
                                        <div className="fifty-fifty-left-container">
                                            <p className="Service-name-heading">
                                                IT Consulting
                                            </p>
                                            <p className="Service-name-description">
                                                The Compass for your Digital Quest
                                            </p>
                                        </div>
                                    </Link>

                                    <Link to='/web-design' className="fifty-fifty-right-container">
                                        <div className="fifty-fifty-left-container">
                                            <p className="Service-name-heading">
                                                Web Development
                                            </p>
                                            <p className="Service-name-description">
                                                The Art of First Impressions
                                            </p>
                                        </div>
                                        
                                    </Link>
                                </div>
                                <div className="it-consultancy-fifty-fifty-section">

                                    <Link to='/networking' className="fifty-fifty-left-container">
                                        <div className="fifty-fifty-left-container">
                                            <p className="Service-name-heading">
                                                Networking
                                            </p>
                                            <p className="Service-name-description">
                                                The Synapses of your Business Brain
                                            </p>
                                        </div>
                                    </Link>

                                    <Link to='/digital-marketing' className="fifty-fifty-right-container">
                                        <div className="fifty-fifty-left-container">
                                            <p className="Service-name-heading">
                                                Digital Marketing
                                            </p>
                                            <p className="Service-name-description">
                                                The Voice of Your Online Persona
                                            </p>
                                        </div>
                                        
                                    </Link>
                                </div>                            
                            </div>
                        <FooterComponent />
                    </>
                 }
            </div>
        </>
    )
}

export default Services;