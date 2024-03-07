import React from "react";
import './footer.css';
import FooterLogo from  '../../../assets/images/footer-logo.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
//   faTimes,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import faceBookIcon from '../../../assets/images/footer-images/icons8-facebook-100.png'
import twitterIcon from '../../../assets/images/footer-images/icons8-twitterx-100.png'

const FooterComponent = () => {
    return(
        <>
            <footer className="footer-outer-section">
                <div className="footer-about-section">
                    <div className="footer-find-us-section">
                        <p>You can { window.innerWidth > 769 && <br /> }find us</p>
                    </div>
                    <div className="footer-logo-section">
                        <img src={FooterLogo} />
                    </div>
                    <div className="footer-contact-us-section">
                       <div className="footer-top-right-section">
                            <p>Toronto</p>
                            <Link className="footer-telephone-class" to="tel:+1 4376065851">+1 (437)-606-5851</Link>
                            <div>
                            <Link className="footer-telephone-class" to="mailto:contact@acyute.com">contact@acyute.com</Link>
                            </div>
                       </div>
                    </div>
                </div>
                <div className="footer-container">
                        <div className="social-media-section">
                            <div className="social-media-section-inner">
                            <Link to="#"><img width={35} height={35} src={twitterIcon} /></Link>
                            <Link to="#"><img width={35} height={35} src={faceBookIcon} /></Link>
                            <Link to="#"><FontAwesomeIcon icon={faInstagram} className="icon-instagram" /></Link>
                            
                            <Link to="#"><FontAwesomeIcon icon={faLinkedin} className="icon-white-bg-blue" /></Link>
                            </div>
                            <div className="footer-copyright-section">
                                2024 - Acyute Technologies
                            </div>
                        </div>
                        <div className="footer-privacy-policy-section">
                            <Link to="/contact">Contact us</Link>
                            {/* <Link to="/contact">Join the team</Link> */}
                            <Link to="#">Terms and Conditions</Link>
                            <Link to="#">Privacy policy</Link>
                        </div>
                    </div>
            </footer>
        </>
    )
}

export default FooterComponent;