import React, { useState, useEffect } from "react";
import './boldTextCenterSection.css'
import '../../animations.css'

const BoldTextCenterSection = ({paraId, classNametext, boldText}) => {
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
            <div className={`${classNametext}` + (animatee ? (" technology-text-class") : ("")) } id={paraId ? 'textLeft'+ `${paraId}` : "textLeft1"}>
                <p>{animatee && boldText}</p>
            </div>
        </>
    )
}

export default BoldTextCenterSection;