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
                        <p>Toronto</p>
                        <Link to="tel:+1 4376065851">+14376065851</Link>
                        <Link to="mailto:contact@acyute.com">contact@acyute.com</Link>
                    </div>
                </div>
                <div className="footer-container">
                        <div className="social-media-section">
                            <div className="social-media-section-inner">
                            <FontAwesomeIcon icon={faTimes} className="icon-white-bg-black" />
                            <FontAwesomeIcon icon={faFacebook} className="icon-blue-bg-white" />
                            <FontAwesomeIcon icon={faInstagram} className="icon-instagram" />
                            {/* <FontAwesomeIcon icon={faEnvelope} className="icon-gmail" /> */}
                            <FontAwesomeIcon icon={faLinkedin} className="icon-white-bg-blue" />
                            </div>
                            <div className="footer-copyright-section">
                                2024 - Acyute Technologies
                            </div>
                        </div>
                        <div className="footer-privacy-policy-section">
                            <Link to="#">Contact us</Link>
                            <Link to="#">Join the team</Link>
                            <Link to="#">Web terms and conditions</Link>
                            <Link to="#">Privacy policy</Link>
                        </div>
                    </div>
            </footer>
        </>
    )
}

export default FooterComponent;