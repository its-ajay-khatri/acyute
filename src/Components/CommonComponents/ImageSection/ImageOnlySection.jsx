import React, { useState, useEffect } from "react";

const ImageOnlySection = ({ paraId, ImageOuterDivClassName ,imageUrl}) => {
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
            <div className={`${ImageOuterDivClassName}` + (animatee ? (" section-zoomIn") : ("")) } id={paraId ? 'textLeft'+ `${paraId}` : "textLeft2"}>
                { animatee && <img src={imageUrl} /> }
            </div>
        </>
    )
}

export default ImageOnlySection;