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

      const updateCursorPosition = (event) => {
    document.documentElement.style.setProperty('--x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--y', `${event.clientY}px`);
  };

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
                                    <Link to={`/${CircleLink}`}  className={`circular-button e-cta is-inview ${isHovered ? 'a' : ''}`} data-scroll data-scoll-call="cta" data-scroll-repeat style={{transform: isHovered ? `'3s ease-in-out'` : ''}}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                    {/* <span className="e-cta__hover hover" /> */}
                           
                                        <>
                                            <span className="e-cta__hover hover color-change" style={{"-webkit-transform":"translate(0px, 0px)","-ms-transform":"translate(0px, 0px)","transform":"translate(0px, 0px)"}} />
                                            <div className="e-cta__inner inner" style={{"-webkit-transform":"translate3d(1.1639px, 2.86481px, 0px)","-ms-transform":"translate3d(1.1639px, 2.86481px, 0px)","transform":"translate3d(1.1639px, 2.86481px, 0px)"}}>
                                                
                                                    <span className="e-cta__text">{CircleText}</span>
                                                
                                            </div>
                                        </>
                                    
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                        </section>
        </>
    )
}

export default TextWithCircle;