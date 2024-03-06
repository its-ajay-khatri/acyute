import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import '../Contact/ContactForm.css'; // Import your CSS file
import { Link } from "react-router-dom";
import SiteLogo from '../../assets/images/header-logo.png'
import FooterComponent from "../CommonComponents/Footer/footerComponent";

const StartAProject = () => {
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

    useEffect(() => {
        const section = document.getElementById('contact-header-id-section');
        if (section) {
        section.scrollIntoView();
        }
    }, [])
    return (
            <>
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
                                 <Link to="#" className="menu__item" style={{pointerEvents:'all'}}>
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
                    <div className='contact-us-outer-container' id="contact-header-id-section">
                        <div className='contact-us-contact-heading'>
                            <p>Start A Project</p>
                        </div>
                        <div className="form-container">
                            <form className="custom-form">
                            <input type="text" name="name" placeholder="Name" className="form-field" />
                                <br />
                                <input type="email" name="email" placeholder="E-mail address" className="form-field" />
                                <br />
                                <input type="text" name="sompany" placeholder="Company" className="form-field" />
                                <br />
                                <input type="text" name="subject" placeholder="Subject" className="form-field" />
                                <br />
                                <textarea name="Message" placeholder="Project Details..." className="form-field"></textarea>
                                <br />
                                <div className='form-button-contact-us'>
                                    <input type="submit" value="Submit" className="submit-button" />
                                </div>
                            </form>
                        </div>
                    </div> }
                    <FooterComponent />
            </>
  );
};

export default StartAProject;
