import React, { useState, useEffect }  from "react";
import '../../animations.css';

const TextLeftNonBold = ({paraId, classNameText, paraText}) => {

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
            <p id={paraId ? 'textLeft'+ `${paraId}` : ""}
                 className={classNameText ? ( animatee ? classNameText : "") : ""} 
            >
                 { animatee && paraText }
            </p>
        </>
    )
}

export default TextLeftNonBold;