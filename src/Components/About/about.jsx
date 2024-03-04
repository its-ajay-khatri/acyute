import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../App";
import '../animations.css';
import './about.css';
import TextWithCircle from "../CommonComponents/TextWithCircle/TextWithCircle";
import FooterComponent from "../CommonComponents/Footer/footerComponent";
import TopVideoSection from "../CommonComponents/TopVideoSection/TopVideoSection";
import TextLeftNonBold from "../CommonComponents/TextLeftNonBold/TextLeftNonBold";
import AboutImage from '../../assets/images/IT-consultancy/IT-consulting3.jpeg';
import AboutBannerVideo from '../../assets/videos/Networking-video.mp4'

const About = () => {

    let { showMenuPopup, setShowMenuPopup } = useContext(MyContext);

    useEffect(() => {
        setShowMenuPopup(false);
    }, [])
    

    return(
        <>
            <div className="about-section-main-container">
            <TopVideoSection bannerVideoHeadingText="About us" videoUrlLoop={AboutBannerVideo} videoUrl={AboutBannerVideo} videoBackgroundColor='#bf0bbf' showMenuPopup={showMenuPopup} setShowMenuPopup={setShowMenuPopup} />
                { !showMenuPopup &&
                <>
                    <div className="about-welcome-text-section">
                        <TextLeftNonBold paraId="1" classNameText="technology-text-class" paraText="Welcome to Acyute, where innovation meets excellence in digital solutions. Established with 
                        a vision to empower businesses in the dynamic digital era, we specialize in comprehensive 
                        services tailored to your unique needs. Our expertise spans Web Design, Software 
                        Development, IT Consulting, Networking, Database Management, and Digital Marketing, 
                        each domain mastered by our team of seasoned professionals." />
                        <TextLeftNonBold paraId="2" classNameText="technology-text-class" paraText="At Acyute, we believe in creating solutions that are effective, future-proof, and aligned with 
                        your strategic objectives. Our holistic approach ensures every aspect of your digital presence 
                        and infrastructure is impeccable, secure, and ahead of the curve." />
                        {/* <TextLeftNonBold /> */}
                    </div>
                    <div className="about-text-video-section">
                        <div class="about-text-video-container">
                            <div class="about-text-video-left-section">
                                <TextLeftNonBold paraId="3" classNameText="technology-text-class" paraText="We understand the challenges and opportunities 
                                that come with technological advancement. That's 
                                why our team is committed to staying abreast of 
                                the latest trends and innovations, integrating 
                                them into solutions that solve today's challenges 
                                and anticipate tomorrow's needs." />
                                 <TextLeftNonBold paraId="4" classNameText="technology-text-class" paraText="Our commitment to quality, security, and 
                                innovation is unwavering. We work tirelessly to 
                                ensure that each solution we provide mee.ts and 
                                exceeds your expectations. Partnering with Acyute 
                                means choosing a path of digital transformation 
                                led by experts passionate about driving growth 
                                and success for your business." />
                                <TextLeftNonBold paraId="5" classNameText="technology-text-class" paraText="Join us on this journey of digital excellence. Let 
                                    Acyute be the architect of your digital future, 
                                    where your vision is our blueprint, and your 
                                    success is our mission." />
                            </div>
                            <div class="about-text-video-right-section section-zoomIn">
                                <img src={AboutImage} />
                            </div>
                        </div>
                    </div>
                    <div className="about-section-bold-text">
                        <TextLeftNonBold paraId="7" classNameText="section-lineUp2" paraText="Acyute – Above Expectations, Beyond Boundaries." />
                    </div>
                    <div className="about-section-text-with-cicle-section">
                        <TextWithCircle paraId="8" leftSectionText="If you've got an idea, feel free to drop by and discuss it with us to discover the ways we can assist you in bringing it to life." CircleLink="contact" CircleText='Contact us' LeaveARequestText="" />   
                    </div>
                    <FooterComponent />
                </> }
            </div>
        </>
    )
}

export default About;