import React, {useState, useEffect, useContext, useRef} from "react";
import { MyContext } from "../../App";
import './home.css';
// import PortfolioSlider from './PortfolioSlider'
import { Link } from "react-router-dom";
import '../animations.css';
import AcyuteBanner from '../../assets/images/Acute-font-for-banner-section.png'
import FooterComponent from "../CommonComponents/Footer/footerComponent";
import FullWidthVideoSection from "../FullWidthVideoSection/FullWidthVideoSection";
import Header from "../CommonComponents/Header/Header";
import Loading from "../Loading/Loading";
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import TextLeftNonBold from "../CommonComponents/TextLeftNonBold/TextLeftNonBold";
import PortfolioSlider from "./PortfolioSlider";
import HomeImage from '../../assets/videos/database-management.mp4'

const AcyuteHome = () => {

    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showLoading, setShowLoading] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const handleScroll = () => {
          setScrollPosition(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const bannerStyle = {
        width: '83%',
        paddingTop: '2em',
        transform: `translateX(-${scrollPosition * 0.5}px)`, // Adjust the scroll speed
      };
    
      const technologiesStyle = {
        transform: `translateX(${scrollPosition * 0.5}px)`, // Adjust the scroll speed
      };
    
      const descriptionStyle = {
        opacity: 1 - Math.min(scrollPosition / 600, 1), // Fading effect as you scroll down (adjust 200 as needed)
        transform: `translateY(${scrollPosition * 0.01}px)`, // Adjust the scroll speed
      };

      useEffect(() => {
        setShowMenuPopup(false);
    }, [])
    

    useEffect(() => {
        setTimeout(() => {
            setShowLoading(false)
        }, 0)
    }, [])

    const elts = {
        text1: useRef(null),
        text2: useRef(null),
      };
    
      const texts = [
        "",
        "Above",
        "Expectations,",
        "Beyond",
        "Boundaries."
      ];
    
      const morphTime = 1;
      const cooldownTime = 0.25;
    
      let textIndex = texts.length - 1;
      let time = new Date();
      let morph = 0;
      let cooldown = cooldownTime;
    
      const doMorph = () => {
        morph -= cooldown;
        cooldown = 0;
    
        let fraction = morph / morphTime;
    
        if (fraction > 1) {
          cooldown = cooldownTime;
          fraction = 1;
        }
    
        setMorph(fraction);
      };
    
      const setMorph = (fraction) => {
        if (elts.text1.current && elts.text2.current) {
          elts.text2.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
          elts.text2.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
          fraction = 1 - fraction;
          elts.text1.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
          elts.text1.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
          elts.text1.current.textContent = texts[textIndex % texts.length];
          elts.text2.current.textContent = texts[(textIndex + 1) % texts.length];
        }
      };
    
      const doCooldown = () => {
        morph = 0;
    
        if (elts.text2.current) {
          elts.text2.current.style.filter = "";
          elts.text2.current.style.opacity = "100%";
        }
    
        if (elts.text1.current) {
          elts.text1.current.style.filter = "";
          elts.text1.current.style.opacity = "0%";
        }
      };
    
      const animate = () => {
        requestAnimationFrame(animate);
    
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
    
        cooldown -= dt;
    
        if (cooldown <= 0) {
          if (shouldIncrementIndex) {
            textIndex++;
          }
    
          doMorph();
        } else {
          doCooldown();
        }
      };
    
      useEffect(() => {
        setTimeout(() => {
            animate();
        }, 3500)
      }, []);

      useEffect(() => {
        doCooldown();
      }, [showMenuPopup])

      // useEffect(() => {
      //   console.log("okok", window.scrollY)
      // }, [window.scrollY])

    return(
        <>
            { showLoading ? (
                <Loading />
            ) : (
                <div className="home-page-main-counter-container">
                <div className="app js-scroll">
                    <div className="panel" />
                    <Header disableLoadingAnimation={true} showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />

                   { !showMenuPopup &&
                    <>
                    <div className="transition">
                    <div className="transition--panel" />
                    <svg className="curve-light" stroke="none" fill="#fff" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
                        <path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
                    </svg>
                    <svg className="curve-dark" stroke="none" fill="#0f1011" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
                        <path vectorEffect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
                    </svg>
                    </div>
                    <div className="content" data-router-wrapper role="document">
                      <div data-router-view="home">
                        <div className="home" nestedScrollEnabled={true}>
                          <div className="home-page-outer-container">
                              <div className="home-page-banner-section">
                                    <div className="home-section-background-image"></div>
                                    <div className="bigger-text-section">
                                        <div className="bigger-text-section" style={bannerStyle}>
                                          <img className="section-lineUp" src={AcyuteBanner} style={bannerStyle}/>
                                        </div>
                                        <div style={technologiesStyle}>
                                          <p className="banner-section-sub-title section-lineDown">
                                            Technologies
                                        
                                          </p>
                                        </div>
                                            <>
                                            <div id="container">
                                                <span id="text1" ref={elts.text1}></span>
                                                <span id="text2" ref={elts.text2}></span>
                                            </div>
                                            
                                            <svg style={{position:'absolute'}} id="filters">
                                                <defs>
                                                    <filter id="threshold">
                                                        <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                                                            0 1 0 0 0
                                                            0 0 1 0 0
                                                            0 0 0 255 -140" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            </>
                                        
                                    </div>
                              </div>
                          </div>
                          <div className="home-middle-text-with-circle-section">
                            <TextWithCircle paraId="1" leftSectionText="We Ellevate Your Business to the Next Level with Cutting-Edge Technology." CircleLink="contact" CircleText='Contact us'  />    
                          </div>                            
                          <div className="homepage-full-width-video-section">
                              <FullWidthVideoSection videoUrlLoop={HomeImage} videoUrl={HomeImage} />
                          </div>

                          <section
                              className="b-sentence u-margin"
                              id="sentence"
                              >
                              <div className="home-section-background-image"></div>
                              <div className="b-sentence__sticky">
                                  <div className="container-fluid">
                                  <div className="row justify-content-center">
                                      <div className="col-md-20 col-xl-16">
                                      <h2 className="b-sentence__text ">
                                          <TextLeftNonBold paraId="2" classNameText="section-lineUp2" paraText="Join us on this journey of digital excellence. Let Acyute be the architect of your digital future, where your vision is our blueprint, and your success is our mission." />
                                      </h2>
                                      </div>
                                  </div>
                                  </div>
                              </div>
                          </section>

                          <div className="home-middle-text-with-circle-section">
                            <TextWithCircle paraId="3" leftSectionText="We're eager to take on the challenges you present to us! Please go ahead and provide us with your project specifications." CircleLink="start-a-project" CircleText='Start your project'  />                 
                          </div>
 
                            <PortfolioSlider />
                          <div className="home-bottom-text-with-cicle-section" id="bottom-text-circle-section">
                            <TextWithCircle paraId="4" leftSectionText={ ` Have Questions? `+ `\n` + `we Got you`} CircleLink="contact" CircleText='Leave Inquiry'  />
                            </div>
                          </div>
                    </div>
                    </div>
                    <FooterComponent />
                    </>
                    }
                  
                </div>
            </div>
            ) }
            
        </>
    )
}

export default AcyuteHome