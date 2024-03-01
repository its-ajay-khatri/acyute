import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './textWithCircle.css';
import '../../animations.css'



const TextWithCircle = ({paraId , leftSectionText, CircleText, CircleLink}) =>{

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    const [animatee, setAnimate] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          const section = document.getElementById('textLeft'+ `${paraId}`);
          const rect = section.getBoundingClientRect();
          const scrollThreshold = 150; // Adjust this value based on your needs
    
          if (rect.bottom <= window.innerHeight + scrollThreshold) {
            setAnimate(true);
          } else {
            setAnimate(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
        <>
                        <section id={paraId ? 'textLeft'+ `${paraId}` : "textLeft8"} className="b-content-button u-margin" data-scroll-section data-scroll data-scroll-repeat data-scroll-call="content-button">
                            <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-xl-11 offset-md-2">
                                <div className="b-content-button__titles">
                                    {/* <div className="e-suptitle" data-animate="suptitleReveal">
                              
                                    </div> */}
                                    <p className={"e-title" + (animatee ? (" section-lineUp2") : ("")) } ata-animate="splitLinesReveal">{ animatee && leftSectionText}
                                    </p>      </div>
                                </div>
                                <div >
                                <div className="b-content-button__cta">
                                    <a href={`${CircleLink}`}  className={`e-cta is-inview ${isHovered ? 'a' : ''}`} data-scroll data-scoll-call="cta" data-scroll-repeat style={{transform: isHovered ? `'3s ease-in-out'` : ''}}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                    {/* <span className="e-cta__hover hover" /> */}
                                    { isHovered ? (
                                        <>
                                            <span className="e-cta__hover hover" style={{"-webkit-transform":"translate(0px, 0px)","-ms-transform":"translate(0px, 0px)","transform":"translate(0px, 0px)"}} />
                                            <div className="e-cta__inner inner" style={{"-webkit-transform":"translate3d(1.1639px, 2.86481px, 0px)","-ms-transform":"translate3d(1.1639px, 2.86481px, 0px)","transform":"translate3d(1.1639px, 2.86481px, 0px)"}}>
                                                {/* <span className="e-cta__icon"><svg width={47} height={34} viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M40.9824 27.5159L45.2008 11.9169C45.9366 9.19629 44.3248 6.40455 41.6008 5.6814L25.9824 1.53516" stroke="white" strokeWidth={2} />
                                                    <path d="M44.8394 7.95507L1.49414 32.9805" stroke="white" strokeWidth={2} />
                                                </svg>
                                                </span> */}
                                                <span className="e-cta__text">{CircleText}</span>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="e-cta__inner inner" style={{transform: isHovered ? `'3s ease-in-out'` : ''}}>
                                            {/* <span className="e-cta__icon"><svg width={47} height={34} viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M40.9824 27.5159L45.2008 11.9169C45.9366 9.19629 44.3248 6.40455 41.6008 5.6814L25.9824 1.53516" stroke="white" strokeWidth={2} />
                                                <path d="M44.8394 7.95507L1.49414 32.9805" stroke="white" strokeWidth={2} />
                                            </svg>
                                            </span> */}
                                            <Link to='contact-us'>
                                                <span className="e-cta__text">{CircleText}</span>
                                            </Link>
                                        </div>
                                        </>
                                    ) }
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
        </>
    )
}

export default TextWithCircle;