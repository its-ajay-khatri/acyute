import React, {useEffect, useState} from "react";

const QuestionAnswer = ({paraId, outerDivClass, firstParaText, firstParaClass, secondParaText, secondParaClass}) => {
    const [animatee, setAnimate] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById('textLeft'+ `${paraId}`);
        const rect = section.getBoundingClientRect();
        const scrollThreshold = 152; // Adjust this value based on your needs
  
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
            <div className={`${outerDivClass}` + (animatee ? (" technology-text-class") : ("")) } id={paraId ? 'textLeft'+ `${paraId}` : "textLeft0"}>
                <p className={firstParaClass}>
                    {firstParaText}
                </p>
                <p className={secondParaClass}>
                    {secondParaText}
                </p>
            </div>
        </>
    )
}

export default QuestionAnswer;